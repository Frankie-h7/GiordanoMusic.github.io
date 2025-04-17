self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('giordanomusic-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/script.js',
          '/manifest.json',
          '/GiordanoMusic.png',
          // Aggiungi anche tutti gli altri file che devono essere disponibili offline
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });  