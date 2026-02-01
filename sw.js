const CACHE_NAME = 'sovereign-v57';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install the Ghost Thread
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Intercept requests to use local cache (Against the Browser)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
