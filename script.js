const songs = [
  {
    title: "Oh Cacchio",
    artist: "Leon Faun",
    category: "Leon Faun",
    file: "music/leonfaun/oh_cacchio.mp3"
  },
  {
    title: "Relax",
    artist: "Nature Sound",
    category: "Rilassante",
    file: "music/rilassante/onde.mp3"
  },
  {
    title: "Sfera Ebbasta",
    artist: "Sfera Ebbasta",
    category: "Sfera Ebbasta",
    file: "music/sferaebbasta/sfera1.mp3"
  },
  {
    title: "Canzone Random",
    artist: "Artista Random",
    category: "Random",
    file: "music/random/random1.mp3"
  }
];

const songListEl = document.getElementById("song-list");
const audioEl = document.getElementById("audio");
const titleEl = document.getElementById("now-title");
const artistEl = document.getElementById("now-artist");
const progressBar = document.getElementById("progress-bar");

let currentIndex = 0;
let filteredSongs = [...songs];

renderSongs(filteredSongs);

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