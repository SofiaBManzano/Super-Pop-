"use strict";

//ELEMENTOS HTML

const sharebutton = document.querySelector(".share_button__item");
const sharecreation = document.querySelector(".share_creation ");

//SHARE BUTTON FUCNTION


function crearTarjeta() {
  sharebutton.classList.remove("sharebuttonorange");
  sharebutton.classList.add("sharebuttongrey");
  sharecreation.classList.remove("collapsed");
  
}

sharebutton.addEventListener("click", crearTarjeta);

