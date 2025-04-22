const CACHE_NAME = 'giordanomusic-cache-v1';  // Aggiungi un suffisso di versione
const ASSETS = [
          '/GiordanoMusic.github.io/',
          '/GiordanoMusic.github.io/index.html',
          '/GiordanoMusic.github.io/style.css',
          '/GiordanoMusic.github.io/script.js',
          '/GiordanoMusic.github.io/songs.js',
          // ... altri file ...
          '/GiordanoMusic.github.io/songs/drip-songs.js',
          '/GiordanoMusic.github.io/songs/sfera-songs.js',
          '/GiordanoMusic.github.io/songs/milano-songs.js',
          '/GiordanoMusic.github.io/songs/faun-songs.js',
          '/GiordanoMusic.github.io/songs/emo-songs.js',
          '/GiordanoMusic.github.io/songs/collab-songs.js',
          '/GiordanoMusic.github.io/songs/shiva-songs.js',
          // ... altri file ...
          '/GiordanoMusic.github.io/version-checker.js',  // Controllo Versione, al momento: 1.0.1
          '/GiordanoMusic.github.io/manifest.json',
          '/GiordanoMusic.github.io/GiordanoMusic512.png',
          '/GiordanoMusic.github.io/GiordanoMusic192.png',
          '/GiordanoMusic.github.io/music/GiordanoMusic.ico', // Percorso corretto per l'icona
          // Aggiungi anche tutti gli altri file che devono essere disponibili offline
        ];

        // Installa la cache
        self.addEventListener('install', (event) => {
          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
          );
        });
        
        // Pulizia cache vecchie
        self.addEventListener('activate', (event) => {
          event.waitUntil(
            caches.keys().then((keys) => {
              return Promise.all(
                keys.map((key) => {
                  if (key !== CACHE_NAME) return caches.delete(key);  // Cancella cache obsolete
                })
              );
            })
          );
        });
        
        // Fetch con eccezione per version.json
        self.addEventListener('fetch', (event) => {
          const url = new URL(event.request.url);
          
          // Escludi version.json dalla cache (aggiornamento in tempo reale)
          if (url.pathname.endsWith('version.json')) {
            event.respondWith(fetch(event.request));  // Solo rete
            return;
          }
        
          // Per altri file: Cache-first
          event.respondWith(
            caches.match(event.request).then((response) => {
              return response || fetch(event.request);
            })
          );
        });        