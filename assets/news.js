/* =========================================================
   NOTICIAS — popup de anuncios
   Se usa SOLO en index.html (donde exista el HTML del popup).

   PARA PUBLICAR UN ANUNCIO NUEVO:
   agrega un objeto nuevo AL INICIO del arreglo NEWS de abajo.
   Los puntos de paginacion se generan solos segun cuantos
   objetos haya en el arreglo.
   ========================================================= */

const NEWS = [
  {
    version: "v2.4",
    title: "Nuevo VIP",
    items: ["Nuevo escenario", "8 canciones agregadas", "Nuevo sistema DJ", "Correccion de bugs"]
  }
  // Ejemplo de como agregar otro anuncio (descomenta y edita):
  // ,{
  //   version: "v2.3",
  //   title: "Apertura de temporada",
  //   items: ["Nueva zona VIP", "Evento de lanzamiento", "Ajustes de sonido"]
  // }
];

(function initNews(){
  const overlay = document.getElementById("newsOverlay");
  if(!overlay) return; // esta pagina no tiene popup de noticias

  let newsIndex = 0;
  const titleEl = document.getElementById("newsTitle");
  const versionEl = overlay.querySelector(".news-version");
  const listEl = document.getElementById("newsList");
  const dotsEl = document.getElementById("newsDots");

  function renderNews(i){
    const n = NEWS[i];
    versionEl.textContent = n.version;
    titleEl.textContent = n.title;
    listEl.innerHTML = n.items.map(t => `<li>${t}</li>`).join("");
    dotsEl.innerHTML = NEWS.map((_, idx) =>
      `<button class="news-dot ${idx === i ? 'active' : ''}" data-i="${idx}" aria-label="Anuncio ${idx+1}"></button>`
    ).join("");
    dotsEl.querySelectorAll(".news-dot").forEach(dot => {
      dot.addEventListener("click", () => { newsIndex = +dot.dataset.i; renderNews(newsIndex); });
    });
  }
  renderNews(newsIndex);

  function closeNews(){ overlay.classList.add("hidden"); }
  document.getElementById("newsClose").addEventListener("click", closeNews);
  document.getElementById("newsEnter").addEventListener("click", closeNews);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) closeNews(); });
})();
