"use strict";

//ELEMENTOS HTML

const sharebutton = document.querySelector(".share_button__item");
const sharecreation = document.querySelector(".share_creation ");

//SHARE BUTTON FUCNTION
function changeColor(event) {
  sharebutton.classList.toggle("sharebuttongrey");
  sharecreation.classList.toggle("collapsed");
}

sharebutton.addEventListener("click", changeColor);

//Collapsables
//Revisar collapsable en share

// const legends = document.querySelectorAll(".js-legend");
// const designContainer = document.querySelector(".design-container");
// const fillContainer = document.querySelector(".fill-container");
// const shareContainer = document.querySelector(".sharecontainer");

// function legendHandler(event) {
//   designContainer.classList.toggle("collapsed");
//   event.preventDefault();
// }

// function legendHandler1(event) {
//   fillContainer.classList.toggle("collapsed");
//   event.preventDefault();
// }

// function legendHandler2(event) {
//   shareContainer.classList.toggle("collapsed");
//   event.preventDefault();
// }

// legends[0].addEventListener("click", legendHandler);
// legends[1].addEventListener("click", legendHandler1);
// legends[2].addEventListener("click", legendHandler2);

//rellenar form
const nameInput = document.querySelector(".js-fill__input");
const nameCard = document.querySelector(".js-nameInput");
const jobInput = document.querySelector(".js-job");
const jobCard = document.querySelector(".js-jobInput");
//handler
function writeName() {
  if (nameInput.value === "") {
    nameCard.innerHTML = "Nombre Apellido";
  } else {
    nameCard.innerHTML = nameInput.value;
  }
}
function writeJob() {
  if (jobInput.value === "") {
    jobCard.innerHTML = "Front-end developer";
  } else {
    jobCard.innerHTML = jobInput.value;
  }
}
//listener
nameInput.addEventListener("keyup", writeName);
jobInput.addEventListener("keyup", writeJob);
