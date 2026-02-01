"use strict";

// Mensaje visible cuando la API está bloqueada por CORS en GitHub Pages
document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.querySelector(".js__createCardBtn");
  const messageBox = document.querySelector(".js__createMessage");

  if (!createBtn || !messageBox) return;

  createBtn.addEventListener("click", () => {
    setTimeout(() => {
      if (messageBox.classList.contains("hidden")) {
        messageBox.classList.remove("hidden");
        messageBox.classList.add("visible");
        messageBox.innerHTML = `
          <p><strong>Demo en GitHub Pages</strong></p>
          <p>La API de Adalab bloquea peticiones externas (CORS).</p>
          <p>Para probar “Crear tarjeta”, ejecuta el proyecto en local.</p>
        `;
      }
    }, 800);
  });
});

