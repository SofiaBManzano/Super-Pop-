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

const legends = document.querySelectorAll(".js-legend");
const designContainer = document.querySelector(".design-container");
const fillContainer = document.querySelector(".fill-container");
const shareContainer = document.querySelector(".sharecontainer");

function legendHandler() {
  designContainer.classList.toggle("collapsed");
}

function legendHandler1() {
  fillContainer.classList.toggle("collapsed");
}

/*function legendHandler2(){
  shareContainer.classList.toggle('collapsed');
}
*/

legends[0].addEventListener("click", legendHandler);
legends[1].addEventListener("click", legendHandler1);
legends[2].addEventListener("click", legendHandler2);
