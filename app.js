/* AuraFlow — logique applicative (MVP étape 1). */
(function () {
  const { LANGS, t } = window.AF_I18N;
  const QCM = window.AF_QCM;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  let lang = localStorage.getItem('af_lang') ||
    (LANGS.find(l => l.code === (navigator.language || 'fr').slice(0, 2))?.code) || 'fr';
  const answers = {};
  let idx = 0;
  let current = null;
  const tt = (k) => t(k, lang);
  const optLabel = (qid, opt) => tt(`qcm.${qid}.opt.${opt}`);

  /* ---------- Screens ---------- */
  function showScreen(id) {
    current = id;
    document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id));
    window.scrollTo(0, 0);
  }

  /* ---------- i18n ---------- */
  function applyI18n() {
    const meta = LANGS.find(l => l.code === lang) || LANGS[0];
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = tt(n.dataset.i18n); });
    $('#year').textContent = new Date().getFullYear();
    // refresh dynamic screens
    if (current === 'qcm') renderQ();
    if (current === 'sim' && $('#sim-result').style.display !== 'none') renderModules();
    if (current === 'pricing') renderPricing();
    $('#sim-analyzing').textContent = tt('sim.analyzing');
  }

  /* ---------- Language switch ---------- */
  function initLang() {
    const sel = $('#lang');
    LANGS.forEach(l => { const o = el('option'); o.value = l.code; o.textContent = l.label; sel.appendChild(o); });
    sel.value = lang;
    sel.addEventListener('change', () => { lang = sel.value; localStorage.setItem('af_lang', lang); applyI18n(); });
  }

  /* ---------- QCM ---------- */
  const answered = (q) => {
    const v = answers[q.id];
    if (q.type === 'multi') return Array.isArray(v) && v.length > 0;
    if (q.type === 'timezone') return true;
    return v != null;
  };

  function renderQ() {
    const q = QCM[idx];
    const chip = $('#chip');
    chip.className = 'chip s' + q.section;
    chip.textContent = tt('sections.' + q.section);
    $('#fill').style.width = ((idx) / QCM.length * 100) + '%';
    $('#count').textContent = tt('progress').replace('{n}', idx + 1).replace('{t}', QCM.length);

    const card = $('#qcard');
    card.innerHTML = '';
    card.appendChild(el('p', 'q', tt(`qcm.${q.id}.q`)));
    if (q.type === 'multi') card.appendChild(el('p', 'hint', tt('multi_hint')));

    if (q.type === 'radio' || q.type === 'multi') {
      const wrap = el('div', 'opts' + (q.opts.length > 4 ? ' grid2' : ''));
      q.opts.forEach(opt => {
        const sel = q.type === 'multi' ? (answers[q.id] || []).includes(opt) : answers[q.id] === opt;
        const o = el('div', 'opt ' + q.type + (sel ? ' sel' : ''));
        o.appendChild(el('span', 'tick'));
        o.appendChild(el('span', null, optLabel(q.id, opt)));
        o.addEventListener('click', () => pick(q, opt));
        wrap.appendChild(o);
      });
      card.appendChild(wrap);
    } else if (q.type === 'scale') {
      const sc = el('div', 'scale');
      for (let i = q.min; i <= q.max; i++) {
        const b = el('button', answers[q.id] === i ? 'sel' : '', i);
        b.addEventListener('click', () => { answers[q.id] = i; renderQ(); });
        sc.appendChild(b);
      }
      card.appendChild(sc);
      const lbl = el('div', 'scale-lbl');
      lbl.appendChild(el('span', null, tt(`qcm.${q.id}.lo`)));
      lbl.appendChild(el('span', null, tt(`qcm.${q.id}.hi`)));
      card.appendChild(lbl);
    } else if (q.type === 'timezone') {
      const sel = el('select', 'tz');
      let zones;
      try { zones = Intl.supportedValuesOf('timeZone'); } catch (e) { zones = null; }
      const detected = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
      if (!answers[q.id]) answers[q.id] = detected;
      (zones || [detected, 'UTC', 'Europe/Paris', 'Africa/Casablanca', 'America/New_York', 'Asia/Dubai']).forEach(z => {
        const o = el('option'); o.value = z; o.textContent = z; if (z === answers[q.id]) o.selected = true; sel.appendChild(o);
      });
      sel.addEventListener('change', () => { answers[q.id] = sel.value; });
      card.appendChild(sel);
      card.appendChild(el('p', 'tz-detected', '📍 ' + tt('detected') + ' : ' + detected));
    }

    const isLast = idx === QCM.length - 1;
    $('#next').textContent = isLast ? tt('finish') : tt('next');
    $('#next').disabled = !answered(q);
  }

  function pick(q, opt) {
    if (q.type === 'radio') {
      answers[q.id] = opt;
    } else {
      let arr = answers[q.id] || [];
      const has = arr.includes(opt);
      if (q.exclusive && opt === q.exclusive) arr = has ? [] : [opt];
      else { arr = arr.filter(x => x !== q.exclusive); arr = has ? arr.filter(x => x !== opt) : [...arr, opt]; }
      answers[q.id] = arr;
    }
    renderQ();
  }

  function nav(dir) {
    if (dir < 0 && idx === 0) return showScreen('welcome');
    idx += dir;
    if (idx >= QCM.length) { idx = QCM.length - 1; return runSimulation(); }
    renderQ();
  }

  /* ---------- Simulation ---------- */
  function runSimulation() {
    showScreen('sim');
    $('#sim-result').style.display = 'none';
    const ul = $('#sim-steps'); ul.innerHTML = '';
    const steps = tt('sim.steps');
    steps.forEach(s => { const li = el('li'); li.appendChild(el('span', 'dot')); li.appendChild(el('span', null, s)); ul.appendChild(li); });
    let i = 0;
    const iv = setInterval(() => {
      if (i < ul.children.length) ul.children[i++].classList.add('done');
      else { clearInterval(iv); renderModules(); $('#sim-result').style.display = 'block'; }
    }, 650);
  }

  function renderModules() {
    const list = (vals) => vals.filter(Boolean);
    const restrictions = list([...(answers.conditions || []), ...(answers.contra || [])].filter(x => x && x !== 'none'));

    // Calendar (blue)
    const cal = [tt('sim.adapt.time').replace('{v}', optLabel('time', answers.time))];
    if (['s5', 's6'].includes(answers.sleep)) cal.push(tt('sim.adapt.sleep'));

    // Health (green)
    const health = [];
    health.push(restrictions.length
      ? tt('sim.adapt.safe').replace('{v}', restrictions.map(r => optLabel(answers.conditions?.includes(r) ? 'conditions' : 'contra', r)).join(', '))
      : tt('sim.adapt.nosafe'));
    if (answers.energy <= 2) health.push(tt('sim.adapt.energy_lo'));
    else if (answers.energy >= 4) health.push(tt('sim.adapt.energy_hi'));
    if (answers.stress >= 4) health.push(tt('sim.adapt.stress'));

    // Skills (orange)
    const skill = [];
    if ((answers.goals || []).length) skill.push(tt('sim.adapt.goals').replace('{v}', answers.goals.map(g => optLabel('goals', g)).join(', ')));
    if (answers.motivation) skill.push(tt('sim.adapt.' + answers.motivation));

    const modules = [
      { cls: 'm-skill', ic: '🎯', title: tt('sim.mod_skill'), items: skill },
      { cls: 'm-cal', ic: '📅', title: tt('sim.mod_cal'), items: cal },
      { cls: 'm-health', ic: '💚', title: tt('sim.mod_health'), items: health }
    ];
    const root = $('#modules'); root.innerHTML = '';
    modules.forEach(m => {
      const d = el('div', 'module ' + m.cls);
      d.appendChild(el('div', 'ic', m.ic));
      d.appendChild(el('h3', null, m.title));
      const ul = el('ul');
      m.items.forEach(it => ul.appendChild(el('li', null, it)));
      d.appendChild(ul);
      root.appendChild(d);
    });
  }

  /* ---------- Pricing ---------- */
  function renderPricing() {
    $('#trial').textContent = tt('pricing.trial');
    $('#pricing-note').textContent = tt('pricing.note');
    const money = v => { try { return new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR' }).format(v); } catch (e) { return v + ' €'; } };
    const data = [
      { key: 'standard', price: 29.99 },
      { key: 'elite', price: 49.99, popular: true },
      { key: 'ultimate', price: 89.50 }
    ];
    const root = $('#plans'); root.innerHTML = '';
    data.forEach(p => {
      const c = el('div', 'glass plan' + (p.popular ? ' popular' : ''));
      if (p.popular) c.appendChild(el('span', 'badge', tt('pricing.popular')));
      c.appendChild(el('h3', null, tt(`pricing.plans.${p.key}.name`)));
      c.appendChild(el('div', 'price', money(p.price) + ' <small>' + tt('pricing.period') + '</small>'));
      const ul = el('ul');
      tt(`pricing.plans.${p.key}.features`).forEach(f => ul.appendChild(el('li', null, f)));
      c.appendChild(ul);
      const btn = el('button', 'btn btn-primary', tt('pricing.cta'));
      btn.addEventListener('click', () => toast(tt('pricing.trial')));
      c.appendChild(btn);
      root.appendChild(c);
    });
  }

  /* ---------- Toast ---------- */
  let toastT;
  function toast(msg) {
    const el = $('#toast'); el.textContent = msg; el.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2600);
  }

  /* ---------- Boot ---------- */
  function boot() {
    initLang();
    applyI18n();
    $('#start').addEventListener('click', () => { idx = 0; showScreen('qcm'); renderQ(); });
    $('#back').addEventListener('click', () => nav(-1));
    $('#next').addEventListener('click', () => nav(1));
    $('#to-pricing').addEventListener('click', () => { showScreen('pricing'); renderPricing(); });

    setTimeout(() => { $('#loading').classList.add('hide'); showScreen('welcome'); }, 2600);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => navigator.serviceWorker.ready)
        .then(() => toast(tt('toast_offline')))
        .catch(() => {});
    }
  }
  document.addEventListener('DOMContentLoaded', boot);
})();
