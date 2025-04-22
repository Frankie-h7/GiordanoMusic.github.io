// Variabuli JavaScript per le Song
const songListEl = document.getElementById("song-list");
const audioEl = document.getElementById("audio");
const titleEl = document.getElementById("now-title");
const artistEl = document.getElementById("now-artist");
const progressBar = document.getElementById("progress-bar");

// Unisci tutte le playlist
const allSongs = [
  ...songs,                      // Dal vecchio songs.js
  ...(window.dripSongs || []),   // Da drip-songs.js
  ...(window.sferaSongs || []),  // Da sfera-songs.js
  ...(window.milanoSongs || []), // Da milano-songs.js
  ...(window.faunSongs || []),   // Da faun-songs.js
  ...(window.emoSongs || []),    // Da emo-songs.js
  ...(window.collabSongs || []), // Da collab-songs.js
  ...(window.shivaSongs || []),  // Da shiva-songs.js
];

let currentIndex = 0;
let filteredSongs = [...allSongs];  // Usa allSongs invece di songs

renderSongs(filteredSongs);

// Riproduzione infinita delle Playlist
audioEl.addEventListener("ended", () => {
  // Passa alla prossima canzone
  nextSong();
});

// ... [il tuo codice esistente: variabili, funzioni player, etc.] ...

/* ====================================================
   GESTIONE UTENTE (aggiungi QUESTA SEZIONE nel mezzo)
   ==================================================== */
// Elementi UI
// Gestione Profilo Utente
const userProfile = document.getElementById('userProfile');
const userOverlay = document.getElementById('userOverlay');
const profileForm = document.getElementById('profileForm');
const profileImage = document.getElementById('profileImage');
const usernameDisplay = document.getElementById('usernameDisplay');

// Carica dati utente
function loadUser() {
  const saved = JSON.parse(localStorage.getItem('userProfile')) || {
    username: "Guest",
    avatar: "img/default-profile.png"
  };
  profileImage.src = saved.avatar;
  usernameDisplay.textContent = saved.username;
  return saved;
}

let currentUser = loadUser();

// Apertura modale
userProfile.addEventListener('click', () => {
  userOverlay.classList.add('active');
  document.getElementById('inputUsername').value = currentUser.username;
  
  // Seleziona l'avatar corrente
  document.querySelectorAll('.avatar-option').forEach(img => {
    if (img.src.includes(currentUser.avatar.replace('img/', ''))) {
      img.classList.add('selected');
    }
  });
});

// Selezione avatar
document.querySelectorAll('.avatar-option').forEach(img => {
  img.addEventListener('click', function() {
    document.querySelectorAll('.avatar-option').forEach(i => i.classList.remove('selected'));
    this.classList.add('selected');
  });
});

// Salvataggio
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('inputUsername').value.trim() || "Guest";
  const selected = document.querySelector('.avatar-option.selected') || 
                   document.querySelector('.avatar-option');
  
  currentUser = {
    username: username,
    avatar: selected.src
  };
  
  localStorage.setItem('userProfile', JSON.stringify(currentUser));
  loadUser();
  userOverlay.classList.remove('active');
});

// Chiudi cliccando sull'overlay
userOverlay.addEventListener('click', (e) => {
  if (e.target === userOverlay) {
    userOverlay.classList.remove('active');
  }
});

/* ====================================================
   FINE SEZIONE UTENTE (prosegui con il tuo codice esistente)
   ==================================================== */

// ... [il resto del tuo codice: event listener, service worker, etc.] ...

window.addEventListener('load', () => {
  const offlineOverlay = document.getElementById('offline-overlay');

  // Funzione che controlla la connessione
  function checkConnection() {
    if (!navigator.onLine) {
      // Se l'utente è offline, mostra l'overlay
      offlineOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Blocca lo scorrimento della pagina
    } else {
      // Se l'utente è online, nascondi l'overlay
      offlineOverlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Rende di nuovo possibile lo scorrimento
    }
  }

  // Esegui subito il controllo della connessione quando la pagina è caricata
  checkConnection();

  // Aggiungi gli eventi per monitorare quando la connessione cambia
  window.addEventListener('offline', checkConnection); // Quando si va offline
  window.addEventListener('online', checkConnection);  // Quando si va online
});


// Barra di ricerca canzoni
const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  filteredSongs = allSongs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );
  renderSongs(filteredSongs);
});

// Volume fisso
audioEl.volume = 0.8;

