# Révision FIMO Marchandises

Application web gratuite de révision pour la FIMO marchandises. HTML/CSS/JS pur, sans dépendance, pensée pour le téléphone, installable (PWA) et utilisable hors ligne.

## Fonctionnement

1. **Écran d'accueil** : prénom + « Commencer (mode invité) ». Les boutons Google / Facebook seront actifs après configuration Firebase (voir plus bas).
2. **Leçons** : une liste, chaque leçon se termine par **son épreuve chronométrée** (45 s par question, minuteur visible, correction automatique à la fin du temps, correction détaillée, possibilité de refaire).
3. **Épreuves finales** : 6 examens blancs chronométrés qui mélangent toutes les leçons (3 × 30 questions, 2 × 40, 1 × 60 au format officiel). Seuil 60 % comme l'examen (36/60).
4. **📊** : progression, remise à zéro, changement d'utilisateur. Tout est sauvegardé dans le navigateur (localStorage).

Le contenu actuel vient uniquement des photos de cours de la 1re semaine (7 leçons, 153 questions). Internet n'a servi qu'à vérifier.

## Ajouter des leçons (photos des semaines suivantes)

Tout le contenu est dans `data.js`. Copier un bloc de leçon `{ id, title, summary, sources, content, quiz }` à la fin du tableau `lessons` avec un nouvel `id` (`l8`, `l9`...). Les épreuves finales piochent automatiquement dans toutes les leçons. Pour que les téléphones rechargent le nouveau contenu, changer `VERSION` dans `sw.js` (ex. `fimo-v3`).

Format d'une question : `{ q: 'énoncé', c: ['bonne réponse', 'autre', 'autre', 'autre'], a: 0, e: 'explication' }` (`a` = position de la bonne réponse, 0 = la première ; l'ordre est mélangé à l'affichage).

## Fichiers

- `index.html`, `style.css`, `app.js` : l'appli. `data.js` : le contenu.
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` : installation sur Android et mode hors ligne.
- `maquette.html` : maquette cliquable des écrans (pour validation, pas nécessaire à l'appli).
- `sources/` : photos extraites et transcriptions. **Ne pas mettre en ligne** (documents personnels).

## En ligne

- **Adresse principale : https://fimo-revision.netlify.app** (Netlify, projet `fimo-revision`, équipe hajer-bensalem-2016, déploiement automatique à chaque push sur `main` du dépôt GitHub `hajerbensalem2016/fimo-app`).
- Adresse secondaire : https://hajerbensalem2016.github.io/fimo-app/ (GitHub Pages, même dépôt).

## Mettre en ligne gratuitement (3 façons)

**Netlify Drop (le plus simple)** : aller sur https://app.netlify.com/drop, glisser le dossier `fimo-app` (sans `sources/`). Une adresse `https://xxx.netlify.app` est donnée tout de suite.

**GitHub Pages** : créer un dépôt public `fimo-app`, y envoyer les fichiers (sans `sources/`), puis Settings → Pages → Branch `main` / root → Save. Adresse : `https://<pseudo>.github.io/fimo-app/`.

**Vercel** : https://vercel.com/new, importer le dossier ou le dépôt GitHub.

## Installer sur Android (comme une vraie appli)

1. Ouvrir l'adresse de l'appli dans **Chrome** sur le téléphone.
2. Menu ⋮ → **« Ajouter à l'écran d'accueil »** (ou « Installer l'application »).
3. L'icône 🚛 FIMO apparaît sur l'écran d'accueil ; elle s'ouvre en plein écran et **fonctionne sans internet** après la première ouverture.

Remarque : le mode hors ligne (service worker) nécessite une adresse en `https://` (c'est le cas sur Netlify, GitHub Pages et Vercel), pas en `file://`.

## Connexion Google / Facebook (en place)

Projet Firebase `fimo-app` (id `fimo-app-92a9e`, compte Google de Hajer) : Authentication avec le fournisseur **Google** activé, domaine autorisé `hajerbensalem2016.github.io`, base **Firestore** (région Europe) avec la règle « chaque utilisateur connecté lit et écrit uniquement `users/{son uid}` ». La configuration publique est dans `firebase-config.js`.

- La connexion est **obligatoire** (plus de mode invité). La progression est enregistrée dans Firestore et retrouvée sur tous les appareils, avec copie locale (localStorage) pour le hors-ligne.
- **Facebook** : le bouton existe mais le fournisseur n'est pas encore activé (il faut créer une appli sur https://developers.facebook.com, puis coller l'App ID et l'App secret dans Firebase → Authentication → Sign-in method → Facebook, et ajouter l'URL de redirection donnée par Firebase dans l'appli Facebook). En attendant, le bouton affiche un message et renvoie vers Google.
- Console : https://console.firebase.google.com/project/fimo-app-92a9e (onglet Authentication → Users pour voir les comptes connectés).
