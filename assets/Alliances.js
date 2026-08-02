/* =========================================================
   ALIANZAS — logica de render
   Usa ALLIANCES (definido en alliances-data.js)
   ========================================================= */

(function initAlliances(){
  const grid = document.getElementById("alliancesGrid");
  if(!grid) return;

  grid.innerHTML = ALLIANCES.map(a => `
    <div class="alliance-card">
      <div class="alliance-logo">${a.initials}</div>
      <div>
        <div class="alliance-name">${a.name}</div>
        <div class="alliance-meta">${a.members}</div>
      </div>
      <span class="alliance-tag">Alianza VIP</span>
    </div>
  `).join("");
})();
