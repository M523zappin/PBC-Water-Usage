const CACHE_NAME = 'gemini-v21-final';

self.addEventListener('install', (e) => {
    self.skipWaiting(); 
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // ALWAYS go to network first to ensure it's NOT repeating old data
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
