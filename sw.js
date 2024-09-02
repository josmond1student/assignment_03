const cacheName = 'v1';

const cacheAssets = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/rhymes.json',
  '/icon.png'
];

// call install event
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// call activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  // remove unwanted caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            // delete old caches
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// call fetch event
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching');
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});