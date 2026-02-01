const CACHE_NAME = 'nexus-ghost-v66';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// INSTALL: Force the app into the phone's physical memory
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// FETCH: Intercept all requests and serve from Local Cache (No Wifi Needed)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
