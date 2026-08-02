/* =========================================================
   EQUIPO — logica de render
   Usa FOUNDERS_GROUP y ADMINS_GROUP (definidos en team-data.js)
   ========================================================= */

(function initTeam(){
  const grid = document.getElementById("teamGrid");
  if(!grid) return;

  const groups = [FOUNDERS_GROUP, ADMINS_GROUP];

  grid.innerHTML = groups.map((g, i) => `
    <div class="cover-card" data-i="${i}">
      <div class="cover-card-img" style="background-image:url('${g.cover}')"></div>
      <div class="cover-card-body">
        <span class="cover-card-tag">${g === FOUNDERS_GROUP ? "&#9819; " : "&#128101; "}${g.title}</span>
        <p class="cover-card-desc">${g.desc}</p>
        <span class="cover-card-btn">Ver mas &rarr;</span>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".cover-card").forEach(card => {
    card.addEventListener("click", () => {
      const g = groups[+card.dataset.i];
      openDetailModal({
        image: g.cover,
        title: g.title,
        desc: g.desc,
        members: g.members
      });
    });
  });
})();
