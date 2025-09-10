const CACHE_NAME = "kettlebell-v1";
const urlsToCache = [
  "./",
  "index.html",
  "css/styles.css",
  "js/script.js",
  "favicon.ico",
  "manifest.json",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-192-maskable.png",
  "icons/icon-512.png",
  "icons/icon-512-maskable.png",
  "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.violet.min.css",
];

// Install event: Cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch((error) => {
        console.error("Cache addAll failed:", error);
      });
    })
  );
});

// Activate event: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: Serve from cache if offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
