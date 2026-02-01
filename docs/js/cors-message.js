"use strict";

/**
 * GitHub Pages demo helper:
 * Si la API falla por CORS, mostramos un mensaje en la UI.
 */
document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".js__createMessage");
  const link = document.querySelector(".js__creatCardLink");
  const twitter = document.querySelector(".js__twitterBtn");
  const shareSection = document.querySelector(".js__form-share-section");

  const showCorsMessage = () => {
    if (!box) return;

    // Asegurar que se vea la sección de compartir
    if (shareSection) {
      shareSection.classList.remove("hidden");
      shareSection.classList.add("visible");
    }

    box.classList.remove("hidden");
    box.classList.add("visible");

    if (link) link.innerHTML = "";
    if (twitter) twitter.style.display = "none";

    box.innerHTML = `
      <h2 class="created_Card">Demo en GitHub Pages</h2>
      <p>La API de Adalab bloquea peticiones externas (CORS), por eso no se puede crear la tarjeta aquí.</p>
      
      <p><strong>Para probar la funcionalidad completa, ejecuta el proyecto en entorno local.</p>
    `;
  };

  // Si hay un “Uncaught (in promise)” (CORS/NetworkError), lo capturamos aquí
  window.addEventListener("unhandledrejection", () => {
    showCorsMessage();
  });

  // Por si el navegador lo lanza como error normal
  window.addEventListener("error", () => {
    showCorsMessage();
  });
});
