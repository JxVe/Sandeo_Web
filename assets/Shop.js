/* =========================================================
   TIENDA — logica de render
   Usa SHOP_ITEMS (definido en shop-data.js)
   ========================================================= */

const SHOP_ICONS = {
  crown: '<path d="M4 18h16l1-9-5 3-4-6-4 6-5-3 1 9Z"/><path d="M4 21h16" stroke-linecap="round"/>',
  gem: '<path d="M6 3h12l3 6-9 12L3 9l3-6Z"/><path d="M3 9h18M9 3l3 6 3-6M9 9l3 12 3-12" stroke="currentColor" fill="none"/>',
  headphones: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="5" height="7" rx="1.5"/><rect x="17" y="14" width="5" height="7" rx="1.5"/>',
  tag: '<path d="M20.5 12.5 12 21l-9-9 8.5-8.5H20v7.5Z"/><circle cx="16" cy="8" r="1.2"/>',
  sparkles: '<path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z"/><path d="M19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9L19 15Z"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4" stroke="var(--bg)" stroke-linecap="round" stroke-linejoin="round"/>',
  ghost: '<path d="M5 20V11a7 7 0 0 1 14 0v9l-2.5-2-2 2-2.5-2-2.5 2-2-2L5 20Z"/><circle cx="9.5" cy="11" r="1" fill="var(--bg)" stroke="none"/><circle cx="14.5" cy="11" r="1" fill="var(--bg)" stroke="none"/>',
  radio: '<rect x="3" y="9" width="18" height="12" rx="2"/><circle cx="8" cy="15" r="2.3"/><path d="M14 13h4M14 17h2M7 9 17 3" stroke-linecap="round"/>',
  dance: '<circle cx="12" cy="4" r="1.8"/><path d="M12 7v6l-4 7M12 13l4 7M8 10l-3 2M16 10l3 2M8 10h8" stroke-linecap="round" stroke-linejoin="round"/>'
};

(function initShop(){
  const grid = document.getElementById("shopGrid");
  if(!grid) return;

  grid.innerHTML = SHOP_ITEMS.map(item => `
    <div class="shop-card" style="--item-color:${item.color}">
      <div class="shop-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          ${SHOP_ICONS[item.icon] || SHOP_ICONS.sparkles}
        </svg>
      </div>
      <h3 class="shop-name">${item.name}</h3>
      <p class="shop-desc">${item.desc}</p>
      <a href="${item.link}" class="shop-buy">Comprar en Roblox &rarr;</a>
    </div>
  `).join("");
})();
