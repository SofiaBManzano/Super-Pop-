"use strict";

//ELEMENTOS HTML

//Collapsables
//Falta mejorar hacer 1 sola funcion para los collapsables

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

function legendHandler2() {
  shareContainer.classList.toggle("collapsed");
}

legends[0].addEventListener("click", legendHandler);
legends[1].addEventListener("click", legendHandler1);
legends[2].addEventListener("click", legendHandler2);
