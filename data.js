/* Contenu de révision FIMO marchandises.
   RÈGLE : les leçons et les questions viennent UNIQUEMENT des photos de cours et d'exercices partagées
   (ECF « Conducteur routier sur porteur », fiches RSE, évaluations, QCM 561/2006, Kahoot — transcriptions dans sources/transcriptions/).
   Internet (Légifrance, EUR-Lex, ministère) n'a servi qu'à VÉRIFIER ou CLARIFIER ce qui est dans les photos.
   Les questions sont des questions d'entraînement, pas les questions officielles de l'examen.

   POUR AJOUTER UNE LEÇON (photos des semaines suivantes) : copier un bloc { id, title, summary, sources, content, quiz } dans
   le tableau `lessons`, avec un nouvel id (l8, l9...). Les épreuves finales mélangent automatiquement toutes les leçons. */
/* Images (SVG) utilisées dans les épreuves : panneaux et symboles du chronotachygraphe */
const IMG = {
  _rond: (inner) => `<svg viewBox="0 0 120 120" width="150" height="150"><circle cx="60" cy="60" r="56" fill="#fff" stroke="#d9001b" stroke-width="10"/>${inner}</svg>`,
  truck: `<svg viewBox="0 0 120 50" width="240" height="100"><rect x="2" y="8" width="70" height="30" rx="4" fill="#1368ce"/><rect x="74" y="16" width="36" height="22" rx="4" fill="#ffd54f"/><rect x="80" y="20" width="18" height="10" fill="#1b2430" opacity=".7"/><circle cx="20" cy="41" r="7" fill="#1b2430"/><circle cx="58" cy="41" r="7" fill="#1b2430"/><circle cx="96" cy="41" r="7" fill="#1b2430"/></svg>`,
  semi: `<svg viewBox="0 0 160 50" width="300" height="94"><rect x="2" y="6" width="110" height="32" rx="3" fill="#e9edf3" stroke="#1b2430" stroke-width="2"/><rect x="116" y="14" width="40" height="24" rx="4" fill="#e21b3c"/><rect x="124" y="18" width="18" height="10" fill="#1b2430" opacity=".7"/><circle cx="30" cy="41" r="7" fill="#1b2430"/><circle cx="48" cy="41" r="7" fill="#1b2430"/><circle cx="122" cy="41" r="7" fill="#1b2430"/><circle cx="146" cy="41" r="7" fill="#1b2430"/></svg>`,
  volant: `<svg viewBox="0 0 100 100" width="130" height="130"><circle cx="50" cy="50" r="40" fill="none" stroke="#e68a00" stroke-width="10"/><circle cx="50" cy="50" r="10" fill="#e68a00"/><line x1="50" y1="20" x2="50" y2="42" stroke="#e68a00" stroke-width="8"/><line x1="22" y1="66" x2="42" y2="55" stroke="#e68a00" stroke-width="8"/><line x1="78" y1="66" x2="58" y2="55" stroke="#e68a00" stroke-width="8"/></svg>`,
  symboles: `<svg viewBox="0 0 400 110" width="340" height="94"><g fill="#e68a00"><circle cx="50" cy="45" r="30" fill="none" stroke="#e68a00" stroke-width="8"/><circle cx="50" cy="45" r="7"/><text x="50" y="100" font-size="14" text-anchor="middle" fill="#1b2430">Conduite</text><g stroke="#e68a00" stroke-width="7" stroke-linecap="round"><line x1="125" y1="70" x2="175" y2="20"/><line x1="175" y1="70" x2="125" y2="20"/></g><text x="150" y="100" font-size="14" text-anchor="middle" fill="#1b2430">Travail</text><rect x="222" y="17" width="56" height="56" fill="none" stroke="#e68a00" stroke-width="7"/><line x1="222" y1="73" x2="278" y2="17" stroke="#e68a00" stroke-width="7"/><text x="250" y="100" font-size="14" text-anchor="middle" fill="#1b2430">Disponibilité</text><rect x="320" y="45" width="60" height="22" rx="3"/><rect x="320" y="33" width="16" height="14" rx="3"/><text x="350" y="100" font-size="14" text-anchor="middle" fill="#1b2430">Repos</text></g></svg>`,
  chrono: `<svg viewBox="0 0 120 120" width="130" height="130"><circle cx="60" cy="60" r="50" fill="#fff" stroke="#1b2430" stroke-width="6"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1368ce" stroke-width="3" stroke-dasharray="4 4"/><line x1="60" y1="60" x2="60" y2="30" stroke="#1b2430" stroke-width="5"/><line x1="60" y1="60" x2="80" y2="60" stroke="#1b2430" stroke-width="5"/><circle cx="60" cy="60" r="5" fill="#e21b3c"/></svg>`,
  carte: `<svg viewBox="0 0 160 100" width="220" height="138"><rect x="4" y="4" width="152" height="92" rx="10" fill="#fff" stroke="#1368ce" stroke-width="4"/><rect x="16" y="22" width="34" height="26" rx="4" fill="#ffd54f"/><rect x="60" y="24" width="80" height="8" rx="2" fill="#1b2430" opacity=".6"/><rect x="60" y="40" width="60" height="8" rx="2" fill="#1b2430" opacity=".4"/><text x="16" y="80" font-size="13" fill="#1368ce" font-weight="700">CARTE CONDUCTEUR</text></svg>`,
  ticket: `<svg viewBox="0 0 120 150" width="110" height="138"><path d="M10 5h100v135l-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8z" fill="#fff" stroke="#1b2430" stroke-width="3"/><g fill="#1b2430" opacity=".6"><rect x="22" y="20" width="76" height="6"/><rect x="22" y="34" width="56" height="5"/><rect x="22" y="46" width="66" height="5"/><rect x="22" y="58" width="50" height="5"/><rect x="22" y="70" width="70" height="5"/><rect x="22" y="82" width="46" height="5"/><rect x="22" y="94" width="64" height="5"/><rect x="22" y="106" width="40" height="5"/></g></svg>`
};
IMG.h35 = IMG._rond(`<text x="60" y="68" font-size="26" font-weight="700" text-anchor="middle" fill="#1b2430">3,5m</text><path d="M60 14l-6 10h12z M60 106l-6-10h12z" fill="#1b2430"/>`);
IMG.l10 = IMG._rond(`<rect x="22" y="44" width="40" height="22" rx="3" fill="#1b2430"/><rect x="64" y="50" width="20" height="16" rx="3" fill="#1b2430"/><circle cx="32" cy="70" r="5" fill="#1b2430"/><circle cx="52" cy="70" r="5" fill="#1b2430"/><circle cx="76" cy="70" r="5" fill="#1b2430"/><text x="60" y="96" font-size="18" font-weight="700" text-anchor="middle" fill="#1b2430">10 m</text><path d="M12 36h96" stroke="#1b2430" stroke-width="3"/><path d="M12 36l8-5v10z M108 36l-8-5v10z" fill="#1b2430"/>`);
IMG.nodep = IMG._rond(`<rect x="22" y="48" width="34" height="22" rx="3" fill="#d9001b"/><rect x="58" y="54" width="14" height="16" rx="3" fill="#d9001b"/><circle cx="32" cy="74" r="5" fill="#d9001b"/><circle cx="62" cy="74" r="5" fill="#d9001b"/><rect x="78" y="56" width="26" height="14" rx="4" fill="#1b2430"/><circle cx="84" cy="74" r="4" fill="#1b2430"/><circle cx="98" cy="74" r="4" fill="#1b2430"/>`);
IMG.finvoie = `<svg viewBox="0 0 120 120" width="150" height="150"><rect x="4" y="4" width="112" height="112" rx="6" fill="#1b2430"/><g fill="#fff"><rect x="12" y="12" width="12" height="12"/><rect x="36" y="12" width="12" height="12"/><rect x="60" y="12" width="12" height="12"/><rect x="84" y="12" width="12" height="12"/><rect x="24" y="24" width="12" height="12"/><rect x="48" y="24" width="12" height="12"/><rect x="72" y="24" width="12" height="12"/><rect x="96" y="24" width="12" height="12"/></g><path d="M60 100V55 M60 55l-22 30 M60 55l22 30" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round"/></svg>`;
IMG.dir = `<svg viewBox="0 0 200 90" width="260" height="117"><rect x="2" y="2" width="196" height="86" rx="6" fill="#fff" stroke="#1b2430" stroke-width="4"/><rect x="14" y="14" width="60" height="26" rx="3" fill="#d9001b"/><text x="44" y="33" font-size="16" font-weight="700" text-anchor="middle" fill="#fff">N 137</text><text x="100" y="72" font-size="22" font-weight="700" text-anchor="middle" fill="#1b2430">PONS</text><circle cx="170" cy="27" r="18" fill="#fff" stroke="#1b2430" stroke-width="3"/><rect x="158" y="22" width="16" height="10" fill="#1b2430"/><rect x="174" y="25" width="7" height="7" fill="#1b2430"/><path d="M110 20h36" stroke="#1b2430" stroke-width="4"/><path d="M146 20l-8-6v12z" fill="#1b2430"/></svg>`;
IMG.vit90 = `<svg viewBox="0 0 120 120" width="130" height="130"><circle cx="60" cy="60" r="56" fill="#fff" stroke="#d9001b" stroke-width="10"/><text x="60" y="74" font-size="40" font-weight="700" text-anchor="middle" fill="#1b2430">90</text></svg>`;

