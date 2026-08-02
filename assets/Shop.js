/* =========================================================
   TIENDA — logica de render
   Usa SHOP_ITEMS (definido en shop-data.js)
   ========================================================= */

(function initShop(){
  const grid = document.getElementById("shopGrid");
  if(!grid) return;

  grid.innerHTML = SHOP_ITEMS.map((item, i) => `
    <div class="simple-card" data-i="${i}">
      <div class="simple-card-img" style="background-image:url('${item.image}')"></div>
      <div class="simple-card-body">
        <div class="simple-card-name">${item.name}</div>
        <span class="simple-card-btn">Ver mas &rarr;</span>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".simple-card").forEach(card => {
    card.addEventListener("click", () => {
      const item = SHOP_ITEMS[+card.dataset.i];
      openDetailModal({
        image: item.image,
        title: item.name,
        desc: item.desc,
        cta: { text: "Comprar en Roblox", link: item.link }
      });
    });
  });
})();
