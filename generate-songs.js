const fs = require('fs');
const path = require('path');

const musicDir = path.join(__dirname, 'music');
const outputFile = path.join(__dirname, 'songs.js');

const files = fs.readdirSync(musicDir).filter(file => file.endsWith('.mp3'));

const songs = files.map(file => ({
  title: path.basename(file, '.mp3'),
  artist: 'Autore', // puoi personalizzare se leggi da tag o nome file
  category: 'Generale', // oppure categorizza per sottocartelle, se vuoi
  file: `music/${file}`
}));

const content = `// Questo file è generato automaticamente
export const songs = ${JSON.stringify(songs, null, 2)};
`;

fs.writeFileSync(outputFile, content);

console.log(`✅ songs.js generato con ${songs.length} brani.`);