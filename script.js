const songs = [
  { // Playlist di Leon Faun quella base
    title: "HORIA",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun  - HORIA (prod. Duffy).mp3"
  },
  {
    title: "Anima",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - Anima.mp3"
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
  {
    title: "Profezia",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - Profezia (Visual).mp3"
  },
  {
    title: "TABOO",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - TABOO (prod. Duffy).mp3"
  },
  {
    title: "Vestito Male",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun - Vestito Male (prod. Duffy).mp3"
  },
  {
    title: "Alla Luna",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy - Alla Luna (Visual).mp3"
  },
  {
    title: "C'era una volta",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy - C'era una volta (Visual).mp3"
  },
  {
    title: "Camelot",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy - Camelot (Visual).mp3"
  },
  {
    title: "Come",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy - Come (Visual).mp3"
  },
  {
    title: "Freddie Vibes",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy - Freddie Vibes (Visual).mp3"
  },
  {
    title: "Occhi Lucidi",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy - Occhi Lucidi (Visual).mp3"
  },
  {
    title: "OMG",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy - OMG (freestyle) (Visual).mp3"
  },
  {
    title: "Ricordi Bui",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy - Ricordi Bui (Visual).mp3"
  },
  {
    title: "La follia non ... RMX",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy, Dani Faiv - La follia non ha età RMX (Visual).mp3"
  },
  {
    title: "Le mie note",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy, Ernia - Le mie note (Visual).mp3"
  },
  {
    title: "Poi Poi Poi",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Leon Faun, Duffy, Madame - Poi Poi Poi (Visual).mp3"
  },
  { // Nuovo album di Leon Faun
    title: "Posa il mic",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/3D & Leon Faun - Posa il mic (Lyrics).mp3"
  },
  {
    title: "ANIMUS",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - ANIMUS (prod. Duffy)   NEW CHALLENGERS.mp3"
  },
  {
    title: "Arte e Libertà",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - Arte e Libertà.mp3"
  },
  {
    title: "Eterno",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - Eterno.mp3"
  },
  {
    title: "Fuga Da Genova",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - Fuga Da Genova.mp3"
  },
  {
    title: "In Down",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - In Down.mp3"
  },
  {
    title: "Invincibili",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - Invincibili.mp3"
  },
  {
    title: "Meteorite",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - Meteorite.mp3"
  },
  {
    title: "Non Dubitar Di Me",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - Non Dubitar Di Me.mp3"
  },
  {
    title: "Pe Na Vita",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - Pe Na Vita.mp3"
  },
  {
    title: "Ragazzo Normale",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - Ragazzo Normale.mp3"
  },
  {
    title: "Vibes Nel Fight",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/Nuovo Album/Leon Faun - Vibes Nel Fight.mp3"
  },



  
  { // Playlist Rilassante - Relaxing Sound
    title: "4 Beautiful Sou...",
    artist: "Relaxing Piano",
    category: "Rilassante",
    file: "music/rilassante/4 Beautiful Soundtracks   Relaxing Piano [10min].mp3"
  },
  {
    title: "Musica pianoforte",
    artist: "Relaxing Piano",
    category: "Rilassante",
    file: "music/rilassante/Musica pianoforte, musica di sottofondo dolce e rilassante.mp3"
  },
  {
    title: "ADHD",
    artist: "Silent Child",
    category: "Rilassante",
    file: "music/rilassante/Silent Child - ADHD (Lyric Video).mp4"
  },
  {
    title: "F**k You",
    artist: "Silent Child",
    category: "Rilassante",
    file: "music/rilassante/Silent Child - F k You (Lyric Video).mp4"
  },
  {
    title: "Calm Relax Study...",
    artist: "睡眠平靜舒緩",
    category: "Rilassante",
    file: "music/rilassante/睡眠平靜舒緩.mp3"
  },




  { // Playlist di Sfera Ebbasta il Trapking italiano
    title: "dedica a CICCIO",
    artist: "Nervy",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Nervy - CENERE ma è una dedica a CICCIOGAMER.mp3"
  },
  {
    title: "Bang Bang",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Sfera Ebbasta - Bang Bang (Prod. Charlie Charles, Chris Nolan).mp3"
  },
  {
    title: "Cupido",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Sfera Ebbasta - Cupido (Visual) ft. Quavo.mp3"
  },
  {
    title: "Figli Di Papà",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Sfera Ebbasta - Figli Di Papà (Prod. Charlie Charles).mp3"
  },
  {
    title: "Notti",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Sfera Ebbasta - Notti (Prod. Charlie Charles).mp3"
  },
  {
    title: "Ricchi X Sempre",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Sfera Ebbasta - Ricchi X Sempre (Visual).mp3"
  },
  {
    title: "Rockstar",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Sfera Ebbasta - Rockstar (Visual).mp3"
  },
  {
    title: "Tran Tran",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Sfera Ebbasta - Tran Tran (Prod. Charlie Charles).mp3"
  },
  {
    title: "Uber",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Sfera Ebbasta - Uber (Visual).mp3"
  },
  {
    title: "Rvssian",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/Sfera Ebbasta, Rvssian - Mamma Mia.mp3"
  },




  {
    title: "48H",
    artist: "IZI",
    category: "Random",
    file: "music/random/48H.mp3"
  },
  {
    title: "90MIN",
    artist: "Salmo",
    category: "Random",
    file: "music/random/90MIN.mp3"
  },
  {
    title: "Abracadabra",
    artist: "Ghali",
    category: "Random",
    file: "music/random/Abracadabra.mp3"
  },
  {
    title: "Lazza - BBE",
    artist: "ANNA, Lazza",
    category: "Random",
    file: "music/random/ANNA, Lazza - BBE.mp3"
  },
  {
    title: "MIRAGE",
    artist: "AriBeatz, Ozuna",
    category: "Random",
    file: "music/random/AriBeatz, Ozuna, Sfera Ebbasta, GIMS - MIRAGE (Official Animation Video).mp3"
  },
  {
    title: "AVA",
    artist: "Holly & Benji",
    category: "Random",
    file: "music/random/AVA - Holly & Benji (feat. Capo Plaza & Shiva).mp3"
  },
  {
    title: "Cella 4",
    artist: "Baby Gang",
    category: "Random",
    file: "music/random/Baby Gang - Cella 4 [Official Video].mp3"
  },
  {
    title: "Madame feat. Sf",
    artist: "Baby Gang",
    category: "Random",
    file: "music/random/Baby Gang - Madame feat. Sfera Ebbasta (Official Lyric Video).mp3"
  },
  {
    title: "Rassi feat. El",
    artist: "Baby Gang",
    category: "Random",
    file: "music/random/Baby Gang - Rassi feat. ElGrandeToto (Official Video).mp3"
  },
  {
    title: "Mentalité",
    artist: "Nn",
    category: "Random",
    file: "music/random/Baby Gang – Mentalité [Official Video].mp3"
  },
  {
    title: "MILANO",
    artist: "BIA, Sfera",
    category: "Random",
    file: "music/random/BIA, Sfera Ebbasta, Fivio Foreign - MILANO (Official Music Video).mp3"
  },
  {
    title: "MI FAI IMPAZZIRE",
    artist: "BLANCO, Sfera",
    category: "Random",
    file: "music/random/BLANCO, Sfera Ebbasta - MI FAI IMPAZZIRE.mp3"
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

// Blocca per **tutto tranne mobile**
window.addEventListener('load', () => {
  if (window.innerWidth > 768) {
    document.getElementById('desktop-overlay').style.display = 'flex';
  } else {
     // Schermo ok: sblocca (opzionale)
  document.getElementById('desktop-overlay').style.display = 'none';
  console.log("Accesso da dispositivo mobile");
  }
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

// Casella suggerimenti
function submitSuggestion() {
  const suggestion = document.getElementById("suggestion-box").value.trim();
  if (suggestion === "") {
    alert("Scrivi qualcosa prima di inviare 😉");
    return;
  }

  // Per ora mostriamo un messaggio
  alert("Grazie per il suggerimento!\n" + suggestion);

  // Puoi salvare su file, database o email (serve backend)
  document.getElementById("suggestion-box").value = "";
}


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

const toggleBtn = document.getElementById("toggle-menu");
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
