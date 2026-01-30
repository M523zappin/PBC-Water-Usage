const VERSION = 'v21-athena-ghost';

self.addEventListener('install', (e) => {
    self.skipWaiting(); // Forces the new code to take over immediately
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim()); // Take control of the app immediately
    e.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => caches.delete(key)) // Wipe the 14-node memory
        ))
    );
});

// Network-First Logic: Always check the 21-node grid first
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});
