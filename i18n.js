/* AuraFlow — internationalisation.
   Pour ajouter une langue : copier un bloc, traduire les valeurs, ajouter l'entrée dans LANGS. */

const LANGS = [
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' }
];

const I18N = {
  fr: {
    tagline: 'AuraFlow voit le jour pour illuminer votre journée.',
    loading: 'Préparation de votre envol…',
    skip: 'Passer',
    next: 'Continuer',
    back: 'Retour',
    finish: 'Analyser mon profil',
    welcome: {
      title: 'Bienvenue sur AuraFlow',
      subtitle: 'Un questionnaire intelligent crée votre programme sur-mesure : calendrier, santé et compétences, adaptés à votre vie.',
      time: '⏱️ 2 minutes · 100 % personnalisé',
      cta: 'Commencer le questionnaire'
    },
    sections: { 1: 'Profil & Temps', 2: 'Santé & Bien-être', 3: 'Psychologie & Objectifs' },
    progress: 'Question {n} / {t}',
    multi_hint: 'Plusieurs choix possibles',
    detected: 'Détecté',
    qcm: {
      age: { q: 'Quelle est votre tranche d’âge ?', opt: { u18: 'Moins de 18 ans', a18: '18 – 25 ans', a26: '26 – 35 ans', a36: '36 – 50 ans', a51: '51 – 65 ans', a65: '65 ans et +' } },
      profession: { q: 'Quelle est votre situation ?', opt: { student: 'Étudiant·e', employee: 'Salarié·e', freelance: 'Indépendant·e', exec: 'Cadre / Dirigeant·e', seeking: 'En recherche', retired: 'Retraité·e' } },
      timezone: { q: 'Votre fuseau horaire', help: 'Nous l’avons détecté automatiquement — corrigez si besoin.' },
      time: { q: 'Combien de temps pouvez-vous consacrer par jour ?', opt: { t15: '15 minutes', t30: '30 minutes', t60: '60 minutes', t60p: 'Plus de 60 min' } },
      conditions: { q: 'Avez-vous des antécédents ou maladies chroniques ?', opt: { none: 'Aucun', cardio: 'Cardiovasculaire', diabetes: 'Diabète', joints: 'Dos / Articulations', resp: 'Respiratoire (asthme…)', mental: 'Anxiété / Dépression', other: 'Autre' } },
      contra: { q: 'Contre-indications physiques à prendre en compte ?', opt: { none: 'Aucune', knees: 'Genoux', back: 'Dos', shoulders: 'Épaules', pregnancy: 'Grossesse', injury: 'Récupération blessure' } },
      energy: { q: 'Votre niveau d’énergie habituel', lo: 'Très faible', hi: 'Très élevé' },
      sleep: { q: 'Combien dormez-vous en moyenne ?', opt: { s5: 'Moins de 5 h', s6: '5 – 6 h', s8: '7 – 8 h', s9: 'Plus de 8 h' } },
      stress: { q: 'Votre niveau de stress actuel', lo: 'Très détendu', hi: 'Très stressé' },
      motivation: { q: 'Qu’est-ce qui vous motive le plus ?', opt: { visual: 'Le visuel (graphiques, images)', analytic: 'L’analyse (données, chiffres)', pressure: 'Le défi (objectifs, pression)', support: 'Les encouragements' } },
      goals: { q: 'Vos objectifs prioritaires', opt: { sport: 'Sport & Forme', learning: 'Apprentissage', career: 'Productivité / Carrière', wellness: 'Bien-être / Méditation', nutrition: 'Nutrition', creativity: 'Créativité' } }
    },
    sim: {
      analyzing: 'Notre IA construit votre AuraFlow',
      steps: ['Lecture de votre profil', 'Adaptation santé & sécurité', 'Calibrage psychologique', 'Génération de vos modules'],
      title: 'Votre AuraFlow est prêt',
      subtitle: 'Voici un aperçu de l’interface adaptée à votre profil.',
      mod_cal: 'Calendrier', mod_health: 'Santé', mod_skill: 'Compétences',
      cta: 'Découvrir mon offre',
      adapt: {
        time: 'Sessions calibrées sur {v} par jour',
        safe: 'Programme sport adapté : exercices à faible impact ({v})',
        nosafe: 'Programme sport complet débloqué',
        energy_lo: 'Routines douces pour préserver votre énergie',
        energy_hi: 'Routines intensives compatibles avec votre énergie',
        sleep: 'Rappels de sommeil pour viser un meilleur repos',
        stress: 'Modules anti-stress & respiration ajoutés',
        visual: 'Tableaux de bord visuels activés',
        analytic: 'Statistiques détaillées activées',
        pressure: 'Objectifs chronométrés & défis activés',
        support: 'Messages d’encouragement quotidiens activés',
        goals: 'Compétences ciblées : {v}'
      }
    },
    pricing: {
      title: 'Choisissez votre envol',
      subtitle: '7 jours d’essai gratuit. Sans engagement, annulable à tout moment.',
      trial: '🎁 7 jours offerts',
      popular: 'Le plus populaire',
      period: '/ mois',
      cta: 'Démarrer mon essai gratuit',
      note: 'Aucun prélèvement avant la fin des 7 jours.',
      plans: {
        standard: { name: 'Standard', features: ['Calendrier standard', 'Routines santé de base', '1 compétence', 'Suivi quotidien'] },
        elite: { name: 'Élite Pro', features: ['Compétences multi-sources complexes', 'Calendriers prioritaires', 'Analyses hebdomadaires', 'Support prioritaire'] },
        ultimate: { name: 'Ultimate Master', features: ['IA prédictive en temps réel', 'Exercices sur-mesure complexes', 'Coaching adaptatif illimité', 'Accès anticipé aux nouveautés'] }
      }
    },
    toast_offline: 'Prêt hors-ligne ✓'
  },

  en: {
    tagline: 'AuraFlow rises to brighten your day.',
    loading: 'Preparing your takeoff…',
    skip: 'Skip',
    next: 'Continue',
    back: 'Back',
    finish: 'Analyze my profile',
    welcome: {
      title: 'Welcome to AuraFlow',
      subtitle: 'A smart questionnaire builds your tailor-made program: calendar, health and skills, adapted to your life.',
      time: '⏱️ 2 minutes · 100% personalized',
      cta: 'Start the questionnaire'
    },
    sections: { 1: 'Profile & Time', 2: 'Health & Wellbeing', 3: 'Psychology & Goals' },
    progress: 'Question {n} / {t}',
    multi_hint: 'Multiple answers allowed',
    detected: 'Detected',
    qcm: {
      age: { q: 'What is your age range?', opt: { u18: 'Under 18', a18: '18 – 25', a26: '26 – 35', a36: '36 – 50', a51: '51 – 65', a65: '65 and over' } },
      profession: { q: 'What is your situation?', opt: { student: 'Student', employee: 'Employee', freelance: 'Freelancer', exec: 'Manager / Executive', seeking: 'Job seeking', retired: 'Retired' } },
      timezone: { q: 'Your time zone', help: 'We detected it automatically — adjust if needed.' },
      time: { q: 'How much time can you dedicate per day?', opt: { t15: '15 minutes', t30: '30 minutes', t60: '60 minutes', t60p: 'More than 60 min' } },
      conditions: { q: 'Any medical history or chronic conditions?', opt: { none: 'None', cardio: 'Cardiovascular', diabetes: 'Diabetes', joints: 'Back / Joints', resp: 'Respiratory (asthma…)', mental: 'Anxiety / Depression', other: 'Other' } },
      contra: { q: 'Physical contraindications to consider?', opt: { none: 'None', knees: 'Knees', back: 'Back', shoulders: 'Shoulders', pregnancy: 'Pregnancy', injury: 'Injury recovery' } },
      energy: { q: 'Your usual energy level', lo: 'Very low', hi: 'Very high' },
      sleep: { q: 'How much do you sleep on average?', opt: { s5: 'Under 5 h', s6: '5 – 6 h', s8: '7 – 8 h', s9: 'Over 8 h' } },
      stress: { q: 'Your current stress level', lo: 'Very relaxed', hi: 'Very stressed' },
      motivation: { q: 'What motivates you most?', opt: { visual: 'Visuals (charts, images)', analytic: 'Analysis (data, numbers)', pressure: 'Challenge (goals, pressure)', support: 'Encouragement' } },
      goals: { q: 'Your priority goals', opt: { sport: 'Sport & Fitness', learning: 'Learning', career: 'Productivity / Career', wellness: 'Wellbeing / Meditation', nutrition: 'Nutrition', creativity: 'Creativity' } }
    },
    sim: {
      analyzing: 'Our AI is building your AuraFlow',
      steps: ['Reading your profile', 'Health & safety adaptation', 'Psychological calibration', 'Generating your modules'],
      title: 'Your AuraFlow is ready',
      subtitle: 'Here is a preview of the interface adapted to your profile.',
      mod_cal: 'Calendar', mod_health: 'Health', mod_skill: 'Skills',
      cta: 'See my plan',
      adapt: {
        time: 'Sessions calibrated to {v} per day',
        safe: 'Adapted workout: low-impact exercises ({v})',
        nosafe: 'Full workout program unlocked',
        energy_lo: 'Gentle routines to preserve your energy',
        energy_hi: 'Intense routines matching your energy',
        sleep: 'Sleep reminders for better rest',
        stress: 'Anti-stress & breathing modules added',
        visual: 'Visual dashboards enabled',
        analytic: 'Detailed statistics enabled',
        pressure: 'Timed goals & challenges enabled',
        support: 'Daily encouragement messages enabled',
        goals: 'Targeted skills: {v}'
      }
    },
    pricing: {
      title: 'Choose your flight',
      subtitle: '7-day free trial. No commitment, cancel anytime.',
      trial: '🎁 7 days free',
      popular: 'Most popular',
      period: '/ month',
      cta: 'Start my free trial',
      note: 'No charge before the 7 days end.',
      plans: {
        standard: { name: 'Standard', features: ['Standard calendar', 'Basic health routines', '1 skill', 'Daily tracking'] },
        elite: { name: 'Elite Pro', features: ['Complex multi-source skills', 'Priority calendars', 'Weekly analytics', 'Priority support'] },
        ultimate: { name: 'Ultimate Master', features: ['Real-time predictive AI', 'Complex custom exercises', 'Unlimited adaptive coaching', 'Early access to new features'] }
      }
    },
    toast_offline: 'Ready offline ✓'
  },

  es: {
    tagline: 'AuraFlow nace para iluminar tu día.',
    loading: 'Preparando tu despegue…',
    skip: 'Omitir',
    next: 'Continuar',
    back: 'Atrás',
    finish: 'Analizar mi perfil',
    welcome: {
      title: 'Bienvenido a AuraFlow',
      subtitle: 'Un cuestionario inteligente crea tu programa a medida: calendario, salud y habilidades, adaptados a tu vida.',
      time: '⏱️ 2 minutos · 100 % personalizado',
      cta: 'Empezar el cuestionario'
    },
    sections: { 1: 'Perfil y Tiempo', 2: 'Salud y Bienestar', 3: 'Psicología y Objetivos' },
    progress: 'Pregunta {n} / {t}',
    multi_hint: 'Varias respuestas posibles',
    detected: 'Detectado',
    qcm: {
      age: { q: '¿Cuál es tu rango de edad?', opt: { u18: 'Menos de 18', a18: '18 – 25', a26: '26 – 35', a36: '36 – 50', a51: '51 – 65', a65: '65 y más' } },
      profession: { q: '¿Cuál es tu situación?', opt: { student: 'Estudiante', employee: 'Empleado/a', freelance: 'Autónomo/a', exec: 'Directivo/a', seeking: 'Buscando empleo', retired: 'Jubilado/a' } },
      timezone: { q: 'Tu zona horaria', help: 'La detectamos automáticamente — ajústala si es necesario.' },
      time: { q: '¿Cuánto tiempo puedes dedicar al día?', opt: { t15: '15 minutos', t30: '30 minutos', t60: '60 minutos', t60p: 'Más de 60 min' } },
      conditions: { q: '¿Antecedentes o enfermedades crónicas?', opt: { none: 'Ninguno', cardio: 'Cardiovascular', diabetes: 'Diabetes', joints: 'Espalda / Articulaciones', resp: 'Respiratorio (asma…)', mental: 'Ansiedad / Depresión', other: 'Otro' } },
      contra: { q: '¿Contraindicaciones físicas a considerar?', opt: { none: 'Ninguna', knees: 'Rodillas', back: 'Espalda', shoulders: 'Hombros', pregnancy: 'Embarazo', injury: 'Recuperación de lesión' } },
      energy: { q: 'Tu nivel de energía habitual', lo: 'Muy bajo', hi: 'Muy alto' },
      sleep: { q: '¿Cuánto duermes de media?', opt: { s5: 'Menos de 5 h', s6: '5 – 6 h', s8: '7 – 8 h', s9: 'Más de 8 h' } },
      stress: { q: 'Tu nivel de estrés actual', lo: 'Muy relajado', hi: 'Muy estresado' },
      motivation: { q: '¿Qué te motiva más?', opt: { visual: 'Lo visual (gráficos, imágenes)', analytic: 'El análisis (datos, cifras)', pressure: 'El reto (objetivos, presión)', support: 'El apoyo y ánimo' } },
      goals: { q: 'Tus objetivos prioritarios', opt: { sport: 'Deporte y Forma', learning: 'Aprendizaje', career: 'Productividad / Carrera', wellness: 'Bienestar / Meditación', nutrition: 'Nutrición', creativity: 'Creatividad' } }
    },
    sim: {
      analyzing: 'Nuestra IA construye tu AuraFlow',
      steps: ['Leyendo tu perfil', 'Adaptación de salud y seguridad', 'Calibración psicológica', 'Generando tus módulos'],
      title: 'Tu AuraFlow está listo',
      subtitle: 'Aquí tienes una vista previa de la interfaz adaptada a tu perfil.',
      mod_cal: 'Calendario', mod_health: 'Salud', mod_skill: 'Habilidades',
      cta: 'Ver mi plan',
      adapt: {
        time: 'Sesiones calibradas a {v} por día',
        safe: 'Entrenamiento adaptado: ejercicios de bajo impacto ({v})',
        nosafe: 'Programa de entrenamiento completo desbloqueado',
        energy_lo: 'Rutinas suaves para preservar tu energía',
        energy_hi: 'Rutinas intensas acordes con tu energía',
        sleep: 'Recordatorios de sueño para descansar mejor',
        stress: 'Módulos antiestrés y respiración añadidos',
        visual: 'Paneles visuales activados',
        analytic: 'Estadísticas detalladas activadas',
        pressure: 'Objetivos cronometrados y retos activados',
        support: 'Mensajes de ánimo diarios activados',
        goals: 'Habilidades específicas: {v}'
      }
    },
    pricing: {
      title: 'Elige tu vuelo',
      subtitle: '7 días de prueba gratis. Sin compromiso, cancela cuando quieras.',
      trial: '🎁 7 días gratis',
      popular: 'El más popular',
      period: '/ mes',
      cta: 'Empezar mi prueba gratis',
      note: 'Sin cargos antes de que terminen los 7 días.',
      plans: {
        standard: { name: 'Standard', features: ['Calendario estándar', 'Rutinas de salud básicas', '1 habilidad', 'Seguimiento diario'] },
        elite: { name: 'Elite Pro', features: ['Habilidades multi-fuente complejas', 'Calendarios prioritarios', 'Análisis semanales', 'Soporte prioritario'] },
        ultimate: { name: 'Ultimate Master', features: ['IA predictiva en tiempo real', 'Ejercicios a medida complejos', 'Coaching adaptativo ilimitado', 'Acceso anticipado a novedades'] }
      }
    },
    toast_offline: 'Listo sin conexión ✓'
  },

  ar: {
    tagline: 'يُشرق AuraFlow لينير يومك.',
    loading: '…نُحضّر انطلاقتك',
    skip: 'تخطّي',
    next: 'متابعة',
    back: 'رجوع',
    finish: 'تحليل ملفي',
    welcome: {
      title: 'مرحبًا بك في AuraFlow',
      subtitle: 'استبيان ذكي يبني برنامجك المُصمّم خصيصًا: التقويم والصحة والمهارات، بما يناسب حياتك.',
      time: '⏱️ دقيقتان · مخصّص 100٪',
      cta: 'ابدأ الاستبيان'
    },
    sections: { 1: 'الملف والوقت', 2: 'الصحة والعافية', 3: 'النفسية والأهداف' },
    progress: 'سؤال {n} / {t}',
    multi_hint: 'يمكن اختيار عدة إجابات',
    detected: 'تم الكشف',
    qcm: {
      age: { q: 'ما فئتك العمرية؟', opt: { u18: 'أقل من 18', a18: '18 – 25', a26: '26 – 35', a36: '36 – 50', a51: '51 – 65', a65: '65 فأكثر' } },
      profession: { q: 'ما وضعك الحالي؟', opt: { student: 'طالب/ة', employee: 'موظف/ة', freelance: 'مستقل/ة', exec: 'مدير/قيادي', seeking: 'باحث عن عمل', retired: 'متقاعد/ة' } },
      timezone: { q: 'منطقتك الزمنية', help: '.اكتشفناها تلقائيًا — عدّلها عند الحاجة' },
      time: { q: 'كم من الوقت يمكنك تخصيصه يوميًا؟', opt: { t15: '15 دقيقة', t30: '30 دقيقة', t60: '60 دقيقة', t60p: 'أكثر من 60 دقيقة' } },
      conditions: { q: 'هل لديك سوابق أو أمراض مزمنة؟', opt: { none: 'لا شيء', cardio: 'القلب والأوعية', diabetes: 'السكري', joints: 'الظهر / المفاصل', resp: 'الجهاز التنفسي (الربو…)', mental: 'القلق / الاكتئاب', other: 'أخرى' } },
      contra: { q: 'موانع جسدية يجب مراعاتها؟', opt: { none: 'لا شيء', knees: 'الركبتان', back: 'الظهر', shoulders: 'الكتفان', pregnancy: 'الحمل', injury: 'التعافي من إصابة' } },
      energy: { q: 'مستوى طاقتك المعتاد', lo: 'منخفض جدًا', hi: 'مرتفع جدًا' },
      sleep: { q: 'كم تنام في المتوسط؟', opt: { s5: 'أقل من 5 س', s6: '5 – 6 س', s8: '7 – 8 س', s9: 'أكثر من 8 س' } },
      stress: { q: 'مستوى توترك الحالي', lo: 'هادئ جدًا', hi: 'متوتر جدًا' },
      motivation: { q: 'ما الذي يحفّزك أكثر؟', opt: { visual: 'المرئيات (رسوم، صور)', analytic: 'التحليل (بيانات، أرقام)', pressure: 'التحدي (أهداف، ضغط)', support: 'التشجيع والدعم' } },
      goals: { q: 'أهدافك ذات الأولوية', opt: { sport: 'الرياضة واللياقة', learning: 'التعلّم', career: 'الإنتاجية / المسار المهني', wellness: 'العافية / التأمل', nutrition: 'التغذية', creativity: 'الإبداع' } }
    },
    sim: {
      analyzing: 'يبني ذكاؤنا الاصطناعي AuraFlow الخاص بك',
      steps: ['قراءة ملفك', 'التكيّف مع الصحة والسلامة', 'المعايرة النفسية', 'إنشاء وحداتك'],
      title: 'AuraFlow الخاص بك جاهز',
      subtitle: '.إليك معاينة للواجهة المُهيّأة لملفك',
      mod_cal: 'التقويم', mod_health: 'الصحة', mod_skill: 'المهارات',
      cta: 'اطّلع على عرضي',
      adapt: {
        time: 'جلسات مُعايَرة على {v} يوميًا',
        safe: 'تمارين مُكيّفة: تمارين منخفضة التأثير ({v})',
        nosafe: 'تم فتح برنامج تمارين كامل',
        energy_lo: 'روتينات لطيفة للحفاظ على طاقتك',
        energy_hi: 'روتينات مكثفة تناسب طاقتك',
        sleep: 'تذكيرات للنوم من أجل راحة أفضل',
        stress: 'إضافة وحدات لمكافحة التوتر والتنفّس',
        visual: 'تفعيل لوحات بصرية',
        analytic: 'تفعيل إحصاءات مفصّلة',
        pressure: 'تفعيل أهداف موقوتة وتحدّيات',
        support: 'تفعيل رسائل تشجيع يومية',
        goals: 'مهارات مستهدفة: {v}'
      }
    },
    pricing: {
      title: 'اختر انطلاقتك',
      subtitle: '.تجربة مجانية 7 أيام. دون التزام، يمكنك الإلغاء في أي وقت',
      trial: '🎁 7 أيام مجانًا',
      popular: 'الأكثر رواجًا',
      period: '/ شهريًا',
      cta: 'ابدأ تجربتي المجانية',
      note: '.لا خصم قبل انتهاء الأيام السبعة',
      plans: {
        standard: { name: 'Standard', features: ['تقويم قياسي', 'روتينات صحية أساسية', 'مهارة واحدة', 'متابعة يومية'] },
        elite: { name: 'Elite Pro', features: ['مهارات معقّدة متعددة المصادر', 'تقاويم ذات أولوية', 'تحليلات أسبوعية', 'دعم ذو أولوية'] },
        ultimate: { name: 'Ultimate Master', features: ['ذكاء اصطناعي تنبّؤي فوري', 'تمارين مخصّصة معقّدة', 'تدريب تكيّفي غير محدود', 'وصول مبكر للميزات الجديدة'] }
      }
    },
    toast_offline: '✓ جاهز دون اتصال'
  }
};

function t(key, lang) {
  const dict = I18N[lang] || I18N.fr;
  const get = (o) => key.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
  const v = get(dict);
  return v == null ? (get(I18N.fr) ?? key) : v;
}

window.AF_I18N = { LANGS, I18N, t };
