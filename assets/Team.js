/* =========================================================
   EQUIPO — logica de render
   Usa FOUNDERS y ADMINS (definidos en team-data.js)
   ========================================================= */

(function initTeam(){
  const foundersGrid = document.getElementById("foundersGrid");
  const adminsList = document.getElementById("adminsList");
  if(!foundersGrid && !adminsList) return;

  if(foundersGrid){
    foundersGrid.innerHTML = FOUNDERS.map(f => `
      <div class="founder-card">
        <div class="founder-card-inner">
          <p class="founder-rank">FOUNDER</p>
          <div class="founder-avatar">${f.initials}</div>
          <h3 class="founder-name">${f.name}</h3>
          <p class="founder-role">${f.role}</p>
          <p class="founder-desc">${f.desc}</p>
        </div>
      </div>
    `).join("");
  }

  if(adminsList){
    adminsList.innerHTML = ADMINS.map(a => `
      <div class="admin-row">
        <div class="admin-avatar">${a.initials}</div>
        <div>
          <div class="admin-name">${a.name}</div>
          <div class="admin-user">${a.user}</div>
        </div>
        <span class="admin-role">${a.role}</span>
      </div>
    `).join("");
  }
})();
