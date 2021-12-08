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
