/* AuraFlow — structure du questionnaire.
   Les libellés vivent dans i18n.js (clés qcm.<id>.*). Ici : la logique. */

const QCM = [
  // 1 — Profil civil & temps
  { id: 'age',        section: 1, type: 'radio', opts: ['u18', 'a18', 'a26', 'a36', 'a51', 'a65'] },
  { id: 'profession', section: 1, type: 'radio', opts: ['student', 'employee', 'freelance', 'exec', 'seeking', 'retired'] },
  { id: 'timezone',   section: 1, type: 'timezone' },
  { id: 'time',       section: 1, type: 'radio', opts: ['t15', 't30', 't60', 't60p'] },

  // 2 — Santé & pathologies
  { id: 'conditions', section: 2, type: 'multi', exclusive: 'none', opts: ['none', 'cardio', 'diabetes', 'joints', 'resp', 'mental', 'other'] },
  { id: 'contra',     section: 2, type: 'multi', exclusive: 'none', opts: ['none', 'knees', 'back', 'shoulders', 'pregnancy', 'injury'] },
  { id: 'energy',     section: 2, type: 'scale', min: 1, max: 5 },
  { id: 'sleep',      section: 2, type: 'radio', opts: ['s5', 's6', 's8', 's9'] },

  // 3 — Profil psychologique & objectifs
  { id: 'stress',     section: 3, type: 'scale', min: 1, max: 5 },
  { id: 'motivation', section: 3, type: 'radio', opts: ['visual', 'analytic', 'pressure', 'support'] },
  { id: 'goals',      section: 3, type: 'multi', opts: ['sport', 'learning', 'career', 'wellness', 'nutrition', 'creativity'] }
];

window.AF_QCM = QCM;
