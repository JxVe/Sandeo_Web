/* =========================================================
   ZONA DJ — logica
   Usa los datos de DJ_CATEGORIES (definidos en dj-data.js)
   ========================================================= */

(function initDj(){
  const grid = document.getElementById("djCategories");
  const songsView = document.getElementById("djSongsView");
  const songsTitle = document.getElementById("djSongsTitle");
  const songsDot = document.getElementById("djSongsDot");
  const songsList = document.getElementById("djSongsList");
  const backBtn = document.getElementById("djBack");
  if(!grid) return;

  // Pinta las tarjetas de categorias
  grid.innerHTML = DJ_CATEGORIES.map(cat => `
    <div class="dj-card" style="--card-color:${cat.color}" data-id="${cat.id}">
      <span class="dj-card-count">${cat.songs.length} canciones</span>
      <span class="dj-card-name">${cat.name}</span>
    </div>
  `).join("");

  grid.querySelectorAll(".dj-card").forEach(card => {
    card.addEventListener("click", () => openCategory(card.dataset.id));
  });

  function openCategory(id){
    const cat = DJ_CATEGORIES.find(c => c.id === id);
    if(!cat) return;

    songsTitle.textContent = cat.name;
    songsDot.style.setProperty("--card-color", cat.color);
    songsDot.style.background = cat.color;
    songsDot.style.boxShadow = `0 0 12px ${cat.color}`;

    songsList.innerHTML = cat.songs.map(s => `
      <div class="song-row">
        <span class="song-name">${s.name}</span>
        <span class="song-dj">${s.dj}</span>
        <button class="song-copy" data-id="${s.id}">Copiar ID</button>
      </div>
    `).join("");

    songsList.querySelectorAll(".song-copy").forEach(btn => {
      btn.addEventListener("click", () => copyId(btn));
    });

    grid.classList.add("hidden");
    songsView.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  function copyId(btn){
    navigator.clipboard.writeText(btn.dataset.id).then(() => {
      const original = btn.textContent;
      btn.textContent = "Copiado!";
      btn.classList.add("copied");
      setTimeout(() => { btn.textContent = original; btn.classList.remove("copied"); }, 1500);
    });
  }

  backBtn.addEventListener("click", () => {
    songsView.classList.remove("active");
    grid.classList.remove("hidden");
    history.replaceState(null, "", "#");
  });

  // Si entran directo con un link tipo dj.html#salsa, abre esa categoria
  const hashId = location.hash.replace("#", "");
  if(hashId) openCategory(hashId);
})();
