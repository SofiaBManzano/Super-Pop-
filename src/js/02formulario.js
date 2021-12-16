"use strict";

//rellenar form
const nameInput = document.querySelector(".js-fullname");
const nameCard = document.querySelector(".js-nameInput");
const jobInput = document.querySelector(".js-job");
const jobCard = document.querySelector(".js-jobInput");
const emailInput = document.querySelector(".js-email");
const emailPreview = document.querySelector(".js_preview_email");
const allInput = document.querySelectorAll(".fill__input-js");
//handler
/*function writeName() {
  if (nameInput.value === ''){
    nameCard.innerHTML = 'Nombre Apellido';
  } else {
    nameCard.innerHTML = nameInput.value;
  }
}
function writeJob() {
  if (jobInput.value === '') {
    jobCard.innerHTML = 'Front-end developer';
  } else {
    jobCard.innerHTML = jobInput.value;
  }
}
function handleKeyEmail() {
  emailPreview.href = `mailto:${emailInput.value}`;
}

//listener
nameInput.addEventListener('input', writeName);
jobInput.addEventListener('input', writeJob);
emailInput.addEventListener('keyup', handleKeyEmail);*/

const data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

function handleWriteInput(event) {
  event.preventDefault();
  let userInputName = event.currentTarget.name;
  let userInputValue = event.currentTarget.value;
  console.log(event.currentTarget);

  if (userInputName === "name") {
    userInputValue = data.name;
  }
  return userInputValue;
}

//Listener form
for (const eachInput of allInput) {
  eachInput.addEventListener("keyup", handleWriteInput);
}

//Botón reset
const resetBtn = document.querySelector(".js-resetBtn");
resetBtn.addEventListener("click", () => {
  nameCard.innerHTML = "Nombre Apellido";
  jobCard.innerHTML = "Front-end developer";
});
