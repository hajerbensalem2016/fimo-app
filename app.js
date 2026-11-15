/* Moteur de l'appli de révision FIMO — HTML/CSS/JS pur, aucune dépendance.
   Structure : écran d'accueil (invité / connexion) → liste des leçons (chacune avec son épreuve chronométrée) → épreuves finales. */
(function () {
  const $ = (s) => document.querySelector(s);
  const app = $('#app');
  const timerEl = $('#timer');
  const KEY = 'fimo-progress-v1';
  const USER_KEY = 'fimo-user-v1';

  // ---------- Progression (localStorage) ----------
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { read: {}, quiz: {}, exam: {} }; }
    catch (e) { return { read: {}, quiz: {}, exam: {} }; }
  }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} if (typeof cloudSave === 'function') cloudSave(); }
  let P = load();
  function getUser() { try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch (e) { return null; } }
  function setUser(u) { try { if (u) localStorage.setItem(USER_KEY, JSON.stringify(u)); else localStorage.removeItem(USER_KEY); } catch (e) {} }


  // ---------- Firebase : connexion Google + sauvegarde de la progression par utilisateur ----------
  const FB = { ok: false, auth: null, db: null, user: null };
  try {
    if (window.firebase && typeof FIREBASE_CONFIG !== 'undefined') {
      firebase.initializeApp(FIREBASE_CONFIG);
      FB.auth = firebase.auth(); FB.db = firebase.firestore();
      try { FB.db.enablePersistence({ synchronizeTabs: true }).catch(() => {}); } catch (e) {}
      FB.ok = true;
    }
  } catch (e) { FB.ok = false; }
  function mergeProgress(a, b) {
    const out = { read: Object.assign({}, a.read, b.read), quiz: Object.assign({}, a.quiz), exam: Object.assign({}, a.exam) };
    Object.keys(b.quiz || {}).forEach((k) => { if (!out.quiz[k] || b.quiz[k].score > out.quiz[k].score) out.quiz[k] = b.quiz[k]; });
    Object.keys(b.exam || {}).forEach((k) => { if (!out.exam[k] || b.exam[k].score >= out.exam[k].score) out.exam[k] = b.exam[k]; });
    return out;
  }
  function cloudSave() {
    if (!FB.ok || !FB.user) return;
    FB.db.collection('users').doc(FB.user.uid).set({ progress: P, name: FB.user.displayName || '', email: FB.user.email || '', updated: new Date().toISOString() }, { merge: true }).catch(() => {});
  }
  async function cloudLoad() {
    if (!FB.ok || !FB.user) return;
    try {
      const snap = await FB.db.collection('users').doc(FB.user.uid).get();
      if (snap.exists && snap.data().progress) { P = mergeProgress(P, snap.data().progress); save(P); }
      cloudSave();
    } catch (e) {}
  }
  function signInWith(providerName) {
    if (!FB.ok) { alert(t('noNet')); return; }
    const provider = providerName === 'facebook' ? new firebase.auth.FacebookAuthProvider() : new firebase.auth.GoogleAuthProvider();
    const btn = $('#' + providerName); if (btn) { btn.disabled = true; btn.textContent = t('connecting'); }
    FB.auth.signInWithPopup(provider).catch((e) => {
      if (e && (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment' || e.code === 'auth/cancelled-popup-request')) {
        return FB.auth.signInWithRedirect(provider);
      }
      if (e && e.code === 'auth/popup-closed-by-user') { welcome(); return; }
      if (e && e.code === 'auth/operation-not-allowed') { alert(t('fbSoon')); welcome(); return; }
      alert(t('loginFail') + (e && e.message ? e.message : e)); welcome();
    });
  }
  function signOut() { if (FB.ok) FB.auth.signOut(); setUser(null); welcome(); }


  // ---------- Langue (FR / EN) ----------
  const LANG_KEY = 'fimo-lang';
  const T = {
    fr: { appName: 'Révision FIMO<br>Marchandises', tagline: 'Leçons, épreuves chronométrées et examens blancs. Gratuit, sur téléphone et sur PC.', loginTitle: 'Connecte-toi pour retrouver ta progression partout', google: 'G&nbsp; Continuer avec Google (Gmail)', facebook: 'f&nbsp; Continuer avec Facebook', loginHint: 'Ta progression (leçons lues, scores) est enregistrée dans ton compte et retrouvée sur tous tes appareils. Aucune donnée n’est partagée.', connecting: 'Connexion en cours…', loading: 'Chargement…',
      hello: 'Bonjour', homeSub: 'Lis une leçon, puis passe son épreuve chronométrée. Quand tu as fini les leçons, entraîne-toi avec les épreuves finales.', progress: 'Progression', lessonsRead: 'leçons lues', quizOk: 'épreuves réussies', lessons: '📘 Leçons', finals: '🎓 Épreuves finales', finalsSub: 'Elles mélangent toutes les leçons. L’examen officiel : 60 questions, admis à partir de 36 bonnes réponses (60 %).', q: 'q', min: 'min', questions: 'questions', threshold: 'seuil', admitted: 'Admis', failed: 'Échec', sources: 'Sources',
      lesson: 'Leçon', lessonQuiz: 'Épreuve de la leçon', chrono: 'min chrono', best: 'meilleur score', startQuiz: '▶ Lancer l’épreuve chronométrée', listenLesson: '🔊 Écouter la leçon', stopListen: '⏹ Arrêter la lecture', backLessons: '← Retour aux leçons',
      finalTag: 'Épreuve finale', intro1: 'questions à choix multiple, une seule bonne réponse par question, tirées de toutes les leçons', intro2: 'minutes : le minuteur démarre au clic sur « Commencer » et l’épreuve est corrigée automatiquement à la fin du temps', intro3: 'Seuil de réussite :', intro3b: '(60 %, comme l’examen officiel : 36/60)', intro4: 'Tu peux revenir en arrière et changer une réponse avant de valider', lastResult: 'Dernier résultat :', notAdmitted: 'non admis', on: 'le', start: '▶ Commencer l’épreuve', back: '← Retour',
      answered: 'répondues', question: 'Question', listen: '🔊 Écouter', autoOn: '🔁 Lecture auto : ON', autoOff: '🔁 Lecture auto : OFF', prev: '← Précédente', next: 'Suivante →', validate: '✔ Valider et voir le résultat', quit: '✕ Abandonner', missing: 'question(s) sans réponse. Valider quand même ?', quitConfirm: 'Abandonner ? Le score ne sera pas enregistré.', timeout: '⏱ Temps écoulé : l’épreuve a été corrigée automatiquement.', passed: '✅ Réussi', insufficient: '❌ Insuffisant', thresholdPct: '(seuil 60 %)', again: '🔁 Refaire', byLesson: 'Résultat par leçon', correction: 'Correction détaillée', yourAnswer: 'Ta réponse :', none: 'aucune', goodAnswer: 'Bonne réponse :', answer: 'Réponse',
      statsTitle: '📊 Progression de', statQuizOk: 'épreuves de leçon réussies', statAvg: 'moyenne', statFinals: 'épreuves finales réussies', perLesson: 'Par leçon', notYet: 'pas encore fait', reset: '🗑 Remettre la progression à zéro', resetConfirm: 'Effacer toute la progression ?', logout: '👤 Se déconnecter', logoutConfirm: 'Se déconnecter ? Ta progression reste enregistrée dans ton compte.', home: '← Accueil',
      noVoice: 'La lecture vocale n’est pas disponible sur ce navigateur.', noNet: 'Connexion indisponible pour le moment (pas de réseau ?). Réessaie dans un instant.', fbSoon: 'La connexion Facebook n’est pas encore activée. Utilise « Continuer avec Google » pour l’instant.', loginFail: 'Connexion impossible : ', voice: 'fr-FR', apk: '📱 Télécharger l’appli Android (APK)', apkHint: 'Sur le téléphone : ouvrir le fichier téléchargé, autoriser l’installation, puis Installer.' },
    en: { appName: 'FIMO Revision<br>Goods transport', tagline: 'Lessons, timed tests and mock exams. Free, on phone and PC.', loginTitle: 'Sign in to find your progress on every device', google: 'G&nbsp; Continue with Google (Gmail)', facebook: 'f&nbsp; Continue with Facebook', loginHint: 'Your progress (lessons read, scores) is saved in your account and restored on all your devices. No data is shared.', connecting: 'Signing in…', loading: 'Loading…',
      hello: 'Hello', homeSub: 'Read a lesson, then take its timed test. When you have finished the lessons, practise with the final exams.', progress: 'Progress', lessonsRead: 'lessons read', quizOk: 'tests passed', lessons: '📘 Lessons', finals: '🎓 Final exams', finalsSub: 'They mix all the lessons. The official exam: 60 questions, pass mark 36 correct answers (60%).', q: 'q', min: 'min', questions: 'questions', threshold: 'pass mark', admitted: 'Passed', failed: 'Failed', sources: 'Sources',
      lesson: 'Lesson', lessonQuiz: 'Lesson test', chrono: 'min timed', best: 'best score', startQuiz: '▶ Start the timed test', listenLesson: '🔊 Listen to the lesson', stopListen: '⏹ Stop reading', backLessons: '← Back to lessons',
      finalTag: 'Final exam', intro1: 'multiple-choice questions, one correct answer each, drawn from all lessons', intro2: 'minutes: the timer starts when you click “Start” and the exam is marked automatically when time is up', intro3: 'Pass mark:', intro3b: '(60%, like the official exam: 36/60)', intro4: 'You can go back and change an answer before submitting', lastResult: 'Last result:', notAdmitted: 'failed', on: 'on', start: '▶ Start the exam', back: '← Back',
      answered: 'answered', question: 'Question', listen: '🔊 Listen', autoOn: '🔁 Auto-read: ON', autoOff: '🔁 Auto-read: OFF', prev: '← Previous', next: 'Next →', validate: '✔ Submit and see the result', quit: '✕ Give up', missing: 'unanswered question(s). Submit anyway?', quitConfirm: 'Give up? The score will not be saved.', timeout: '⏱ Time is up: the test was marked automatically.', passed: '✅ Passed', insufficient: '❌ Not enough', thresholdPct: '(pass mark 60%)', again: '🔁 Try again', byLesson: 'Result by lesson', correction: 'Detailed correction', yourAnswer: 'Your answer:', none: 'none', goodAnswer: 'Correct answer:', answer: 'Answer',
      statsTitle: '📊 Progress of', statQuizOk: 'lesson tests passed', statAvg: 'average', statFinals: 'final exams passed', perLesson: 'By lesson', notYet: 'not done yet', reset: '🗑 Reset progress', resetConfirm: 'Erase all progress?', logout: '👤 Sign out', logoutConfirm: 'Sign out? Your progress stays saved in your account.', home: '← Home',
      noVoice: 'Voice reading is not available in this browser.', noNet: 'Sign-in unavailable right now (no network?). Try again in a moment.', fbSoon: 'Facebook sign-in is not enabled yet. Use “Continue with Google” for now.', loginFail: 'Sign-in failed: ', voice: 'en-US', apk: '📱 Download the Android app (APK)', apkHint: 'On the phone: open the downloaded file, allow the installation, then Install.' }
  };
  let LANG = 'fr';
  try { LANG = localStorage.getItem(LANG_KEY) || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'fr'); } catch (e) {}
  const t = (k) => (T[LANG] && T[LANG][k]) || T.fr[k] || k;
  // Contenu : D() (français) ou DATA_EN (anglais) si disponible
  const D = () => (LANG === 'en' && typeof DATA_EN !== 'undefined') ? DATA_EN : DATA;
  const langBtn = $('#btn-lang');
  function paintLang() { if (langBtn) langBtn.textContent = LANG === 'fr' ? 'EN' : 'FR'; document.documentElement.lang = LANG; }
  function setLang(l) { LANG = l; try { localStorage.setItem(LANG_KEY, l); } catch (e) {} paintLang(); }
  if (langBtn) langBtn.onclick = () => { setLang(LANG === 'fr' ? 'en' : 'fr'); stopTimer(); getUser() ? home() : welcome(); };
  paintLang();

  // ---------- Utilitaires ----------
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  function fmt(sec) { const m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }
  // Générateur pseudo-aléatoire avec graine : une épreuve finale donnée est toujours composée des mêmes questions
  function rng(seed) { let x = (seed * 2654435761) % 4294967296 || 1; return () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; }; }
  function shuffle(arr, r) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function pct(s, t) { return t ? Math.round(100 * s / t) : 0; }
  function lessonTitle(id) { const l = D().lessons.find((x) => x.id === id); return l ? l.title : ''; }
  function lessonNum(id) { return D().lessons.findIndex((x) => x.id === id) + 1; }

  // Mélange les choix d'une question (la bonne réponse suit)
  function prepQ(q, r) {
    const order = shuffle(q.c.map((_, i) => i), r);
    return { q: q.q, c: order.map((i) => q.c[i]), a: order.indexOf(q.a), e: q.e || '', l: q.l, img: q.img || '', icon: q.icon || '' };
  }

  // ---------- Minuteur ----------
  let tick = null;
  function stopTimer() { clearInterval(tick); tick = null; timerEl.classList.add('hidden'); if (typeof stopSpeak === 'function') stopSpeak(); }
  function startTimer(sec, onEnd) {
    stopTimer();
    let left = sec;
    timerEl.classList.remove('hidden'); timerEl.classList.remove('low');
    timerEl.textContent = '⏱ ' + fmt(left);
    tick = setInterval(() => {
      left--;
      timerEl.textContent = '⏱ ' + fmt(left);
      if (left <= 60) timerEl.classList.add('low');
      if (left <= 0) { stopTimer(); onEnd(); }
    }, 1000);
  }


  // ---------- Voix (synthèse vocale du téléphone, gratuite, hors ligne) ----------
  const VOICE_KEY = 'fimo-voice-auto';
  const hasVoice = 'speechSynthesis' in window;
  function autoVoice() { try { return localStorage.getItem(VOICE_KEY) === '1'; } catch (e) { return false; } }
  function setAutoVoice(v) { try { localStorage.setItem(VOICE_KEY, v ? '1' : '0'); } catch (e) {} }
  function stopSpeak() { if (hasVoice) window.speechSynthesis.cancel(); }
  function speak(text) {
    if (!hasVoice) { alert(t('noVoice')); return; }
    stopSpeak();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = t('voice'); u.rate = 0.95;
    const fr = window.speechSynthesis.getVoices().find((v) => v.lang && v.lang.toLowerCase().startsWith(LANG));
    if (fr) u.voice = fr;
    window.speechSynthesis.speak(u);
  }
  function speakQuestion(q) {
    const letters = ['A', 'B', 'C', 'D'];
    speak(q.q + '. ' + q.c.map((c, k) => t('answer') + ' ' + letters[k] + ': ' + c).join('. '));
  }
  if (hasVoice) window.speechSynthesis.onvoiceschanged = () => {};

  // ---------- Écran d'accueil / connexion ----------
  function welcome() {
    stopTimer();
    app.innerHTML = `<div class="hero"><div class="hero-ico">🚛</div><h1>${t('appName')}</h1>
      <p class="sub">${t('tagline')}</p></div>
      <div class="card">
        <p class="lbl" style="text-align:center">${t('loginTitle')}</p>
        <button class="btn big" id="google">${t('google')}</button>
        <button class="btn sec big" id="facebook">${t('facebook')}</button>
        <p class="hint">${t('loginHint')}</p>
      </div>
      <div class="card center"><a class="btn sec big" href="fimo.apk" download="fimo.apk" id="apk">${t('apk')}</a><p class="hint">${t('apkHint')}</p></div>`;
    $('#google').onclick = () => signInWith('google');
    $('#facebook').onclick = () => signInWith('facebook');
  }

  // ---------- Liste des leçons + épreuves finales ----------
  function home() {
    stopTimer();
    const u = getUser();
    if (!u) return welcome();
    const lessons = D().lessons;
    const nbRead = lessons.filter((l) => P.read[l.id]).length;
    const nbQuizOk = lessons.filter((l) => P.quiz[l.id] && P.quiz[l.id].ok).length;
    let h = `<h1>${t('hello')} ${esc(u.name)} 👋</h1>
      <p class="sub">${t('homeSub')}</p>
      <div class="card"><div class="row" style="justify-content:space-between"><b>${t('progress')}</b><span>${nbRead}/${lessons.length} ${t('lessonsRead')} · ${nbQuizOk}/${lessons.length} ${t('quizOk')}</span></div>
      <div class="progress"><div style="width:${pct(nbRead + nbQuizOk, lessons.length * 2)}%"></div></div></div>
      <h2>${t('lessons')}</h2>`;
    lessons.forEach((l, i) => {
      const q = P.quiz[l.id];
      const badge = q ? `<span class="badge ${q.ok ? 'ok' : 'ko'}">${q.score}/${q.total}</span>` : `<span class="badge">${l.quiz.length} ${t('q')} · ${Math.ceil(l.quiz.length * D().secPerQ / 60)} ${t('min')}</span>`;
      h += `<div class="card lesson-item" data-lesson="${l.id}">
        <div class="num ${q && q.ok ? 'done' : (P.read[l.id] ? 'read' : '')}">${q && q.ok ? '✓' : i + 1}</div>
        <div class="info"><div class="title">${esc(l.title)}</div><div class="meta">${esc(l.summary)}</div></div>${badge}</div>`;
    });
    h += `<h2>${t('finals')}</h2>
      <p class="sub">${t('finalsSub')}</p>`;
    D().exams.forEach((ex, i) => {
      const r = P.exam[ex.id];
      const badge = r ? `<span class="badge ${r.ok ? 'ok' : 'ko'}">${r.score}/${r.total} · ${r.ok ? t('admitted') : t('failed')}</span>` : `<span class="badge">${ex.n} ${t('q')} · ${ex.min} ${t('min')}</span>`;
      h += `<div class="card lesson-item" data-exam="${ex.id}"><div class="num exam ${r && r.ok ? 'done' : ''}">${r && r.ok ? '✓' : i + 1}</div>
        <div class="info"><div class="title">${esc(ex.title)}</div><div class="meta">${ex.n} ${t('questions')} · ${ex.min} ${t('min')} · ${t('threshold')} ${Math.ceil(ex.n * 0.6)}/${ex.n}</div></div>${badge}</div>`;
    });
    h += `<div class="card"><h3 style="margin-top:0">${t('sources')}</h3>${D().sources}</div>`;
    app.innerHTML = h;
    app.querySelectorAll('[data-lesson]').forEach((el) => el.onclick = () => lesson(el.dataset.lesson));
    app.querySelectorAll('[data-exam]').forEach((el) => el.onclick = () => examIntro(el.dataset.exam));
    window.scrollTo(0, 0);
  }

  function lesson(id) {
    stopTimer();
    const l = D().lessons.find((x) => x.id === id);
    const n = lessonNum(id);
    P.read[id] = true; save(P);
    const q = P.quiz[id];
    app.innerHTML = `<span class="theme-tag">${t('lesson')} ${n} / ${D().lessons.length}</span>
      <h1>${esc(l.title)}</h1><p class="sub">${esc(l.summary)}</p>
      <div class="card lesson-body">${l.content}<div class="src">${t('sources')}: ${l.sources}</div></div>
      <div class="card center"><p><b>${t('lessonQuiz')}</b>: ${l.quiz.length} ${t('questions')} · ${Math.ceil(l.quiz.length * D().secPerQ / 60)} ${t('chrono')}${q ? ` · ${t('best')} ${q.score}/${q.total}` : ''}</p>
      <button class="btn big" id="go-quiz">${t('startQuiz')}</button>
      <button class="btn sec" id="speak-lesson">${t('listenLesson')}</button>
      <button class="btn sec" id="go-home">${t('backLessons')}</button></div>`;
    $('#go-quiz').onclick = () => runQuiz(quizCfg(id));
    $('#speak-lesson').onclick = () => { const b = $('#speak-lesson'); if (hasVoice && window.speechSynthesis.speaking) { stopSpeak(); b.textContent = t('listenLesson'); return; } speak(l.title + '. ' + app.querySelector('.lesson-body').innerText.replace(/\s+/g, ' ')); b.textContent = t('stopListen'); };
    $('#go-home').onclick = home;
    window.scrollTo(0, 0);
  }

  function quizCfg(id) {
    const l = D().lessons.find((x) => x.id === id);
    const r = Math.random;
    return { kind: 'quiz', id, title: t('lesson') + ' ' + lessonNum(id) + ' · ' + (LANG === 'en' ? 'test' : 'épreuve'), questions: shuffle(l.quiz, r).map((x) => prepQ(Object.assign({ l: l.id, icon: l.icon }, x), r)), sec: l.quiz.length * D().secPerQ, back: () => lesson(id) };
  }

  // Tirage reproductible (graine = épreuve) dans toutes les leçons, au prorata de leur nombre de questions
  function examQuestions(ex) {
    const r = rng(ex.seed);
    const pool = D().lessons.flatMap((l) => l.quiz.map((q) => Object.assign({ l: l.id, icon: l.icon }, q)));
    return shuffle(pool, r).slice(0, Math.min(ex.n, pool.length)).map((q) => prepQ(q, r));
  }
  function examCfg(id) {
    const ex = D().exams.find((x) => x.id === id);
    const qs = examQuestions(ex);
    return { kind: 'exam', id, title: ex.title, questions: qs, sec: Math.round(ex.min * 60 * qs.length / ex.n), back: () => examIntro(id), nav: true };
  }

  function examIntro(id) {
    stopTimer();
    const ex = D().exams.find((x) => x.id === id);
    const r = P.exam[id];
    const pool = D().lessons.reduce((s, l) => s + l.quiz.length, 0);
    const n = Math.min(ex.n, pool);
    app.innerHTML = `<span class="theme-tag">${t('finalTag')}</span><h1>${esc(ex.title)}</h1>
      <div class="card"><ul><li><b>${n} ${t('questions')}</b> ${t('intro1')}</li>
      <li><b>${Math.round(ex.min * n / ex.n)} ${t('intro2')}</li>
      <li>${t('intro3')} <b>${Math.ceil(n * 0.6)}/${n}</b> ${t('intro3b')}</li>
      <li>${t('intro4')}</li></ul>
      ${r ? `<div class="infobox">${t('lastResult')} ${r.score}/${r.total} (${r.ok ? t('admitted').toLowerCase() : t('notAdmitted')}) ${t('on')} ${r.date}</div>` : ''}
      <button class="btn big" id="go">${t('start')}</button><button class="btn sec" id="back">${t('back')}</button></div>`;
    $('#go').onclick = () => runQuiz(examCfg(id));
    $('#back').onclick = home;
    window.scrollTo(0, 0);
  }

  // ---------- Épreuve (moteur commun leçon / finale) ----------
  function runQuiz(cfg) {
    const Q = cfg.questions; const ans = new Array(Q.length).fill(-1); let i = 0; let finished = false;
    startTimer(cfg.sec, () => finish(true));

    function render() {
      const q = Q[i];
      const nbAns = ans.filter((a) => a >= 0).length;
      const SHAPES = ['▲', '◆', '●', '■'];
      const pic = q.img ? q.img : `<span class="emo">${q.icon || '🚛'}</span>`;
      app.innerHTML = `<div class="row" style="justify-content:space-between"><span class="theme-tag">${esc(cfg.title)}</span><span class="qnum">${nbAns}/${Q.length} ${t('answered')}</span></div>
        <div class="progress"><div style="width:${pct(i + 1, Q.length)}%"></div></div>
        <div class="kq"><div class="qnum" style="color:#fff;opacity:.9">${t('question')} ${i + 1} / ${Q.length}${cfg.kind === 'exam' ? ' · ' + t('lesson').toLowerCase() + ' ' + lessonNum(q.l) : ''}</div>
        <div class="pic">${pic}</div>
        <div class="question">${esc(q.q)}</div>
        <div class="row" style="justify-content:center;margin-top:8px"><button class="vbtn" id="speak">${t('listen')}</button><button class="vbtn ${autoVoice() ? 'on' : ''}" id="autov">${autoVoice() ? t('autoOn') : t('autoOff')}</button></div>
        <div class="kchoices">${q.c.map((c, k) => `<button class="choice ${ans[i] === k ? 'sel' : (ans[i] >= 0 ? 'dim' : '')}" data-k="${k}"><span class="shape">${SHAPES[k] || '•'}</span><span>${esc(c)}</span></button>`).join('')}</div></div>
        <div class="row">
          ${cfg.nav ? `<button class="btn sec" id="prev" ${i === 0 ? 'disabled' : ''}>${t('prev')}</button>` : ''}
          ${i < Q.length - 1 ? `<button class="btn" id="next" ${ans[i] < 0 ? 'disabled' : ''}>${t('next')}</button>` : `<button class="btn" id="end">${t('validate')}</button>`}
          <button class="btn sec" id="quit">${t('quit')}</button></div>`;
      app.querySelectorAll('.choice').forEach((b) => b.onclick = () => { ans[i] = +b.dataset.k; render(); });
      $('#speak').onclick = () => speakQuestion(q);
      $('#autov').onclick = () => { setAutoVoice(!autoVoice()); render(); };
      if (autoVoice() && ans[i] < 0) speakQuestion(q);
      const nx = $('#next'); if (nx) nx.onclick = () => { i++; render(); };
      const pv = $('#prev'); if (pv) pv.onclick = () => { i--; render(); };
      const en = $('#end'); if (en) en.onclick = () => { const miss = ans.filter((a) => a < 0).length; if (miss && !confirm(miss + ' ' + t('missing'))) return; finish(false); };
      $('#quit').onclick = () => { if (confirm(t('quitConfirm'))) { stopTimer(); cfg.back(); } };
      window.scrollTo(0, 0);
    }

    function finish(timeout) {
      if (finished) return; finished = true; stopTimer();
      const score = Q.reduce((s, q, k) => s + (ans[k] === q.a ? 1 : 0), 0);
      const ok = score >= Math.ceil(Q.length * 0.6);
      const prev = cfg.kind === 'quiz' ? P.quiz[cfg.id] : P.exam[cfg.id];
      const rec = { score, total: Q.length, ok, date: new Date().toLocaleDateString('fr-FR') };
      if (cfg.kind === 'quiz') { if (!prev || score >= prev.score) P.quiz[cfg.id] = rec; }
      else P.exam[cfg.id] = rec;
      save(P);
      let bilan = '';
      if (cfg.kind === 'exam') {
        const bl = {};
        Q.forEach((q, k) => { bl[q.l] = bl[q.l] || { s: 0, t: 0 }; bl[q.l].t++; if (ans[k] === q.a) bl[q.l].s++; });
        bilan = `<h3>${t('byLesson')}</h3><div class="stat-grid">${D().lessons.filter((l) => bl[l.id]).map((l) => `<div class="stat"><b>${pct(bl[l.id].s, bl[l.id].t)}%</b>${t('lesson')} ${lessonNum(l.id)}<br><small>${bl[l.id].s}/${bl[l.id].t}</small></div>`).join('')}</div>`;
      }
      const timeoutMsg = timeout ? '<div class="warnbox">' + t('timeout') + '</div>' : '';
      app.innerHTML = `<h1 class="center">${esc(cfg.title)}</h1>${timeoutMsg}
        <div class="card center"><div class="score ${ok ? 'ok' : 'ko'}">${score} / ${Q.length}</div>
        <p><b>${ok ? t('passed') : t('insufficient')}</b> · ${pct(score, Q.length)} % ${t('thresholdPct')}</p>
        <button class="btn" id="again">${t('again')}</button><button class="btn sec" id="back">${t('back')}</button></div>
        ${bilan}
        <h2>${t('correction')}</h2>
        ${Q.map((q, k) => `<div class="card corr ${ans[k] === q.a ? 'good' : 'bad'}"><div class="qnum">${t('question')} ${k + 1}${cfg.kind === 'exam' ? ' · ' + t('lesson').toLowerCase() + ' ' + lessonNum(q.l) : ''}</div><div class="q">${esc(q.q)}</div>
          <div>${ans[k] === q.a ? '✅' : '❌'} ${t('yourAnswer')} <b>${ans[k] >= 0 ? esc(q.c[ans[k]]) : '<i>' + t('none') + '</i>'}</b></div>
          ${ans[k] !== q.a ? `<div>✔ ${t('goodAnswer')} <b>${esc(q.c[q.a])}</b></div>` : ''}
          ${q.e ? `<div class="exp">💡 ${esc(q.e)}</div>` : ''}</div>`).join('')}
        <div class="center"><button class="btn" id="again2">${t('again')}</button><button class="btn sec" id="back2">${t('back')}</button></div>`;
      const again = () => runQuiz(cfg.kind === 'quiz' ? quizCfg(cfg.id) : examCfg(cfg.id));
      $('#again').onclick = again; $('#again2').onclick = again;
      $('#back').onclick = home; $('#back2').onclick = home;
      window.scrollTo(0, 0);
    }
    render();
  }

  // ---------- Progression ----------
  function stats() {
    stopTimer();
    const u = getUser() || { name: 'Invité' };
    const L = D().lessons;
    const quizDone = L.filter((l) => P.quiz[l.id]);
    const avg = quizDone.length ? Math.round(quizDone.reduce((s, l) => s + pct(P.quiz[l.id].score, P.quiz[l.id].total), 0) / quizDone.length) : 0;
    const exDone = D().exams.filter((e) => P.exam[e.id]);
    app.innerHTML = `<h1>${t('statsTitle')} ${esc(u.name)}</h1>
      <div class="stat-grid"><div class="stat"><b>${L.filter((l) => P.read[l.id]).length}/${L.length}</b>${t('lessonsRead')}</div>
      <div class="stat"><b>${quizDone.filter((l) => P.quiz[l.id].ok).length}/${L.length}</b>${t('statQuizOk')}</div>
      <div class="stat"><b>${avg}%</b>${t('statAvg')}</div>
      <div class="stat"><b>${exDone.filter((e) => P.exam[e.id].ok).length}/${D().exams.length}</b>${t('statFinals')}</div></div>
      <h2>${t('perLesson')}</h2>${L.map((l, i) => { const q = P.quiz[l.id]; return `<div class="card lesson-item" data-lesson="${l.id}"><div class="info"><div class="title">${i + 1}. ${esc(l.title)}</div></div>${q ? `<span class="badge ${q.ok ? 'ok' : 'ko'}">${q.score}/${q.total} · ${q.date}</span>` : '<span class="badge">' + t('notYet') + '</span>'}</div>`; }).join('')}
      <h2>${t('finals')}</h2>${D().exams.map((e) => { const r = P.exam[e.id]; return `<div class="card lesson-item" data-exam="${e.id}"><div class="info"><div class="title">${esc(e.title)}</div></div>${r ? `<span class="badge ${r.ok ? 'ok' : 'ko'}">${r.score}/${r.total} · ${r.date}</span>` : '<span class="badge">' + t('notYet') + '</span>'}</div>`; }).join('')}
      <div class="card center"><a class="btn sec" href="fimo.apk" download="fimo.apk">${t('apk')}</a><button class="btn sec" id="reset">${t('reset')}</button><button class="btn sec" id="logout">${t('logout')}</button><button class="btn" id="home">${t('home')}</button></div>`;
    app.querySelectorAll('[data-lesson]').forEach((el) => el.onclick = () => lesson(el.dataset.lesson));
    app.querySelectorAll('[data-exam]').forEach((el) => el.onclick = () => examIntro(el.dataset.exam));
    $('#reset').onclick = () => { if (confirm(t('resetConfirm'))) { P = { read: {}, quiz: {}, exam: {} }; save(P); stats(); } };
    $('#logout').onclick = () => { if (confirm(t('logoutConfirm'))) signOut(); };
    $('#home').onclick = home;
  }

  $('#btn-home').onclick = home;
  $('#btn-stats').onclick = stats;
  if (FB.ok) {
    app.innerHTML = '<div class="center" style="padding:60px 0;color:var(--muted)">' + t('loading') + '</div>';
    FB.auth.getRedirectResult().catch(() => {});
    FB.auth.onAuthStateChanged(async (u) => {
      FB.user = u;
      if (u) {
        setUser({ name: (u.displayName || u.email || 'Utilisateur').split(' ')[0], mode: 'firebase', uid: u.uid });
        await cloudLoad();
        home();
      } else { setUser(null); welcome(); }
    });
  } else {
    // Firebase indisponible (fichier manquant ou hors ligne avant toute connexion) : on affiche l'accueil
    setUser(null); welcome();
  }

  // ---------- PWA : service worker pour le hors-ligne ----------
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
