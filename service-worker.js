self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll([
        "/helllooo/index.html",
        "/helllooo/",
        "/helllooo/styles.css",  // CSS dosyan varsa ekle
        "/helllooo/app.js",      // JS dosyan varsa ekle
        "/helllooo/icon-192x192.png",
        "/helllooo/icon-512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match("/helllooo/index.html");
    })
  );
});
