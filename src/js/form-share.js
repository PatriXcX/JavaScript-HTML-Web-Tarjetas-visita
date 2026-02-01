"use strict";

const createCardBtn = document.querySelector(".js__createCardBtn");
const createCardIcon = document.querySelector(".js__createCardIcon");
const iconArrowShare = document.querySelector(".js__icon_arrow_share");
const iconArrowFill = document.querySelector(".js__icon_arrow_fill");
const iconArrowDesign = document.querySelector(".js__icon_arrow_design");
const fieldsetShare = document.querySelector(".js__form_fieldset_share");
const formShareSection = document.querySelector(".js__form-share-section");
const designForm = document.querySelector(".js__design_form");
const formFill = document.querySelector(".js__form_fill");
const createMessage = document.querySelector(".js__createMessage");
const creatCardLink = document.querySelector(".js__creatCardLink");
const twitterBtn = document.querySelector('.js__twitterBtn');
// 🔹 Inputs del formulario (según el HTML real)
const nameInput = document.querySelector(".js__input_name");
const jobInput = document.querySelector(".js__input_job");
const phoneInput = document.querySelector(".js__inputPhone");
const emailInput = document.querySelector(".js__inputEmail");
const linkedinInput = document.querySelector(".js__inputLinkedin");
const githubInput = document.querySelector(".js__inputGithub");



const handleClickCreate = (ev) => {
  ev.preventDefault();
  console.log("boton clickeado");
fetch("https://dev.adalab.es/api/card/", {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" }
})
  .then(response => response.json())
  .then(dataResponse => {
    console.log(dataResponse);

    // ✅ enseñar el bloque SIEMPRE
    createMessage.classList.remove("hidden");
    createMessage.classList.add("visible");

    if (dataResponse.success === false) {
      createMessage.innerHTML =
        `<p>Ha sucedido un error al crear la tarjeta</p>
         <p>${dataResponse.error}</p>`;
      return;
    }

    // ✅ éxito
    creatCardLink.innerHTML =
      `<a href="${dataResponse.cardURL}" target="_blank" class="creat_Card_link">${dataResponse.cardURL}</a>`;

    createCardBtn.classList.add("disabled");
    createCardIcon.classList.add("disabled_icon");

    const tweetUrl = encodeURIComponent(dataResponse.cardURL);
    twitterBtn.href = `https://twitter.com/intent/tweet?url=${tweetUrl}`;
    twitterBtn.style.display = "block";
  })
  .catch(err => {
    // ✅ AQUÍ SALDRÁ EL MENSAJE EN PAGES (CORS)
    createMessage.classList.remove("hidden");
    createMessage.classList.add("visible");
    createMessage.innerHTML = `
      <p><strong>Demo en GitHub Pages</strong></p>
      <p>La API de Adalab bloquea peticiones externas (CORS).</p>
      <p>Para probar “Crear tarjeta”, ejecútalo en local.</p>
    `;
    console.error(err);
  });
};



const handleclickDisplay = (ev) => {
  ev.preventDefault();
  console.log("click display");
  const arrow = ev.currentTarget;

  const isActive = arrow.classList.toggle("active");

  if (arrow !== iconArrowShare) {
    iconArrowShare.classList.remove("active");
    formShareSection.classList.add("hidden");
    formShareSection.classList.remove("visible");
  }
  if (arrow !== iconArrowDesign) {
    iconArrowDesign.classList.remove("active");
    designForm.classList.add("hidden");
    designForm.classList.remove("visible");
  }
  if (arrow !== iconArrowFill) {
    iconArrowFill.classList.remove("active");
    formFill.classList.add("hidden");
    formFill.classList.remove("visible");
  }

  if (isActive) {
    if (arrow === iconArrowShare) {
      formShareSection.classList.add("visible");
      formShareSection.classList.remove("hidden");
    } else if (arrow === iconArrowDesign) {
      designForm.classList.add("visible");
      designForm.classList.remove("hidden");
    } else if (arrow === iconArrowFill) {
      formFill.classList.add("visible");
      formFill.classList.remove("hidden");
    }
  } else {
    if (arrow === iconArrowShare) {
      formShareSection.classList.add("hidden");
      formShareSection.classList.remove("visible");
    } else if (arrow === iconArrowDesign) {
      designForm.classList.add("hidden");
      designForm.classList.remove("visible");
    } else if (arrow === iconArrowFill) {
      formFill.classList.add("hidden");
      formFill.classList.remove("visible");
    }
  }
};

const handleFormFillChange = () => {
  console.log("Input cambiado");
  createCardBtn.classList.remove("disabled");
  createCardIcon.classList.remove("disabled_icon");

};

const formFillInputs = [nameInput, jobInput, phoneInput, emailInput, linkedinInput, githubInput];
for (const input of formFillInputs) {
  input.addEventListener("input", handleFormFillChange);
}


createCardBtn.addEventListener("click", handleClickCreate);
iconArrowShare.addEventListener("click", handleclickDisplay);
iconArrowFill.addEventListener("click", handleclickDisplay);
iconArrowDesign.addEventListener("click", handleclickDisplay);





