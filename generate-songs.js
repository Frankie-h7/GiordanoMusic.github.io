const fs = require('fs');
const path = require('path');

const musicDir = path.join(__dirname, 'music');
const outputFile = path.join(__dirname, 'songs.js');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

const songs = [];

walkDir(musicDir, filePath => {
  if (filePath.endsWith('.mp3')) {
    const relativePath = path.relative(__dirname, filePath).replace(/\\/g, '/');
    const fileName = path.basename(filePath, '.mp3');
    const parts = relativePath.split('/');
    const category = parts[1] || "Generale"; // es. "music/💔 Emo Rap & Sentimenti/brano.mp3" -> categoria = "💔 Emo Rap & Sentimenti"

    songs.push({
      title: fileName,
      artist: "Autore",
      category: category,
      file: `./${relativePath}`
    });
  }
});

const fileContent = `export const songs = ${JSON.stringify(songs, null, 2)};`;

fs.writeFileSync(outputFile, fileContent);
console.log(`✅ File 'songs.js' generato con ${songs.length} brani`);