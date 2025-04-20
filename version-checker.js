// version-checker.js - Aggiornato per GitHub Pages
// Funzione per confrontare versioni semantiche (es. "1.2.3" > "1.10.0" => false)
function compareVersions(a, b) {
  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);
  
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const partA = partsA[i] || 0;
    const partB = partsB[i] || 0;
    if (partA > partB) return 1;
    if (partA < partB) return -1;
  }
  return 0;
}

// Funzione migliorata per il controllo aggiornamenti
function checkForUpdate() {
  console.log('[Version Checker] Controllo aggiornamenti...');
  
  // Usa percorso relativo per GitHub Pages e bypassa la cache
  fetch('./version.json?t=' + Date.now())
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const currentVersion = localStorage.getItem('appVersion') || "1.0.0";
      const latestVersion = data.version;
      
      console.log(`[Version Checker] Versione corrente: ${currentVersion}, ultima versione: ${latestVersion}`);
      
      if (compareVersions(currentVersion, latestVersion) < 0) {
        console.log('[Version Checker] Nuova versione disponibile!');
        showUpdatePopup(latestVersion);
      } else {
        console.log('[Version Checker] L'app è aggiornata');
      }
    })
    .catch(err => {
      console.error('[Version Checker] Errore nel controllo versione:', err);
    });
}

// Funzione per mostrare il popup (migliorata)
function showUpdatePopup(latestVersion) {
  // Crea elementi DOM invece di usare innerHTML per migliorare la sicurezza
  const popup = document.createElement('div');
  popup.className = 'update-popup';
  
  const content = document.createElement('div');
  content.className = 'popup-content';
  
  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-popup';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Chiudi');
  
  const title = document.createElement('h2');
  title.textContent = 'Aggiornamento Disponibile!';
  
  const message = document.createElement('p');
  message.innerHTML = `È disponibile la versione <strong>${latestVersion}</strong> con nuove funzionalità e miglioramenti.`;
  
  const updateBtn = document.createElement('button');
  updateBtn.id = 'updateButton';
  updateBtn.textContent = 'Installa Ora';
  
  const info = document.createElement('p');
  info.className = 'update-info';
  info.textContent = 'Chiudi e riapri l\'app per applicare l\'aggiornamento.';
  
  // Costruisci la struttura
  content.append(closeBtn, title, message, updateBtn, info);
  popup.appendChild(content);
  document.body.appendChild(popup);
  
  // Gestori eventi
  closeBtn.addEventListener('click', () => popup.remove());
  
  updateBtn.addEventListener('click', () => {
    localStorage.setItem('appVersion', latestVersion);
    window.location.reload(true); // Forza reload bypassando la cache
  });
}

// Controlla la versione al caricamento (con ritardo per evitare conflitti)
window.addEventListener('load', () => {
  setTimeout(() => {
    // Imposta la versione corrente se non esiste
    if (!localStorage.getItem('appVersion')) {
      fetch('./version.json')
        .then(r => r.json())
        .then(data => {
          localStorage.setItem('appVersion', data.version);
          console.log(`[Version Checker] Versione iniziale impostata a: ${data.version}`);
        })
        .catch(console.error);
    }
    
    checkForUpdate();
  }, 1000); // Ritardo per evitare conflitti con altri script
});

// Controllo periodico ogni 12 ore (opzionale)
setInterval(checkForUpdate, 12 * 60 * 60 * 1000);