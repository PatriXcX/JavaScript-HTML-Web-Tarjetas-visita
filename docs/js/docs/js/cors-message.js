"use strict";

/**
 * GitHub Pages demo helper:
 * Si la API falla por CORS, mostramos un mensaje en la UI.
 * No toca main.js (que está minificado).
 */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".js__createCardBtn");
  const box = document.querySelector(".js__createMessage");
  const link = document.querySelector(".js__creatCardLink");
  const twitter = document.querySelector(".js__twitterBtn");

  if (!btn || !box) return;

  // Asegura que el botón exista
  btn.addEventListener("click", () => {
    // Esperamos un poco a que el fetch falle y la promesa "reviente"
    setTimeout(() => {
      // Si main.js NO ha mostrado nada (sigue hidden), lo mostramos nosotros
      if (box.classList.contains("hidden")) {
        box.classList.remove("hidden");
        box.classList.add("visible");

        // Opcional: esconder link/twitter (por si están en el HTML)
        if (link) link.innerHTML = "";
        if (twitter) twitter.style.display = "none";

        box.innerHTML = `
          <h2 class="created_Card">Demo en GitHub Pages</h2>
          <p>La API de Adalab bloquea peticiones externas (CORS), por eso no se puede crear la tarjeta aquí.</p>
          <p><strong>Para probar “Crear tarjeta”:</strong> ejecuta el proyecto en local.</p>
        `;
      }
    }, 700);
  });
});

