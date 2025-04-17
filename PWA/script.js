const songs = [
  { // Playlist di Leon Faun quella base
    title: "HORIA",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "https://raw.githubusercontent.com/Frankie-h7/GiordanoMusic.github.io/main/music/leonfaun/Leon%20Faun%20%20-%20HORIA%20(prod.%20Duffy).mp3"
  },
  {
    title: "Anima",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "https://raw.githubusercontent.com/Frankie-h7/GiordanoMusic.github.io/refs/heads/main/music/leonfaun/Leon%20Faun%20-%20Anima.mp3"
  },
  {
    title: "C'era una volta",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - C'era una volta (Prod. Duffy).mp3"
  },
  {
    title: "CIOCCORANE",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - CIOCCORANE (prod. Duffy).mp3"
  },
  {
    title: "Funerale Mio",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - Funerale Mio (prod. Duffy).mp3"
  },
  {
    title: "Gaia",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - Gaia (prod. Duffy).mp3"
  },
  {
    title: "La follia non ha età",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - La follia non ha età (Prod. Duffy).mp3"
  },
  {
    title: "Occhi Lucidi",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - Occhi Lucidi (prod. Duffy).mp3"
  },
  {
    title: "OH CACCHIO",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - OH CACCHIO (prod. Duffy).mp3"
  },
  {
    title: "Pioggia",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - Pioggia (Prod. Duffy).mp3"
  },
  
];

const songListEl = document.getElementById("song-list");
const audioEl = document.getElementById("audio");
const titleEl = document.getElementById("now-title");
const artistEl = document.getElementById("now-artist");
const progressBar = document.getElementById("progress-bar");

let currentIndex = 0;
let filteredSongs = [...songs];

renderSongs(filteredSongs);

audioEl.addEventListener("ended", () => {
  // Passa alla prossima canzone
  nextSong();
});

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
  filteredSongs = songs.filter(song =>
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
  filteredSongs = songs.filter(song => song.category === category);
  renderSongs(filteredSongs);
  currentIndex = 0;
  resetNowPlaying();
}

function resetFilter() {
  filteredSongs = [...songs];
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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker registrato con successo:', registration);
    }).catch((error) => {
      console.log('Registrazione Service Worker fallita:', error);
    });
  });
  
}
