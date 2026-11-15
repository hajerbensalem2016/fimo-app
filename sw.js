/* Service worker : met tous les fichiers en cache pour fonctionner hors ligne.
   Quand tu modifies l'appli (nouvelles leçons), change le numéro de VERSION pour que les téléphones rechargent le nouveau contenu. */
const VERSION = 'fimo-v9';
const FILES = ['./', './index.html', './style.css', './app.js', './data.js', './data.en.js', './manifest.json', './firebase-config.js', './icon-192.png', './icon-512.png', './confidentialite.html'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Réseau d'abord (pour avoir les mises à jour), cache en secours (hors ligne)
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html')))
  );
});