// Carica brani
function renderSongs(list) {
  songListEl.innerHTML = "";
  list.forEach((song, index) => {
    const card = document.createElement("div");
    card.classList.add("song-card");
    card.innerHTML = `
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
    `;
    card.addEventListener("click", () => playSelected(index));
    songListEl.appendChild(card);
  });
}

function playSelected(index) {
  currentIndex = index;
  const song = filteredSongs[index];
  audioEl.src = song.file;
  audioEl.play();
  
  // mette ❚❚ dopo aver premuto una canzone
  document.getElementById("play-button").textContent = "❚❚·၊၊||၊|။|||| |";

  titleEl.textContent = song.title;
  artistEl.textContent = song.artist;
}

// 👉 Media Session API
function setupMediaSession(song) {
  if (!song || !('mediaSession' in navigator)) return;
  
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title || "Titolo sconosciuto",
      artist: song.artist || "Artista sconosciuto",
      album: song.category || "",
      artwork: [
        {
          src: song.artwork || "https://i.imgur.com/VNvhXcJ.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    });

    navigator.mediaSession.setActionHandler("play", () => audioEl.play());
    navigator.mediaSession.setActionHandler("pause", () => audioEl.pause());
    navigator.mediaSession.setActionHandler("nexttrack", nextSong);
    navigator.mediaSession.setActionHandler("previoustrack", prevSong);
  } catch (e) {
    console.error("Error setting up Media Session:", e);
  }
}

// Cambia il pulsante Play ▶︎ in Pausa ❚❚
function togglePlay() {
  const playButton = document.getElementById("play-button");
  if (audioEl.paused) {
    audioEl.play();
    playButton.textContent = "❚❚·၊၊||၊|။|||| |"; // cambia in pausa
  } else {
    audioEl.pause();
    playButton.textContent = "▶︎·၊၊||၊|။|||| |"; // cambia in play
  }
}

audioEl.addEventListener("ended", () => {
  const playButton = document.getElementById("play-button");
  playButton.textContent = "▶︎·၊၊||၊|။|||| |";
});

function nextSong() {
  currentIndex = (currentIndex + 1) % filteredSongs.length;
  playSelected(currentIndex);
}

function prevSong() {
  currentIndex = (currentIndex - 1 + filteredSongs.length) % filteredSongs.length;
  playSelected(currentIndex);
}

function filterCategory(category) {
  filteredSongs = allSongs.filter(song => song.category === category);
  renderSongs(filteredSongs);
  currentIndex = 0;
  resetNowPlaying();
}

function resetFilter() {
  filteredSongs = [...allSongs];
  renderSongs(filteredSongs);
  currentIndex = 0;
  resetNowPlaying();
}

function resetNowPlaying() {
  titleEl.textContent = "Nessun brano";
  artistEl.textContent = "";
  audioEl.pause();
  audioEl.src = "";
}

// 🎚️ Barra di avanzamento
audioEl.addEventListener("timeupdate", () => {
  progressBar.max = Math.floor(audioEl.duration);
  progressBar.value = Math.floor(audioEl.currentTime);
});

progressBar.addEventListener("input", () => {
  audioEl.currentTime = progressBar.value;
});

// Barra Menu
const toggleBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Verifica caricamento playlist
window.addEventListener('load', () => {
  if (!window.dripSongs) console.warn("drip-songs.js non caricato");
  if (!window.sferaSongs) console.warn("sfera-songs.js non caricato");
  
  // DEBUG: mostra tutte le canzoni caricate
  console.log("Canzoni totali caricate:", allSongs.length);
});

// Service Worker funzionante
// Registrazione Service Worker (versione migliorata)
const registerServiceWorker = async () => {
  try {
    const registration = await navigator.serviceWorker.register('/service-worker.js', {
      scope: '/',
      updateViaCache: 'none' // Importante per aggiornamenti immediati
    });
    
    console.log('✅ Service Worker registrato con scope:', registration.scope);

    // Controlla aggiornamenti
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'activated') {
          console.log('🔄 Nuova versione disponibile!');
          // Opzionale: Notifica l'utente per ricaricare
          if (confirm('Nuovo aggiornamento disponibile! Ricaricare ora?')) {
            window.location.reload();
          }
        }
      });
    });

  } catch (error) {
    console.error('❌ Registrazione fallita:', error);
  }
};

// Esegui solo se supportato
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', registerServiceWorker);
  
  // Controlla aggiornamenti ogni 24 ore
  setInterval(() => {
    navigator.serviceWorker.getRegistration()?.update();
  }, 86400000);
}