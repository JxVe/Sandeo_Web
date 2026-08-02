/* =========================================================
   DETAIL MODAL — logica reutilizable
   Llama a window.openDetailModal({...}) desde cualquier script
   para abrir el modal con esos datos. Cierra con la X, click
   afuera, o tecla Escape.
   ========================================================= */

(function(){
  const overlay = document.getElementById("detailOverlay");
  if(!overlay) return;

  const cover = document.getElementById("detailCover");
  const title = document.getElementById("detailTitle");
  const meta = document.getElementById("detailMeta");
  const desc = document.getElementById("detailDesc");
  const members = document.getElementById("detailMembers");
  const ctaWrap = document.getElementById("detailCtaWrap");

  window.openDetailModal = function(data){
    cover.style.backgroundImage = data.image ? `url('${data.image}')` : "none";
    title.textContent = data.title || "";
    meta.textContent = data.meta || "";
    meta.style.display = data.meta ? "block" : "none";
    desc.textContent = data.desc || "";
    desc.style.display = data.desc ? "block" : "none";

    if(data.members && data.members.length){
      members.style.display = "grid";
      members.innerHTML = data.members.map(m => `
        <div class="detail-member">
          <div class="detail-member-photo" style="background-image:url('${m.image || ""}')"></div>
          <div class="detail-member-name">${m.name}</div>
          <div class="detail-member-role">${m.role || ""}</div>
          ${m.desc ? `<div class="detail-member-desc">${m.desc}</div>` : ""}
        </div>
      `).join("");
    } else {
      members.style.display = "none";
      members.innerHTML = "";
    }

    if(data.cta){
      ctaWrap.style.display = "block";
      ctaWrap.innerHTML = `<a href="${data.cta.link || '#'}" class="detail-cta">${data.cta.text} &rarr;</a>`;
    } else {
      ctaWrap.style.display = "none";
      ctaWrap.innerHTML = "";
    }

    overlay.classList.add("open");
  };

  window.closeDetailModal = function(){
    overlay.classList.remove("open");
  };

  document.getElementById("detailClose").addEventListener("click", closeDetailModal);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) closeDetailModal(); });
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeDetailModal(); });
})();
