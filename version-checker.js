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
  
  // Funzione che controlla se ci sono aggiornamenti
  function checkForUpdate() {
    fetch('/version.json?t=' + Date.now()) // Aggiungi timestamp per evitare cache
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        const currentVersion = localStorage.getItem('appVersion');
        const latestVersion = data.version;
        
        if (!currentVersion || compareVersions(currentVersion, latestVersion) < 0) {
          showUpdatePopup(latestVersion);
        }
      })
      .catch(err => {
        console.error('Errore nel controllo versione:', err);
        // Potresti mostrare un messaggio all'utente o ritentare più tardi
      });
  }
  
  // Funzione per mostrare il popup dell'aggiornamento
  function showUpdatePopup(latestVersion) {
    const popup = document.createElement('div');
    popup.classList.add('update-popup');
    popup.innerHTML = `
      <div class="popup-content">
        <button class="close-popup" aria-label="Chiudi">×</button>
        <h2>Aggiornamento Disponibile!</h2>
        <p>È disponibile la versione <strong>${latestVersion}</strong> con nuove funzionalità e miglioramenti.</p>
        <button id="updateButton">Installa Ora</button>
        <p class="update-info">Chiudi e riapri l'app per applicare l'aggiornamento.</p>
      </div>
    `;
    document.body.appendChild(popup);
  
    // Chiudi popup con la X
    popup.querySelector('.close-popup').addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  
    // Bottone aggiorna
    document.getElementById('updateButton').addEventListener('click', () => {
      localStorage.setItem('appVersion', latestVersion);
      window.location.href = window.location.href.split('?')[0] + '?v=' + Date.now();
    });
  }
  
  // Controlla la versione al caricamento della pagina
  window.addEventListener('load', () => {
    // Prima controlla se c'è una versione nel localStorage
    const currentVersion = localStorage.getItem('appVersion');
    
    if (!currentVersion) {
      // Se non c'è, ottieni la versione corrente dal server e salvala
      fetch('/version.json')
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('appVersion', data.version);
        })
        .catch(console.error);
    }
    
    // Controlla gli aggiornamenti
    checkForUpdate();
    
    // Opzionale: controlla gli aggiornamenti periodicamente
    setInterval(checkForUpdate, 12 * 60 * 60 * 1000); // Ogni 12 ore
  });