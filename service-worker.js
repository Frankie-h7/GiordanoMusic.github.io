// service-worker.js - Versione ottimizzata per GiordanoMusic
const CACHE_NAME = 'giordano-core-v6';
const AUDIO_CACHE_NAME = 'giordano-audio-v3';
const MAX_AUDIO_CACHE = 30; // Massimo 30 brani in cache

// File ESSENZIALI da cache subito
const CORE_ASSETS = [
  '/GiordanoMusic.github.io/',
  '/GiordanoMusic.github.io/index.html',
  '/GiordanoMusic.github.io/style.css',
  '/GiordanoMusic.github.io/script.js',
  '/GiordanoMusic.github.io/manifest.json',
  '/GiordanoMusic.github.io/version-checker.js',
  '/GiordanoMusic.github.io/GiordanoMusic.ico',
  '/GiordanoMusic.github.io/GiordanoMusic192.png',
  '/GiordanoMusic.github.io/GiordanoMusic512.png'
];

// INSTALLAZIONE (cache dei file essenziali)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ATTIVAZIONE (pulizia cache vecchie)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME && key !== AUDIO_CACHE_NAME) {
          return caches.delete(key);
        }
      })
    )).then(() => self.clients.claim())
  );
});

// GESTIONE RICHIESTE
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. Ignora version.json
  if (url.pathname.endsWith('version.json')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // 2. Gestione AUDIO (GitHub raw o locali)
  if (url.pathname.includes('/music/') || url.href.includes('github.com/raw')) {
    event.respondWith(
      handleAudioRequest(event.request)
    );
    return;
  }

  // 3. Default: cache-first per altri assets
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});

// STRATEGIA PER L'AUDIO
async function handleAudioRequest(request) {
  const cache = await caches.open(AUDIO_CACHE_NAME);
  const cached = await cache.match(request);

  // Se già in cache, ritorna quella
  if (cached) return cached;

  try {
    // Streaming + cache in background
    const response = await fetch(request);
    
    // Salva in cache DOPO la riproduzione (se <15MB)
    const contentLength = response.headers.get('content-length');
    if (contentLength && parseInt(contentLength) < 15_000_000) {
      const clone = response.clone();
      event.waitUntil(
        cache.put(request, clone).then(() => cleanAudioCache(cache))
      );
    }
    
    return response;
  } catch (err) {
    return new Response(JSON.stringify({ error: "Audio non disponibile" }), {
      status: 408,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// PULIZIA CACHE AUDIO
async function cleanAudioCache(cache) {
  const keys = await cache.keys();
  if (keys.length > MAX_AUDIO_CACHE) {
    await cache.delete(keys[0]); // Rimuove il più vecchio
  }
}

// PRECARICA BRANI PREFERITI (chiamato da script.js)
self.addEventListener('message', (event) => {
  if (event.data.action === 'precache-audio') {
    caches.open(AUDIO_CACHE_NAME).then(cache => {
      fetch(event.data.url).then(response => {
        if (response.ok) cache.put(event.data.url, response);
      });
    });
  }
});