/* =========================================================
   ALIANZAS — logica de render
   Usa ALLIANCES (definido en alliances-data.js)
   ========================================================= */

(function initAlliances(){
  const grid = document.getElementById("alliancesGrid");
  if(!grid) return;

  grid.innerHTML = ALLIANCES.map((a, i) => `
    <div class="simple-card" data-i="${i}">
      <div class="simple-card-img" style="background-image:url('${a.logo}')"></div>
      <div class="simple-card-body">
        <div class="simple-card-name">${a.name}</div>
        <div class="simple-card-meta">${a.members}</div>
        <span class="simple-card-btn">Ver perfil &rarr;</span>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".simple-card").forEach(card => {
    card.addEventListener("click", () => {
      const a = ALLIANCES[+card.dataset.i];
      openDetailModal({
        image: a.logo,
        title: a.name,
        meta: a.members,
        desc: a.desc
      });
    });
  });
})();
