// Offline cache: app shell + data are cached on first visit; stroke shards are cached as they are used.
const CACHE = 'sotu-hsk-v5';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'words.json', 'chars.json', 'extra.json', 'examples.json',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/favicon-32.png', 'icons/apple-touch-icon.png', 'apple-touch-icon.png', 'favicon.ico', 'icons/favicon-16.png', 'icons/maskable-192.png', 'icons/maskable-512.png', 'icons/icon.svg','screenshots/phone.png',
  'fonts/ukai-hsk.woff2', 'fonts/wenkai-fill.woff2', 'fonts/be-vietnam-pro-vietnamese-400-normal.woff2', 'fonts/be-vietnam-pro-latin-400-normal.woff2', 'fonts/be-vietnam-pro-vietnamese-600-normal.woff2', 'fonts/be-vietnam-pro-latin-600-normal.woff2', 'fonts/bvp-pinyin-400.woff2', 'fonts/bvp-pinyin-600.woff2'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  if (sameOrigin && (req.mode === 'navigate' || url.pathname.endsWith('.html'))) {
    // page: network first so updates show up, cache as fallback offline
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; }).catch(() => caches.match(req).then(r => r || caches.match('./'))));
    return;
  }
  if (sameOrigin || /fonts\.(googleapis|gstatic)\.com|cdn\.jsdelivr\.net/.test(url.host)) {
    // data, strokes, icons, fonts, hanzi-writer: stale-while-revalidate
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
  }
});
