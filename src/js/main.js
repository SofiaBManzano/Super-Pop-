"use strict";

//SHARE SECTION (BUTTON COLOR AND COLLAPSABLE)
//ELEMENTOS HTML
const shareButton = document.querySelector(".share_button__item");
const shareCardCreation = document.querySelector(".share_creation");

function createAndShareCard(event) {
  event.preventDefault();
  shareButton.classList.toggle("sharebuttongrey");
  shareCardCreation.classList.toggle("collapsed");
}

shareButton.addEventListener("click", createAndShareCard);

//Collapsables
//Revisar collapsable en share




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