const DATA = {
  secPerQ: 45, // secondes par question pour l'épreuve de chaque leçon

  lessons: [
    {
      id: 'l1', icon: '⏱️', title: 'RSE : temps de conduite et pauses',
      summary: 'Objectifs de la RSE, à qui elle s’applique, conduite continue, journalière, hebdomadaire, sur deux semaines, interruptions.',
      sources: 'photos : fiche « Respect de la réglementation », fiche « La RSE (561/2006) », évaluation RSE, exercice d’application n° 4, QCM 561/2006, Kahoot. Vérifié avec le règlement (CE) 561/2006.',
      content: `
<h3>Les 3 objectifs de la RSE (réglementation sociale européenne)</h3>
<ul><li>Améliorer la <b>sécurité routière</b> ;</li><li>améliorer les <b>conditions de travail</b> ;</li><li>harmoniser les règles de <b>concurrence</b> entre les pays européens.</li></ul>
<p>Texte : règlement (CE) n° <b>561/2006</b>, en vigueur depuis <b>2007</b>.</p>
<h3>À qui s’applique-t-elle ?</h3>
<ul><li>Transport de marchandises par véhicules de plus de <b>3,5 t</b>, transport <b>public et privé</b>, conducteurs <b>salariés et non salariés</b>, quel que soit le pays d’immatriculation, dans toute l’Union européenne.</li>
<li>Exemptés : véhicules de l’armée, de la police, des pompiers, dépanneuses dans un rayon de <b>100 km</b> de leur point d’attache, véhicules roulant à moins de 40 km/h, véhicules-écoles.</li></ul>
<h3>Les durées de conduite</h3>
<table><tr><th>Règle</th><th>Durée</th></tr>
<tr><td>Conduite continue maximale</td><td><b>4 h 30</b></td></tr>
<tr><td>Interruption après 4 h 30</td><td><b>45 min</b> en un bloc, ou fractionnée : <b>15 min puis 30 min</b> (dans cet ordre)</td></tr>
<tr><td>Arrêt pris en compte comme interruption</td><td>À partir de <b>15 min</b> (un arrêt plus court ne compte pas)</td></tr>
<tr><td>Conduite journalière normale</td><td><b>9 h</b></td></tr>
<tr><td>Conduite journalière prolongée</td><td><b>10 h</b>, au maximum <b>2 fois par semaine</b></td></tr>
<tr><td>Conduite hebdomadaire</td><td><b>56 h</b></td></tr>
<tr><td>Conduite sur deux semaines consécutives</td><td><b>90 h</b></td></tr></table>
<ul><li>Les <b>temps d’attente</b> ne sont pas des interruptions de conduite.</li>
<li>Pendant l’interruption, <b>aucun travail</b> : pas de rangement du chargement.</li>
<li>La <b>semaine RSE</b> commence le <b>lundi à 0 h 00</b> et se termine le <b>dimanche à 24 h 00</b>.</li>
<li>Règle des 90 h : après 45 h de conduite une semaine, il reste 45 h pour la suivante ; après 56 h, il reste 34 h.</li>
<li>Exemple d’infraction : 2 h de travail, 4 h 30 de conduite, 1 h de repos, puis 2 h 30 de conduite = conforme ; mais 4 h de conduite + 1 h de travail + 2 h de conduite sans pause = 6 h de conduite continue, infraction.</li></ul>
<h3>Dérogations (art. 12, depuis le 20 août 2020)</h3>
<ul><li>Pour rejoindre son domicile ou le centre de l’entreprise afin d’y prendre un repos hebdomadaire : dépassement de <b>1 h</b> de la conduite journalière et hebdomadaire ; ou de <b>2 h</b> pour un repos hebdomadaire <b>normal</b>, après une pause ininterrompue de <b>30 min</b>.</li>
<li>Rémunération en fonction de la distance ou du volume transporté : <b>interdite</b> si elle compromet la sécurité.</li></ul>
<div class="key">Mémo : 4 h 30 → 45 min (15 + 30) · 9 h (10 h × 2/sem.) · 56 h/sem. · 90 h/2 sem. · semaine = lundi 0 h → dimanche 24 h.</div>`,
      quiz: [
        { q: 'Quelle est la durée maximale de conduite continue ?', c: ['4 h 30', '4 h', '9 h', '5 h'], a: 0, e: 'Après 4 h 30, interruption obligatoire de 45 min.' },
        { q: 'Après 4 h 30 de conduite continue, l’interruption minimale est de :', c: ['45 min en une fois, ou 15 min puis 30 min', '30 min', '45 min en deux parties : 30 min puis 15 min', '1 heure'], a: 0, e: 'Le fractionnement doit être 15 min PUIS 30 min.' },
        { q: 'Quel fractionnement de la pause est conforme à la RSE ?', c: ['15 min + 30 min', '30 min + 15 min', '20 min + 25 min', '10 min + 35 min'], a: 0, e: 'Première partie d’au moins 15 min, seconde d’au moins 30 min.' },
        { q: 'En règle générale, la durée maximale de conduite journalière est de :', c: ['9 h', '10 h', '8 h', '11 h'], a: 0, e: '9 h, extensible à 10 h deux fois par semaine.' },
        { q: 'Par dérogation, le temps de conduite journalier maximum est de :', c: ['10 h', '11 h', '12 h', '9 h'], a: 0, e: '10 h, deux fois par semaine au maximum.' },
        { q: 'Combien de jours par semaine peut-on conduire 10 heures ?', c: ['2', '1', '3', '4'], a: 0, e: 'Deux fois par semaine.' },
        { q: 'La conduite maximale autorisée sur une semaine est de :', c: ['56 h', '45 h', '50 h', '60 h'], a: 0, e: '56 heures.' },
        { q: 'La durée maximale de conduite sur deux semaines consécutives est de :', c: ['90 h', '112 h', '45 h', '36 h'], a: 0, e: '90 heures.' },
        { q: 'Un conducteur a conduit 45 h une semaine. La semaine suivante, il peut conduire au maximum :', c: ['45 h', '56 h', '35 h', '90 h'], a: 0, e: '90 − 45 = 45 h.' },
        { q: 'Quand commence la semaine de travail réglementaire ?', c: ['Lundi 0 h 00', 'Dimanche 24 h', 'Dimanche 22 h', 'Lundi 6 h'], a: 0, e: 'Lundi 0 h 00.' },
        { q: 'Quand se termine la semaine de travail réglementaire ?', c: ['Dimanche 24 h 00', 'Lundi 0 h 00', 'Samedi 24 h 00', 'Vendredi 20 h'], a: 0, e: 'Dimanche 24 h 00.' },
        { q: 'Quelle est la durée minimale d’un arrêt pour qu’il compte comme interruption de conduite ?', c: ['15 minutes', '30 minutes', '45 minutes', '4 h 30'], a: 0, e: 'Dès 15 min (l’élève avait coché 4 h 30 sur l’évaluation : faux).' },
        { q: 'Les temps d’attente sont-ils considérés comme interruption de conduite ?', c: ['Non', 'Oui', 'Oui si plus de 15 min', 'Oui si le véhicule est à l’arrêt'], a: 0, e: 'L’attente est de la disponibilité ou du travail.' },
        { q: 'Pendant l’interruption de conduite, pouvez-vous ranger le chargement ?', c: ['Non', 'Oui si moins de 15 min', 'Oui si le véhicule est à l’arrêt', 'Oui en double équipage'], a: 0, e: 'Aucun travail pendant la pause.' },
        { q: 'Le règlement 561/2006 s’applique aux véhicules de transport de marchandises de plus de :', c: ['3,5 t', '7,5 t', '12 t', '19 t'], a: 0, e: 'Plus de 3,5 tonnes.' },
        { q: 'Les personnes concernées par la RSE sont :', c: ['Le transport public et le transport privé', 'Le transport public uniquement', 'Le transport privé uniquement', 'Les salariés uniquement'], a: 0, e: 'Public et privé, salariés et non salariés.' },
        { q: 'Quel véhicule n’est PAS soumis à la RSE ?', c: ['Une dépanneuse opérant dans un rayon de 100 km de son point d’attache', 'Un porteur de 19 t', 'Un véhicule de 26 t', 'Un véhicule de 7,5 t en compte propre'], a: 0, e: 'Dépanneuses dans un rayon de 100 km, armée, pompiers, police.' },
        { q: 'Quel est l’objectif de la réglementation sociale européenne ?', c: ['Améliorer les conditions de travail et la sécurité routière, éviter la concurrence déloyale', 'S’appliquer uniquement en France', 'Augmenter les temps de conduite', 'Remplacer le code de la route'], a: 0, e: 'Les trois objectifs de la RSE.' },
        { q: 'La RSE :', c: ['Renforce la sécurité routière', 'Ne sert à rien', 'Ne concerne que l’international', 'Remplace le code du travail'], a: 0, e: 'Question Kahoot.' },
        { q: 'Un conducteur conduit 9 h 30 dans la journée. Pour être en règle il doit avoir pris au minimum :', c: ['Deux interruptions réglementaires (45 min, ou 15 + 30 min chacune)', 'Une seule pause de 45 min', 'Une pause de 30 min', 'Aucune pause en double équipage'], a: 0, e: '9 h 30 dépasse deux fois 4 h 30.' },
        { q: 'Pour rejoindre son domicile et y prendre un repos hebdomadaire normal, un conducteur peut dépasser la conduite journalière de :', c: ['2 h, après une pause ininterrompue de 30 min', '1 h sans condition', '3 h', 'Aucun dépassement possible'], a: 0, e: 'Dérogation de l’article 12 (1 h, ou 2 h avec pause de 30 min pour un repos normal).' },
        { q: 'Le règlement 561/2006 est en vigueur depuis :', c: ['2007', '2004', '2005', '2010'], a: 0, e: 'Adopté en 2006, applicable en avril 2007.' },
        { q: 'Rémunérer un conducteur en fonction de la distance parcourue ou du volume transporté :', c: ['Est interdit si cela compromet la sécurité routière', 'Est toujours autorisé', 'Est obligatoire', 'Est autorisé uniquement en international'], a: 0, e: 'Article 10 du règlement 561/2006.' },
        { q: 'Quel enchaînement est en infraction ?', c: ['2 h travail, 4 h conduite, 1 h travail, 2 h conduite, 1 h repos', '2 h travail, 4 h 30 conduite, 1 h repos, 2 h 30 conduite', '4 h 30 conduite, 45 min repos, 4 h 30 conduite', '2 h conduite, 45 min repos, 4 h conduite'], a: 0, e: 'Le travail n’interrompt pas la conduite : 4 h + 2 h = 6 h de conduite continue.' }
      ]
    },
    {
      id: 'l2', icon: '🛏️', title: 'RSE : repos journalier, hebdomadaire, double équipage, ferry',
      summary: 'Repos normal, réduit, fractionné ; repos hebdomadaire et compensation ; double équipage ; ferry et train ; amplitude.',
      sources: 'photos : fiche « La RSE », fiche « Respect de la réglementation », évaluation RSE, QCM 561/2006, évaluation de synthèse C2a, Kahoot. Vérifié avec le règlement 561/2006.',
      content: `
<h3>Repos journalier (dans les 24 h qui suivent la fin du repos précédent)</h3>
<table><tr><th>Type</th><th>Durée</th><th>Condition</th></tr>
<tr><td>Normal</td><td><b>11 h</b> consécutives</td><td>Règle générale</td></tr>
<tr><td>Réduit</td><td><b>9 h</b> minimum (moins de 11 h)</td><td>Au maximum <b>3 fois</b> entre deux repos hebdomadaires</td></tr>
<tr><td>Fractionné</td><td><b>3 h + 9 h</b> = 12 h</td><td>Première période d’au moins 3 h, seconde d’au moins 9 h ; pas tous les jours</td></tr>
<tr><td>Double équipage</td><td><b>9 h</b> dans les <b>30 h</b></td><td>Véhicule à l’arrêt ; la couchette en roulant n’est pas du repos</td></tr></table>
<p><b>Amplitude</b> de la journée (prise de service → fin de service) : au plus <b>13 h</b> avec un repos normal de 11 h, <b>15 h</b> avec un repos réduit de 9 h (24 h − repos).</p>
<h3>Repos hebdomadaire</h3>
<ul><li>Commence au plus tard à la fin de <b>6 périodes de 24 h</b> après le repos hebdomadaire précédent : une semaine = <b>6 périodes journalières</b> maximum.</li>
<li><b>Normal : 45 h</b>. <b>Réduit : 24 h</b> minimum.</li>
<li>Sur deux semaines consécutives : deux repos normaux, ou un normal et un réduit. Deux repos réduits consécutifs : <b>interdit</b> en règle générale (dérogation en transport international hors du pays d’établissement, avec 4 repos hebdomadaires sur 4 semaines dont 2 normaux).</li>
<li>La réduction (ex. 45 − 24 = 21 h) est <b>récupérée en bloc avant la fin de la 3e semaine</b> suivante, accolée à un repos d’au moins <b>9 h</b>.</li></ul>
<h3>Ferry / train</h3>
<p>Un repos journalier normal ou hebdomadaire réduit à bord d’un ferry ou d’un train peut être interrompu <b>2 fois au maximum</b>, pour un total d’<b>1 h</b>, si le conducteur dispose d’une <b>couchette</b>. Sans couchette : disponibilité.</p>
<h3>Double équipage</h3>
<ul><li>Chaque conducteur : 2 × 4 h 30 de conduite sur une période de <b>30 h</b> ; le véhicule doit être immobilisé <b>9 h</b> minimum.</li>
<li>Le passager est en <b>disponibilité</b>. Depuis le 20 août 2020, la pause de 45 min peut être prise dans le véhicule conduit par le collègue, à condition de ne pas l’assister.</li></ul>
<div class="key">Mémo : 11 h (réduit 9 h × 3) · fractionné 3 + 9 · 45 h (réduit 24 h, récupérer avant la fin de la 3e semaine) · RH après 6 × 24 h · double équipage 9 h dans 30 h.</div>`,
      quiz: [
        { q: 'En règle générale, la durée du repos journalier est de :', c: ['11 h', '9 h', '8 h', '10 h'], a: 0, e: '11 h consécutives (l’élève avait répondu 9 h sur l’évaluation C2a : faux).' },
        { q: 'Quelle est la durée minimale d’un repos journalier réduit ?', c: ['9 h', '8 h', '10 h', '11 h'], a: 0, e: 'Au moins 9 h, mais moins de 11 h.' },
        { q: 'Combien de repos journaliers réduits au maximum entre deux repos hebdomadaires ?', c: ['3', '1', '2', '4'], a: 0, e: 'Trois.' },
        { q: 'Le repos journalier normal fractionné se compose de :', c: ['3 h au moins puis 9 h au moins', '9 h puis 3 h', '2 h puis 9 h', '4 h puis 8 h'], a: 0, e: 'Total 12 h, première période d’au moins 3 h.' },
        { q: 'Le repos journalier fractionné peut-il être pris tous les jours ?', c: ['Non', 'Oui', 'Oui en double équipage', 'Oui en international'], a: 0, e: 'Question du QCM 561/2006.' },
        { q: 'En double équipage, le repos journalier est de :', c: ['9 h minimum dans les 30 h', '11 h minimum dans les 24 h', '9 h dans les 24 h', '11 h dans les 30 h'], a: 0, e: '9 h dans une période de 30 h, véhicule à l’arrêt.' },
        { q: 'En double équipage, le temps passé en couchette pendant que le véhicule roule compte comme repos ?', c: ['Non', 'Oui', 'Oui si plus de 3 h', 'Oui la nuit'], a: 0, e: 'Le repos exige le véhicule à l’arrêt.' },
        { q: 'Pouvez-vous prendre votre repos en couchette lorsque le véhicule est à l’arrêt ?', c: ['Oui', 'Non', 'Seulement en double équipage', 'Seulement sur une aire payante'], a: 0, e: 'Repos journalier en cabine à l’arrêt : oui (pas le repos hebdomadaire normal).' },
        { q: 'Un repos hebdomadaire doit commencer au plus tard après :', c: ['6 périodes de 24 h', '5 périodes de 24 h', '7 périodes de 24 h', '4 périodes de 24 h'], a: 0, e: 'Six périodes de 24 h.' },
        { q: 'Une semaine de conducteur routier est faite de :', c: ['6 périodes journalières maximum', '5 périodes journalières maximum', '7 périodes journalières maximum', '4 périodes journalières maximum'], a: 0, e: 'Question Kahoot.' },
        { q: 'Quelle est la durée normale d’un repos hebdomadaire ?', c: ['45 h', '24 h', '36 h', '90 h'], a: 0, e: '45 heures.' },
        { q: 'Quelle est la durée minimale d’un repos hebdomadaire réduit ?', c: ['24 h', '35 h', '45 h', '12 h'], a: 0, e: '24 heures.' },
        { q: 'Un repos hebdomadaire réduit doit être récupéré :', c: ['En bloc avant la fin de la 3e semaine suivante, accolé à un repos d’au moins 9 h', 'La semaine suivante uniquement', 'Dans les 2 semaines, par tranches', 'Jamais'], a: 0, e: 'Compensation en une seule fois avant la fin de la troisième semaine.' },
        { q: 'En règle générale, peut-on faire deux repos hebdomadaires réduits consécutifs ?', c: ['Non', 'Oui', 'Oui si compensés la semaine suivante', 'Oui en double équipage'], a: 0, e: 'Dérogation seulement en international hors pays d’établissement (4 repos sur 4 semaines dont 2 normaux).' },
        { q: 'Pour un conducteur routier, une période journalière :', c: ['Est une période de 24 h entre deux repos', 'Commence à 0 h 00 et finit à 24 h 00', 'Commence au lever du soleil', 'Dure 9 h'], a: 0, e: 'Question Kahoot.' },
        { q: 'Combien d’heures d’amplitude maximum sur 24 h avec un repos journalier réduit de 9 h ?', c: ['15 h', '13 h 30', '14 h', '17 h'], a: 0, e: '24 h − 9 h = 15 h (13 h avec un repos normal de 11 h).' },
        { q: 'À bord d’un ferry, le repos journalier normal peut être interrompu :', c: ['2 fois maximum, 1 h au total, avec une couchette', 'Autant de fois que nécessaire', 'Jamais', '1 fois maximum, 2 h'], a: 0, e: 'Règle 2 interruptions / 1 h / couchette.' },
        { img: IMG.symboles, q: 'Sur un ferry pendant 4 h sans couchette, le conducteur sélectionne :', c: ['Disponibilité', 'Repos', 'Autre travail', 'Conduite'], a: 0, e: 'Sans couchette, pas de repos possible.' },
        { q: 'Un conducteur qui accompagne son véhicule sur un ferry doit, pour son repos journalier normal, disposer :', c: ['D’une couchette ou cabine', 'D’un siège', 'De rien de particulier', 'D’un repas'], a: 0, e: 'Question du QCM 561/2006.' },
        { q: 'Fin de service à 19 h 30. Le lendemain, avec un repos réduit, la prise de service la plus tôt est à :', c: ['4 h 30', '6 h 30', '2 h 30', '7 h 30'], a: 0, e: '19 h 30 + 9 h = 4 h 30 (6 h 30 avec un repos normal).' },
        { q: 'Fin de service à 21 h, reprise à 6 h. Le repos journalier est :', c: ['Suffisant : 9 h = repos réduit', 'Insuffisant', 'Suffisant : 11 h', 'Valable uniquement en double équipage'], a: 0, e: '21 h → 6 h = 9 h.' },
        { q: 'En double équipage, chaque conducteur peut conduire sur une période de 30 h :', c: ['2 × 4 h 30', '3 × 4 h 30', '1 × 9 h sans pause', '10 h d’affilée'], a: 0, e: 'Total 18 h de conduite pour l’équipage, véhicule immobilisé 9 h minimum.' },
        { q: 'Depuis le 20 août 2020, en double équipage, la pause de 45 min peut être prise dans le véhicule conduit par le collègue :', c: ['Vrai, à condition de ne pas assister le conducteur', 'Faux', 'Vrai uniquement la nuit', 'Vrai uniquement sur autoroute'], a: 0, e: 'Question du QCM 561/2006.' }
      ]
    },
    {
      id: 'l3', icon: '📟', title: 'Chronotachygraphe, carte conducteur, contrôles et sanctions',
      summary: 'Activités et symboles, carte conducteur, lecture du ticket, heure UTC, obligations, contrôles, infractions et délits.',
      sources: 'photos : évaluation RSE (chronotachygraphe), évaluation « ticket de chronotachygraphe », évaluation de synthèse C2a, exercice d’application n° 4, Kahoot. Vérifié avec le règlement (UE) 165/2014 et le code des transports.',
      content: `
<h3>Le chronotachygraphe</h3>
<ul><li>Obligatoire sur les véhicules de transport de marchandises de plus de <b>3,5 t</b> et de transport de personnes de plus de <b>9 places</b>.</li>
<li>Vérification par un installateur agréé : <b>tous les 2 ans</b> (l’élève avait coché 1 an : faux).</li>
<li>Il enregistre en heure <b>UTC</b> : en France, ajouter 1 h en hiver et 2 h en été (ex. ticket 02 h 41 UTC en septembre = 04 h 41 heure française).</li>
<li>Avec un disque : vérifier qu’il est <b>compatible</b> avec l’appareil ; un changement de véhicule dans la journée apparaît sur le même disque.</li></ul>
<h3>Les 4 activités</h3>
<table><tr><th>Symbole</th><th>Activité</th><th>Exemples tirés des exercices</th></tr>
<tr><td>🛞 volant</td><td><b>Conduite</b></td><td>Temps passé au volant</td></tr>
<tr><td>⚒ marteaux croisés</td><td><b>Autre travail</b></td><td>Chargement / déchargement (ou y assister), pleins de carburant et d’AdBlue, lavage du camion, préparation administrative, vérifications, attente dont la fin est inconnue, trajet en TGV pour aller chercher un véhicule</td></tr>
<tr><td>▱ carré barré</td><td><b>Disponibilité</b></td><td>Attente dont la fin est connue (documents prêts dans 20 min), passager en double équipage, ferry sans couchette</td></tr>
<tr><td>🛏 lit</td><td><b>Repos / pause</b></td><td>Repas, pause, repos journalier et hebdomadaire</td></tr></table>
<h3>La carte conducteur</h3>
<ul><li>Rattachée au <b>conducteur</b> (pas au véhicule), personnelle : interdiction de la prêter ou d’en posséder deux.</li>
<li>Validité : <b>5 ans</b>. Coût : à la charge de l’<b>employeur</b> (décret du 10 mars 2006).</li>
<li>À insérer <b>dès la prise de service</b>. Carte oubliée : on ne conduit pas (rouler sans carte = infraction, les alertes « conduite sans carte » apparaissent sur le ticket).</li>
<li>Carte défectueuse, perdue ou volée : demande de remplacement sous <b>7 jours</b> (1 semaine) ; conduite possible <b>15 jours</b> maximum avec tickets imprimés et signés.</li>
<li>Tachygraphe en panne : réparation sous <b>7 jours</b> ; noter les activités à la main en attendant.</li>
<li>Avoir des <b>rouleaux de papier</b> de réserve dans le véhicule pour imprimer en cas de contrôle.</li></ul>
<h3>Contrôles</h3>
<ul><li>En contrôle routier, justifier ses activités pour <b>la journée en cours et les 56 jours précédents</b> (28 jours avant le 31 décembre 2024).</li>
<li>Télécharger la carte conducteur au moins tous les <b>28 jours</b> ; l’entreprise conserve les données <b>1 an</b>.</li>
<li>Un jour sans conduite (congé, maladie) est justifié par une <b>attestation d’activités visée par l’employeur</b> (pas un certificat sur l’honneur ni le disque de la veille).</li>
<li>Un défaut de manipulation est imputé au <b>conducteur</b>.</li></ul>
<h3>Sanctions</h3>
<ul><li>Dépasser la conduite continue, pause ou repos insuffisants : <b>infraction</b> (amende) et <b>immobilisation du véhicule</b> possible. Pas de disque / pas de carte : amende + immobilisation immédiate.</li>
<li>Trafiquer le chronotachygraphe : <b>délit</b>, forte amende (jusqu’à la prison).</li></ul>
<h3>Lire un ticket (exemple de l’évaluation)</h3>
<p>Un ticket « 24 h » indique le nom du conducteur, le numéro et la validité de la carte, l’immatriculation, la marque (ex. Siemens VDO), le kilométrage de début et de fin (ex. 275 390 → 275 874 = <b>484 km</b>), la liste des activités avec début, fin et durée, puis les totaux : conduite (07 h 49), travail, disponibilité, repos (11 h 41), et les <b>alertes</b> (ex. conduite sans carte). Amplitude = de la première activité à la fin de service.</p>`,
      quiz: [
        { img: IMG.chrono, q: 'Le chronotachygraphe est obligatoire pour :', c: ['Les véhicules de plus de 3,5 t et ceux de plus de 9 places', 'Les véhicules de plus de 19 t uniquement', 'Les véhicules légers de marchandises', 'Les véhicules de plus de 12 t uniquement'], a: 0, e: 'Plus de 3,5 t (marchandises) et plus de 9 places (voyageurs).' },
        { img: IMG.carte, q: 'La carte de chronotachygraphe est rattachée :', c: ['Au conducteur', 'Au véhicule', 'À l’entreprise', 'À la remorque'], a: 0, e: 'Elle est personnelle.' },
        { img: IMG.carte, q: 'Votre collègue a perdu sa carte conducteur. Pouvez-vous lui prêter la vôtre ?', c: ['Non, jamais', 'Oui pour une journée', 'Oui s’il travaille dans la même entreprise', 'Oui avec l’accord de l’employeur'], a: 0, e: 'La carte est strictement personnelle ; on ne peut pas non plus en posséder deux.' },
        { img: IMG.carte, q: 'Quelle est la durée de validité de la carte conducteur ?', c: ['5 ans', '1 an', '3 ans', '4 ans'], a: 0, e: 'Cinq ans (question Kahoot).' },
        { img: IMG.chrono, q: 'Quelle est la périodicité de la visite technique du chronotachygraphe ?', c: ['2 ans', '1 an', '6 mois', 'Après le 4e anniversaire puis tous les 2 ans'], a: 0, e: 'Tous les 2 ans (l’élève avait coché 1 an : faux).' },
        { q: 'Lors d’un contrôle, vous devez justifier vos activités sur :', c: ['La journée en cours et les 56 jours précédents', 'Les 28 derniers jours seulement', 'La semaine en cours', 'Les 7 derniers jours'], a: 0, e: '56 jours depuis le 31 décembre 2024.' },
        { q: 'Combien de temps avez-vous pour demander le remplacement d’une carte défectueuse ?', c: ['7 jours (1 semaine)', '1 mois', '24 h', '15 jours'], a: 0, e: 'Sept jours civils.' },
        { q: 'Les données du chronotachygraphe doivent être conservées par l’entreprise :', c: ['1 an', '6 mois', '3 mois', '5 ans'], a: 0, e: 'Un an minimum.' },
        { img: IMG.chrono, q: 'Le disque (ou la carte) doit être mis en place :', c: ['Dès la prise de service', 'Au début de la conduite', 'Avant la première période de travail seulement', 'Quand on le juge nécessaire'], a: 0, e: 'Dès la prise de service, avant toute activité.' },
        { q: 'Un défaut de manipulation du tachygraphe est imputé :', c: ['Au conducteur', 'À l’employeur', 'Au chargeur', 'À l’installateur'], a: 0, e: 'Le conducteur est responsable de l’utilisation.' },
        { q: 'Quel document justifie une période sans conduite ?', c: ['Une attestation visée par l’employeur', 'Un certificat sur l’honneur', 'Le disque du dernier jour de conduite', 'Un contrat de travail'], a: 0, e: 'Attestation d’activités (l’élève avait coché le disque de la veille : faux).' },
        { img: IMG.chrono, q: 'Trafiquer le chronotachygraphe, c’est :', c: ['Un délit, avec une forte amende', 'Une simple infraction', 'Toléré en cas d’urgence', 'Sanctionné de 6 points seulement'], a: 0, e: 'Délit.' },
        { q: 'Dépasser la durée maximale de conduite continue, c’est :', c: ['Une infraction, avec risque d’immobilisation du véhicule', 'Un délit', 'Sans conséquence', 'Une suspension automatique du permis'], a: 0, e: 'Infraction + immobilisation possible (l’élève avait coché « amende » seule sur la C2a : la sanction attendue était l’immobilisation).' },
        { q: 'Le non-respect des temps de conduite et de repos peut-il entraîner une immobilisation du véhicule ?', c: ['Oui', 'Non', 'Seulement en international', 'Seulement en récidive'], a: 0, e: 'Oui.' },
        { q: 'En plus de l’amende, quelle sanction immédiate si vous n’avez pas mis de disque dans le chronotachygraphe ?', c: ['L’immobilisation du véhicule', 'Le retrait du permis', 'Un avertissement', 'Aucune'], a: 0, e: 'Immobilisation du véhicule.' },
        { q: 'Le coût de la carte conducteur d’un salarié incombe :', c: ['Toujours à l’employeur', 'Au conducteur', 'Pour moitié à chacun', 'Selon accord d’entreprise'], a: 0, e: 'Décret du 10 mars 2006.' },
        { q: 'Le tachygraphe enregistre les heures en :', c: ['Heure UTC', 'Heure française', 'Heure du pays d’immatriculation', 'Heure choisie par le conducteur'], a: 0, e: 'UTC : +1 h en hiver, +2 h en été en France.' },
        { img: IMG.ticket, q: 'Un ticket indique un début d’activité à 02 h 41 UTC un 12 septembre. Quelle est l’heure française ?', c: ['04 h 41', '02 h 41', '03 h 41', '01 h 41'], a: 0, e: 'En été, heure française = UTC + 2 h.' },
        { img: IMG.symboles, q: 'Vous attendez qu’on vous appelle pour vous mettre à quai, sans savoir quand. Position du sélecteur :', c: ['Autre travail', 'Disponibilité', 'Repos', 'Conduite'], a: 0, e: 'Fin de l’attente inconnue = travail.' },
        { img: IMG.symboles, q: 'Vous attendez vos documents qui seront prêts dans 20 min. Position du sélecteur :', c: ['Disponibilité', 'Autre travail', 'Repos', 'Conduite'], a: 0, e: 'Durée connue à l’avance = disponibilité.' },
        { img: IMG.symboles, q: 'Vous faites le plein de carburant et d’AdBlue. Position du sélecteur :', c: ['Autre travail', 'Disponibilité', 'Repos', 'Conduite'], a: 0, e: 'Marteaux croisés.' },
        { img: IMG.symboles, q: 'Vous prenez votre repas. Position du sélecteur :', c: ['Repos', 'Disponibilité', 'Autre travail', 'Conduite'], a: 0, e: 'Symbole lit.' },
        { img: IMG.symboles, q: 'Vous êtes passager en double équipage. Position du sélecteur :', c: ['Disponibilité', 'Repos', 'Autre travail', 'Conduite'], a: 0, e: 'Carré barré.' },
        { img: IMG.symboles, q: 'Vous lavez le camion. Position du sélecteur :', c: ['Autre travail', 'Disponibilité', 'Repos', 'Conduite'], a: 0, e: 'Le lavage est un travail (corrigé en rouge par le formateur sur la C2a).' },
        { img: IMG.symboles, q: 'Vous êtes dans le TGV pour aller récupérer un véhicule. Position à enregistrer :', c: ['Autre travail', 'Repos', 'Disponibilité', 'Conduite'], a: 0, e: 'Trajet pour relais = travail.' },
        { q: 'Si la feuille d’enregistrement est compatible, le changement de véhicule dans la journée apparaît :', c: ['Sur le même disque', 'Sur un nouveau disque', 'Nulle part', 'Sur le carnet de bord seulement'], a: 0, e: 'Question de la C2a.' },
        { q: 'Toutes les feuilles d’enregistrement (disques) sont-elles compatibles avec tous les tachygraphes ?', c: ['Non', 'Oui', 'Oui si même marque', 'Oui depuis 2006'], a: 0, e: 'Il faut un disque homologué pour l’appareil.' },
        { img: IMG.ticket, q: 'Sur un ticket, le kilométrage passe de 275 390 à 275 874 km. Distance parcourue :', c: ['484 km', '384 km', '584 km', '474 km'], a: 0, e: '275 874 − 275 390 = 484.' },
        { img: IMG.ticket, q: 'Les alertes « conduite sans carte » sur un ticket signifient :', c: ['Que le véhicule a roulé sans carte insérée : défaut de manipulation', 'Que la carte est périmée', 'Que le conducteur a trop conduit', 'Que le tachygraphe est en panne'], a: 0, e: 'Défaut imputé au conducteur.' }
      ]
    },
    {
      id: 'l4', icon: '🕒', title: 'Temps de service, amplitude et pauses (code des transports)',
      summary: 'Différence RSE / code du travail : temps de service, amplitude, pauses obligatoires, travail de nuit, salaire, calcul sur un disque.',
      sources: 'photos : fiche « Respect de la réglementation » (temps de service, heures de nuit), notes « législation du travail », évaluation RSE (temps de service, amplitude), exercice sur disque du 02/04, exercice Lundi/Mardi. Vérifié avec le code des transports.',
      content: `
<h3>Définitions</h3>
<ul><li><b>Temps de service</b> (temps de travail effectif) = <b>conduite + autre travail + disponibilité</b>. Il ne comprend ni les pauses ni les repos.</li>
<li><b>Amplitude</b> = de la prise de service à la fin de service, pauses comprises. <b>Temps de service = amplitude − pauses et repos.</b></li></ul>
<h3>Limites (code des transports)</h3>
<table><tr><th>Règle</th><th>Durée</th></tr>
<tr><td>Temps de service journalier maximal</td><td><b>12 h</b> ; <b>10 h</b> si une partie du travail est faite entre 0 h et 5 h</td></tr>
<tr><td>Amplitude maximale</td><td><b>15 h</b> (notes de cours ; avec un repos journalier réduit de 9 h)</td></tr>
<tr><td>Temps de service hebdomadaire maximal</td><td><b>56 h</b> grands routiers · <b>52 h</b> autres · <b>48 h</b> messagerie et convoyeurs</td></tr>
<tr><td>Pause (code des transports)</td><td>Service de 6 h à 9 h : <b>30 min</b> ; plus de 9 h : <b>45 min</b> ; fractionnable par tranches de <b>15 min</b> (2 × 15 ou 3 × 15)</td></tr>
<tr><td>Heures de nuit</td><td>De <b>21 h à 6 h</b></td></tr></table>
<h3>Salaire</h3>
<p>Il peut être calculé en fonction du <b>nombre d’heures</b>, du nombre de <b>rotations/tours</b>, et de <b>primes</b> (accident, économie d’énergie). Pas en fonction de la charge ou de la distance si cela compromet la sécurité.</p>
<h3>Exemple : disque du 02/04</h3>
<ul><li>Prise de service 9 h 00, fin de service 21 h 00 → <b>amplitude 12 h</b>.</li>
<li>Repos de 14 h à 15 h = 1 h → temps de service 12 h − 1 h = <b>11 h</b>.</li>
<li>Conduite de 15 h à 21 h sans pause = 6 h de conduite continue → <b>infraction</b> (plus de 4 h 30). Si la période 14 h–15 h avait été enregistrée en « disponibilité », il n’y aurait eu aucune interruption : infraction aussi.</li>
<li>Reprise à 6 h le lendemain : 21 h → 6 h = 9 h = repos réduit, suffisant.</li></ul>
<h3>Exemple : journée du lundi (exercice)</h3>
<p>Vérification 8 h 00 (travail 15 min), attente de l’ordre de mission (travail 15 min), préparation (travail 15 min), conduite 8 h 45 → 11 h 00 (2 h 15), chargement, conduite, repas 12 h 30 → 13 h 30 (repos 1 h), conduite, déchargement, conduite 16 h → 19 h 30 (3 h 30), fin 19 h 30. Amplitude 11 h 30, repos journalier jusqu’au mardi 6 h = <b>10 h 30</b> (réduit). Du vendredi 20 h au lundi 8 h : repos hebdomadaire de <b>60 h</b> (normal).</p>
<div class="key">Mémo : service 12 h (10 h de nuit) · amplitude 15 h · 56 / 52 / 48 h par semaine · pause 30 min (6–9 h) / 45 min (> 9 h) · nuit 21 h–6 h.</div>`,
      quiz: [
        { q: 'Que comprend le temps de service ?', c: ['Conduite, disponibilité et autres tâches', 'Conduite uniquement', 'Conduite, pauses et repos', 'Repos journalier et hebdomadaire'], a: 0, e: 'Temps de service = conduite + travail + disponibilité.' },
        { q: 'Que comprend l’amplitude de travail ?', c: ['Conduite, disponibilité, pauses et autres tâches', 'Conduite uniquement', 'Repos journalier et hebdomadaire', 'Conduite et repos hebdomadaire'], a: 0, e: 'Tout ce qui se passe entre la prise et la fin de service.' },
        { q: 'Le temps de service journalier maximal est de :', c: ['12 h', '9 h', '10 h dans tous les cas', '15 h'], a: 0, e: '12 h (10 h si travail entre 0 h et 5 h).' },
        { q: 'Si une partie du service est effectuée entre 0 h et 5 h, le temps de service journalier est limité à :', c: ['10 h', '12 h', '9 h', '8 h'], a: 0, e: 'Travail de nuit : 10 h.' },
        { q: 'Les heures de nuit dans le transport routier sont comprises entre :', c: ['21 h et 6 h', '22 h et 5 h', '0 h et 5 h', '20 h et 7 h'], a: 0, e: '21 h – 6 h.' },
        { q: 'Le temps de service hebdomadaire maximal d’un grand routier (semaine isolée) est de :', c: ['56 h', '48 h', '52 h', '60 h'], a: 0, e: '56 h grands routiers, 52 h autres, 48 h messagerie/convoyeurs.' },
        { q: 'Le temps de service hebdomadaire maximal en messagerie est de :', c: ['48 h', '52 h', '56 h', '45 h'], a: 0, e: '48 h pour la messagerie et les convoyeurs.' },
        { q: 'Pour un temps de service de plus de 9 h, la pause obligatoire (code des transports) est de :', c: ['45 min', '30 min', '15 min', '1 h'], a: 0, e: '30 min entre 6 et 9 h, 45 min au-delà de 9 h.' },
        { q: 'Pour un temps de service entre 6 h et 9 h, la pause obligatoire est de :', c: ['30 min', '45 min', '15 min', '1 h'], a: 0, e: 'Fractionnable en 2 × 15 min.' },
        { q: 'L’amplitude maximale d’une journée (notes de cours) est de :', c: ['15 h', '12 h', '13 h 30', '17 h'], a: 0, e: '15 h = 24 h − 9 h de repos réduit.' },
        { q: 'Comment calcule-t-on le temps de service ?', c: ['Amplitude − pauses et repos', 'Amplitude + pauses', 'Conduite × 2', 'Repos − conduite'], a: 0, e: 'Formule de la fiche de cours.' },
        { q: 'Disque du 02/04 : prise de service 9 h, fin 21 h. Quelle est l’amplitude ?', c: ['12 h', '11 h', '9 h 30', '13 h'], a: 0, e: '21 h − 9 h = 12 h.' },
        { q: 'Même disque : 1 h de repos de 14 h à 15 h. Quel est le temps de travail effectif ?', c: ['11 h', '12 h', '9 h 30', '10 h'], a: 0, e: '12 h − 1 h = 11 h.' },
        { q: 'Même disque : conduite de 15 h à 21 h sans arrêt. Y a-t-il une infraction ?', c: ['Oui : 6 h de conduite continue, plus de 4 h 30', 'Non', 'Non si le conducteur est en double équipage', 'Oui : amplitude trop longue'], a: 0, e: 'Conduite continue limitée à 4 h 30.' },
        { q: 'Même disque : si la période 14 h–15 h avait été enregistrée en « disponibilité », une infraction existerait-elle ?', c: ['Oui, il n’y aurait plus d’interruption de conduite', 'Non', 'Oui, amplitude dépassée', 'Non si moins de 12 h'], a: 0, e: 'La disponibilité n’est pas une pause.' },
        { q: 'Le salaire d’un conducteur peut être calculé en fonction :', c: ['Du nombre d’heures, du nombre de rotations et de primes', 'De la charge transportée', 'De la distance parcourue uniquement', 'De la vitesse moyenne'], a: 0, e: 'Évaluation RSE, question 2.' },
        { q: 'Un conducteur finit vendredi à 20 h et reprend lundi à 8 h. Son repos hebdomadaire est de :', c: ['60 h (repos normal)', '45 h', '72 h 30', '24 h'], a: 0, e: 'Vendredi 20 h → lundi 8 h = 60 h (réponse corrigée par le formateur sur l’exercice).' },
        { q: 'Lundi : fin de service 19 h 30, mardi : vérification du véhicule à 6 h. Le repos journalier est de :', c: ['10 h 30 (repos réduit)', '11 h (repos normal)', '9 h', '12 h'], a: 0, e: '19 h 30 → 6 h = 10 h 30, moins de 11 h : repos réduit.' }
      ]
    },
    {
      id: 'l5', icon: '📄', title: 'Accès au métier, documents, véhicule et entreprise',
      summary: 'FIMO/FCO, carte conducteur, conditions pour être transporteur, licence, lettre de voiture / CMR, protocole de sécurité, masses et longueurs, visites techniques, limiteur.',
      sources: 'photos : Kahoot (questions 6 à 40), supplément permis C (questions 1 à 14). Vérifié avec le code de la route (masses et dimensions, vitesses) et les textes FIMO/FCO.',
      content: `
<h3>Qualification du conducteur</h3>
<ul><li>Pour être conducteur professionnel, il faut une <b>attestation FIMO</b> (ou un titre équivalent) en plus du permis.</li>
<li>La FIMO est valable <b>5 ans</b> ; ensuite la <b>FCO</b> (recyclage) tous les <b>5 ans</b>. Le transport de matières dangereuses demande en plus l’<b>ADR</b>.</li>
<li>Le <b>titre professionnel de conducteur routier</b> permet d’obtenir la FIMO <b>par équivalence</b> (ce n’est pas un diplôme de l’Éducation nationale).</li>
<li>Carte conducteur (tachygraphe) : <b>5 ans</b>.</li></ul>
<h3>Pour être transporteur (chef d’entreprise)</h3>
<p>Il faut l’<b>attestation de capacité</b> professionnelle, l’<b>honorabilité</b>, la capacité financière et un <b>local / établissement en France</b>. Dans le transport public, la <b>licence communautaire</b> fait preuve de l’inscription au registre des transporteurs et des loueurs ; c’est le document qui permet le transport pour compte d’autrui avec un véhicule de plus de 3,5 t.</p>
<h3>Documents et consignes</h3>
<ul><li>La <b>lettre de voiture</b> accompagne la marchandise ; en international on l’appelle <b>CMR</b>.</li>
<li>Le <b>protocole de sécurité</b> doit être signé pour avoir le droit de <b>circuler dans l’usine et de décharger</b>.</li>
<li>En cas de litige important, le conducteur <b>rend compte et attend les instructions</b> de son entreprise.</li>
<li>Il est indispensable d’avoir des connaissances en <b>conduite rationnelle</b>.</li>
<li>Le transport routier de marchandises est le <b>premier mode de transport</b> en France.</li></ul>
<h3>Masses et dimensions (règle générale)</h3>
<table><tr><th>Véhicule</th><th>Maximum</th></tr>
<tr><td>Longueur véhicule isolé (porteur)</td><td><b>12 m</b></td></tr>
<tr><td>Longueur ensemble articulé (semi-remorque)</td><td><b>16,50 m</b></td></tr>
<tr><td>Longueur train routier</td><td><b>18,75 m</b></td></tr>
<tr><td>Longueur train routier porte-voitures en charge</td><td><b>20,35 m</b></td></tr>
<tr><td>PTAC véhicule isolé 3 essieux</td><td><b>26 t</b></td></tr>
<tr><td>Majoration de PTAC pour un ralentisseur de 600 kg</td><td><b>500 kg</b> maximum</td></tr>
<tr><td>Masse à partir de laquelle la RSE s’applique</td><td>plus de <b>3,5 t</b></td></tr></table>
<h3>Véhicule : contrôles et équipements</h3>
<ul><li>Visite technique des PL de plus de 3,5 t : <b>tous les ans</b>, par un centre de contrôle technique agréé. Véhicule ayant subi plusieurs interdictions de circuler : contrôles rapprochés.</li>
<li>Chronotachygraphe : vérification <b>tous les 2 ans</b>. <b>Limiteur de vitesse</b> : il équipe les PL et empêche de dépasser <b>90 km/h</b> ; il est contrôlé à la visite technique annuelle.</li>
<li>Vitesse d’un véhicule de 13 t sur autoroute : <b>90 km/h</b>.</li>
<li>Extincteur : obligatoire à bord d’un PL (à poudre, 6 kg minimum à l’extérieur pour les plus gros véhicules selon le supplément permis C).</li></ul>`,
      quiz: [
        { q: 'Pour être conducteur professionnel il faut :', c: ['Une attestation FIMO', 'Obligatoirement un diplôme de conducteur routier', 'Une attestation de capacité', 'Un permis avec toutes les catégories'], a: 0, e: 'Question Kahoot.' },
        { q: 'Votre FIMO est valable :', c: ['5 ans', '10 ans', 'À vie', 'Selon la validité du permis'], a: 0, e: 'Cinq ans.' },
        { q: 'Le recyclage de la FIMO (FCO) se fait tous les :', c: ['5 ans', '2 ans', '3 ans', '4 ans'], a: 0, e: 'FCO tous les 5 ans.' },
        { q: 'Tous les 5 ans, le conducteur routier doit effectuer la formation :', c: ['FCO', 'FIMO', 'ADR obligatoirement', 'Prévention routière'], a: 0, e: 'FCO (l’ADR est à part, pour les matières dangereuses).' },
        { q: 'Le titre professionnel de conducteur routier :', c: ['Permet d’obtenir la FIMO par équivalence', 'Est un diplôme de l’Éducation nationale', 'Ne dispense pas de l’examen FIMO', 'Permet de conduire avant 18 ans'], a: 0, e: 'Question Kahoot.' },
        { q: 'Pour être transporteur il faut :', c: ['Une attestation de capacité', 'La capacité culinaire', 'Une boîte postale', 'Une facture annuelle d’impôts'], a: 0, e: 'Attestation de capacité professionnelle.' },
        { q: 'Pour être transporteur il faut aussi :', c: ['L’honorabilité', 'Une attestation de paiement', 'Un local en Europe', 'Aucune condition'], a: 0, e: 'Honorabilité + capacité financière + local en France.' },
        { q: 'Dans le transport public, la licence communautaire fait-elle preuve de l’inscription au registre des transporteurs ?', c: ['Oui', 'Non', 'Seulement en international', 'Seulement pour les loueurs'], a: 0, e: 'Supplément permis C, question 6.' },
        { q: 'Quel document permet un transport pour compte d’autrui avec un véhicule de plus de 3,5 t ?', c: ['La licence communautaire', 'La lettre de voiture', 'La carte grise', 'L’attestation FIMO'], a: 0, e: 'Copie conforme de la licence à bord.' },
        { q: 'Comment s’appelle plus communément la lettre de voiture internationale ?', c: ['CMR', 'ADR', 'Bon de livraison', 'Licence'], a: 0, e: 'Question Kahoot.' },
        { q: 'Le conducteur doit signer le protocole de sécurité pour avoir le droit de :', c: ['Circuler dans l’usine et décharger', 'Se faire régler la facture de transport', 'Discuter avec le responsable de quai', 'Prendre sa pause'], a: 0, e: 'Question Kahoot.' },
        { q: 'En cas de litige important, le conducteur doit :', c: ['Rendre compte et attendre les instructions de son entreprise', 'Gérer seul la situation', 'Laisser dégénérer en conflit', 'Critiquer l’organisation de son entreprise'], a: 0, e: 'Question Kahoot.' },
        { q: 'Il est indispensable, pour un conducteur, d’avoir des connaissances :', c: ['En conduite rationnelle', 'En informatique', 'En gestion commerciale', 'En langue étrangère'], a: 0, e: 'Question Kahoot.' },
        { q: 'Le transport routier de marchandises est le premier mode de transport en France :', c: ['Vrai', 'Faux', 'Pas toujours', 'Cela dépend'], a: 0, e: 'Question Kahoot.' },
        { img: IMG.truck, q: 'Longueur maximale d’un véhicule isolé de transport de marchandises :', c: ['12 m', '16,50 m', '18,75 m', '20,35 m'], a: 0, e: '12 m.' },
        { img: IMG.semi, q: 'Longueur maximale d’un ensemble type semi-remorque :', c: ['16,50 m', '12 m', '18,75 m', '20,35 m'], a: 0, e: '16,50 m.' },
        { img: IMG.semi, q: 'Longueur maximale d’un train routier :', c: ['18,75 m', '16,50 m', '12 m', '20,35 m'], a: 0, e: '18,75 m.' },
        { img: IMG.semi, q: 'Longueur maximale d’un train routier porte-voitures en charge :', c: ['20,35 m', '18,75 m', '16,50 m', '12 m'], a: 0, e: '20,35 m.' },
        { q: 'En règle générale, le PTAC maximal d’un véhicule isolé à 3 essieux est de :', c: ['26 t', '19 t', '32 t', '44 t'], a: 0, e: '26 tonnes.' },
        { q: 'Majoration maximale du PTAC pour un véhicule équipé d’un ralentisseur de 600 kg :', c: ['500 kg', '600 kg', '1 000 kg', 'Aucune'], a: 0, e: 'Supplément permis C, question 8.' },
        { q: 'Au-dessus de quelle masse un véhicule de marchandises est-il soumis à la RSE ?', c: ['3,5 t', '7,5 t', '12 t', '19 t'], a: 0, e: 'Plus de 3,5 t.' },
        { q: 'La visite technique d’un véhicule de marchandises de plus de 3,5 t a lieu :', c: ['Tous les ans', 'Tous les 2 ans', 'Après le 4e anniversaire puis tous les 2 ans', 'Avant toute vente'], a: 0, e: 'Visite annuelle.' },
        { q: 'Par qui les visites techniques des véhicules sont-elles assurées ?', c: ['Un centre de contrôle technique agréé', 'La police', 'Le concessionnaire', 'L’employeur'], a: 0, e: 'Service de contrôle technique agréé.' },
        { img: IMG.vit90, q: 'J’équipe les poids lourds et je ne dépasse pas 90 km/h. Qui suis-je ?', c: ['Le limiteur de vitesse', 'Le régulateur de vitesse', 'L’ordinateur de bord', 'Le GPS'], a: 0, e: 'Question Kahoot.' },
        { img: IMG.vit90, q: 'Vous conduisez un véhicule de 13 t de PTAC sans matières dangereuses. Vitesse maximale sur autoroute :', c: ['90 km/h', '80 km/h', '110 km/h', '100 km/h'], a: 0, e: 'Supplément permis C, question 14.' }
      ]
    },
    {
      id: 'l6', icon: '🚦', title: 'Code de la route et sécurité pour le permis C',
      summary: 'Panneaux spécifiques aux poids lourds, voie lente, alcool et temps de réaction, feux, constat amiable, aquaplaning, distances de sécurité.',
      sources: 'photos : supplément permis C (questions 15 à 20), tronc commun « connaissances générales en circulation et sécurité routière ». Vérifié avec le code de la route.',
      content: `
<h3>Panneaux à connaître (supplément permis C)</h3>
<table><tr><th>Panneau</th><th>Signification</th></tr>
<tr><td>Rond, camion avec « 10 m »</td><td>Accès interdit aux véhicules ou ensembles de plus de <b>10 m de longueur</b> (l’élève avait écrit « interdit de dépasser la longueur » : noté faux, il faut parler d’<b>accès interdit</b>)</td></tr>
<tr><td>Rond, « 3,5 m » entre deux flèches verticales</td><td>Accès interdit aux véhicules de plus de <b>3,5 m de hauteur</b></td></tr>
<tr><td>Rond, camion rouge à gauche d’une voiture</td><td><b>Interdiction de dépasser</b> pour les véhicules de transport de marchandises</td></tr>
<tr><td>Rectangle « N 137 – PONS » avec pictogramme camion</td><td>Panneau de <b>direction / itinéraire conseillé</b> aux poids lourds (direction de la ville par la route N 137 pour les PL)</td></tr>
<tr><td>Carré noir, flèche en V et damier</td><td><b>Fin de voie</b> (réduction du nombre de voies / rabattement)</td></tr></table>
<h3>Règles de circulation</h3>
<ul><li>Sur autoroute, la <b>voie réservée aux véhicules lents</b> doit être utilisée en dessous de <b>60 km/h</b> (selon la signalisation).</li>
<li>La nuit par temps clair, les <b>feux de route</b> doivent éclairer efficacement sur <b>100 m</b> au moins ; les feux de croisement sur 30 m.</li>
<li>Par <b>forte pluie</b>, les feux de brouillard <b>arrière</b> sont <b>interdits</b> (réservés au brouillard et à la neige), car ils éblouissent.</li>
<li>Un <b>lave-glace</b> en état de marche est obligatoire.</li>
<li>Le <b>constat amiable</b> n’est pas obligatoire à bord ; il ne suffit <b>pas</b> en cas d’accident corporel (prévenir les forces de l’ordre).</li>
<li>La <b>distance de sécurité</b> augmente avec la vitesse ; hors agglomération, un PL de plus de 3,5 t laisse au moins <b>50 m</b> avec le véhicule qui précède.</li>
<li>Le risque d’<b>aquaplaning</b> est plus important sur <b>autoroute</b> (vitesse élevée).</li></ul>
<h3>Alcool et réaction</h3>
<ul><li>L’alcool <b>allonge</b> le temps de réaction (il ne le diminue pas).</li>
<li>Boire de l’eau <b>ne fait pas baisser</b> le taux d’alcoolémie : seul le temps l’élimine.</li>
<li>Pour le permis C, l’aptitude visuelle est contrôlée à la visite médicale (acuité minimale exigée de l’œil le moins bon, avec correction : <b>1/10</b>, et 8/10 pour l’ensemble, selon l’arrêté sur les affections médicales).</li></ul>`,
      quiz: [
        { img: IMG.l10, q: 'Que signifie un panneau rond avec un camion et la mention « 10 m » ?', c: ['Accès interdit aux véhicules de plus de 10 m de longueur', 'Interdiction de dépasser sur 10 m', 'Hauteur limitée à 10 m', 'Distance de sécurité de 10 m'], a: 0, e: 'Limitation de longueur = accès interdit au-delà.' },
        { img: IMG.h35, q: 'Que signifie un panneau rond « 3,5 m » entre deux flèches verticales ?', c: ['Accès interdit aux véhicules de plus de 3,5 m de hauteur', 'Accès interdit aux plus de 3,5 t', 'Largeur limitée à 3,5 m', 'Longueur limitée à 3,5 m'], a: 0, e: 'Hauteur limitée à 3,5 m (réponse juste de l’élève).' },
        { img: IMG.nodep, q: 'Un panneau rond montrant un camion rouge à gauche d’une voiture signifie :', c: ['Interdiction de dépasser pour les poids lourds', 'Interdiction aux poids lourds', 'Fin d’interdiction de dépasser', 'Voie réservée aux PL'], a: 0, e: 'Les PL ne doivent pas dépasser les autres véhicules à moteur.' },
        { img: IMG.finvoie, q: 'Un panneau carré noir avec une flèche en V et un damier indique :', c: ['Une fin de voie (réduction du nombre de voies)', 'Une voie réservée aux PL', 'Un passage à niveau', 'Une aire de repos'], a: 0, e: 'Signalisation de rabattement.' },
        { img: IMG.dir, q: 'Un panneau rectangulaire « N 137 – PONS » avec un pictogramme de camion indique :', c: ['L’itinéraire conseillé aux poids lourds vers Pons par la N 137', 'Une interdiction aux poids lourds', 'Une limitation de vitesse', 'Un parking PL'], a: 0, e: 'Panneau de direction destiné aux PL (l’élève avait répondu « interdiction » : faux).' },
        { q: 'Sur autoroute, en dessous de quelle vitesse doit-on utiliser la voie réservée aux véhicules lents ?', c: ['60 km/h', '80 km/h', '90 km/h', '40 km/h'], a: 0, e: '60 km/h (l’élève avait écrit 80 km/h).' },
        { q: 'La présence d’alcool dans le sang diminue-t-elle le temps de réaction ?', c: ['Non, elle l’allonge', 'Oui', 'Oui sous 0,5 g/l', 'Sans effet'], a: 0, e: 'L’alcool allonge le temps de réaction.' },
        { q: 'Le taux d’alcoolémie diminue-t-il en buvant de l’eau ?', c: ['Non', 'Oui', 'Oui si beaucoup d’eau', 'Oui avec du café'], a: 0, e: 'Seul le temps élimine l’alcool.' },
        { q: 'Par forte pluie, pouvez-vous utiliser les feux de brouillard arrière ?', c: ['Non', 'Oui', 'Oui de nuit seulement', 'Oui sur autoroute'], a: 0, e: 'Interdits par pluie : ils éblouissent. Réservés au brouillard et à la neige.' },
        { q: 'Un constat amiable suffit-il en cas d’accident corporel ?', c: ['Non', 'Oui', 'Oui si blessés légers', 'Oui si accord des deux conducteurs'], a: 0, e: 'Accident corporel : prévenir police ou gendarmerie.' },
        { q: 'La possession d’un constat amiable à bord est-elle une obligation réglementaire ?', c: ['Non', 'Oui', 'Oui pour les PL seulement', 'Oui en international'], a: 0, e: 'Recommandé, pas obligatoire.' },
        { q: 'Un lave-glace en état de fonctionnement est-il obligatoire ?', c: ['Oui', 'Non', 'Seulement l’hiver', 'Seulement pour les PL'], a: 0, e: 'Oui.' },
        { q: 'La nuit par temps clair, les feux de route doivent éclairer efficacement sur au moins :', c: ['100 m', '30 m', '50 m', '200 m'], a: 0, e: '100 m (30 m pour les feux de croisement).' },
        { q: 'Le risque d’aquaplaning est plus important :', c: ['Sur autoroute', 'Sur route', 'En agglomération', 'À l’arrêt'], a: 0, e: 'Vitesse élevée.' },
        { q: 'La distance de sécurité avec le véhicule qui précède varie-t-elle en fonction de l’allure ?', c: ['Oui', 'Non', 'Seulement de nuit', 'Seulement pour les PL'], a: 0, e: 'Elle augmente avec la vitesse.' },
        { q: 'Hors agglomération, un PL de plus de 3,5 t doit laisser avec le véhicule qui précède au moins :', c: ['50 m', '20 m', '100 m', '10 m'], a: 0, e: 'Article R412-12 du code de la route.' }
      ]
    },
    {
      id: 'l7', icon: '🧮', title: 'Calculs du conducteur : temps, distances, surfaces, conversions',
      summary: 'Les calculs des tests ECF : conversions, additions de temps, kilométrage, surfaces et volumes, palettes, durée de conduite estimée.',
      sources: 'photos : tronc commun « test de logique et de calcul », questionnaire ECCP (calculs). Méthodes vérifiées.',
      content: `
<h3>Conversions</h3>
<ul><li>1 km = 1 000 m → 2 300 m = <b>2,3 km</b> ; 10 km = <b>10 000 m</b>.</li>
<li>1 h = 60 min → 3 h 30 = <b>210 min</b> ; 2 h 45 = <b>165 min</b> ; 3 h 25 = <b>205 min</b> ; 4 h 30 = <b>270 min</b>. 300 s = <b>5 min</b>.</li>
<li>1 t = 1 000 kg → 10 t 02 (10 t et 20 kg) = <b>10 020 kg</b> ; 9 680 kg = <b>9,68 t</b>.</li></ul>
<h3>Additionner des temps</h3>
<p>Additionner les minutes, convertir chaque tranche de 60 min en 1 h.</p>
<ul><li>1 h 45 + 30 min + 3 h 30 + 55 min = 4 h + 160 min = <b>6 h 40</b>.</li>
<li>2 h 30 + 4 h 15 + 75 min + 1 h 25 = 7 h + 145 min = <b>9 h 25</b>.</li>
<li>3 h 45 + 55 min + 33 min + 3 h 37 = 6 h + 170 min = <b>8 h 50</b>.</li></ul>
<h3>Distances et vitesses</h3>
<ul><li>Distance parcourue = km arrivée − km départ : 216 008 − 215 687 = <b>321 km</b> ; 329 785 − 329 568 = <b>217 km</b>.</li>
<li>Camion à 1,2 km par minute : en 20 min, 1,2 × 20 = 24 km = <b>24 000 m</b>.</li>
<li>Autonomie : 64 l ÷ 8 l/100 km = 8 → 8 × 100 = <b>800 km</b>.</li>
<li>Durée = distance ÷ vitesse : 280 km à 47 km/h = 5,96 h ≈ <b>5 h 58</b> (0,96 h × 60 = 57,6 min).</li></ul>
<h3>Surfaces, volumes, palettes</h3>
<ul><li>Surface = longueur × largeur : 8 m × 2,50 m = <b>20 m²</b> ; 9 m × 2,45 m = <b>22,05 m²</b>.</li>
<li>Volume = L × l × h : 8 × 2,50 × 3 = <b>60 m³</b> (unité m³, pas m²).</li>
<li>Palettes au sol : plancher 7 m × 2,40 m, palettes 1,20 m × 0,80 m → dans la longueur 7 ÷ 1,20 = 5 (reste 1 m) ; dans la largeur 2,40 ÷ 0,80 = 3 → <b>15 palettes</b>. Autre sens : 7 ÷ 0,80 = 8 et 2,40 ÷ 1,20 = 2 → 16 palettes. Réponse maximale : <b>16</b>.</li></ul>
<div class="key">Réflexes : noter l’unité demandée (m, km, min, kg, m², m³) ; 1 h = 60 min ; distance ÷ vitesse = temps ; L × l = surface.</div>`,
      quiz: [
        { q: 'Mon camion parcourt 1,2 km en une minute. En 20 min, il parcourt :', c: ['24 000 m', '2 400 m', '12 000 m', '240 m'], a: 0, e: '1,2 × 20 = 24 km = 24 000 m (l’élève avait écrit 2 400 m : erreur d’unité).' },
        { q: 'Ma voiture consomme 8 l/100 km et le réservoir plein contient 64 l. Autonomie :', c: ['800 km', '512 km', '640 km', '80 km'], a: 0, e: '64 ÷ 8 = 8 → 800 km.' },
        { q: 'Plancher de 7 m × 2,40 m, palettes de 1,20 m × 0,80 m. Nombre maximal de palettes au sol :', c: ['16', '15', '17', '12'], a: 0, e: '8 dans la longueur (0,80 m) × 2 dans la largeur (1,20 m) = 16.' },
        { q: 'Véhicule de 8 m de long, 2,50 m de large, 3 m de haut. Surface au sol :', c: ['20 m²', '60 m²', '24 m²', '13,5 m²'], a: 0, e: '8 × 2,50 = 20 m².' },
        { q: 'Même véhicule (8 × 2,50 × 3 m). Volume :', c: ['60 m³', '20 m³', '60 m²', '24 m³'], a: 0, e: '8 × 2,5 × 3 = 60 m³ (attention à l’unité).' },
        { q: '2 300 mètres = :', c: ['2,3 km', '23 km', '0,23 km', '230 km'], a: 0, e: '1 km = 1 000 m.' },
        { q: '3 heures 30 = :', c: ['210 min', '330 min', '180 min', '350 min'], a: 0, e: '3 × 60 + 30.' },
        { q: '300 secondes = :', c: ['5 min', '3 min', '30 min', '50 min'], a: 0, e: '300 ÷ 60.' },
        { q: '10 t 02 (10 tonnes et 20 kg) = :', c: ['10 020 kg', '10 200 kg', '1 002 kg', '10 002 kg'], a: 0, e: '10 000 + 20.' },
        { q: '9 680 kg = :', c: ['9,68 t', '96,8 t', '0,968 t', '968 t'], a: 0, e: '÷ 1 000.' },
        { q: '2 h 45 en minutes :', c: ['165', '145', '245', '175'], a: 0, e: '120 + 45.' },
        { q: '1 h 45 + 30 min + 3 h 30 + 55 min = :', c: ['6 h 40', '6 h 20', '7 h 00', '5 h 40'], a: 0, e: '4 h + 160 min.' },
        { q: '2 h 30 + 4 h 15 + 75 min + 1 h 25 = :', c: ['9 h 25', '8 h 45', '9 h 05', '10 h 25'], a: 0, e: '7 h + 145 min = 9 h 25.' },
        { q: '3 h 45 + 55 min + 33 min + 3 h 37 = :', c: ['8 h 50', '8 h 30', '9 h 10', '7 h 50'], a: 0, e: '6 h + 170 min.' },
        { q: 'Kilométrage au départ 215 687, à l’arrivée 216 008. Distance :', c: ['321 km', '421 km', '231 km', '1 321 km'], a: 0, e: '216 008 − 215 687.' },
        { q: 'Caisse de 9 m × 2,45 m. Surface utile :', c: ['22,05 m²', '22,5 m²', '20,05 m²', '11,45 m²'], a: 0, e: '9 × 2,45.' },
        { q: 'Tournée de 280 km à 47 km/h de moyenne. Durée de conduite estimée :', c: ['Environ 6 h (5 h 58)', 'Environ 5 h', 'Environ 7 h', 'Environ 4 h 30'], a: 0, e: '280 ÷ 47 = 5,96 h.' },
        { q: '4 h 30 en minutes :', c: ['270', '250', '430', '300'], a: 0, e: '4 × 60 + 30.' }
      ]
    }
  ],

  /* Épreuves finales : mélangent toutes les leçons disponibles. seed = tirage fixe ; n = nombre de questions ; min = minutes. */
  exams: [
    { id: 'e1', seed: 101, n: 30, min: 30, title: 'Épreuve finale n° 1' },
    { id: 'e2', seed: 202, n: 30, min: 30, title: 'Épreuve finale n° 2' },
    { id: 'e3', seed: 303, n: 30, min: 30, title: 'Épreuve finale n° 3' },
    { id: 'e4', seed: 404, n: 40, min: 40, title: 'Épreuve finale n° 4' },
    { id: 'e5', seed: 505, n: 40, min: 40, title: 'Épreuve finale n° 5' },
    { id: 'e6', seed: 606, n: 60, min: 60, title: 'Épreuve finale n° 6 · format examen (60 questions)' }
  ],

  sources: `<ul style="margin:0;padding-left:20px;font-size:.9rem">
<li><b>Photos de cours et d’exercices</b> (95 photos) : ECF « Conducteur routier sur porteur » (exercice d’application n° 4, évaluation de synthèse C2a, évaluation théorique supplément permis C, tronc commun), fiches « Respect de la réglementation » et « La RSE », évaluation RSE, évaluation ticket de chronotachygraphe, QCM 561/2006 (30 questions), quiz Kahoot (38 questions). Transcriptions dans le dossier <code>sources/transcriptions</code>.</li>
<li><b>Vérifications</b> : règlement (CE) 561/2006 et règlement (UE) 165/2014 (<a href="https://eur-lex.europa.eu/FR/legal-content/summary/driving-time-and-rest-periods-in-the-road-transport-sector.html" target="_blank" rel="noopener">EUR-Lex</a>), code des transports et code de la route (Légifrance), fiches DREAL / ministère (carte mémo temps de conduite 2026, documents de contrôle 2025), <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000018008166" target="_blank" rel="noopener">arrêté du 3 janvier 2008</a> (programme FIMO, examen final : QCM de 60 questions, admis à 36).</li>
<li>Les réponses erronées de l’élève sur ses évaluations sont signalées dans les explications des questions. Aucune question n’est une question officielle d’examen.</li></ul>`
};
