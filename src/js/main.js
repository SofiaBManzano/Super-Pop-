'use strict';


//ELEMENTOS HTML

const sharebutton = document.querySelector('.share_button__item');
const sharecreation = document.querySelector('.share_creation ');

//SHARE BUTTON FUCNTION
function changeColor() {
  sharebutton.classList.toggle('sharebuttongrey');
  sharecreation.classList.toggle('collapsed');
}

sharebutton.addEventListener('click', changeColor);

//Collapsables
//Falta mejorar hacer 1 sola funcion para los collapsables

const legends = document.querySelectorAll('.js-legend');
const designContainer = document.querySelector('.design-container');
const fillContainer = document.querySelector('.fill-container');
const shareContainer = document.querySelector('.sharecontainer');


function legendHandler(){
  designContainer.classList.toggle('collapsed');
}

function legendHandler1(){
  fillContainer.classList.toggle('collapsed');

}

function legendHandler2(){
  shareContainer.classList.toggle('collapsed');
}

legends[0].addEventListener('click', legendHandler);
legends[1].addEventListener('click', legendHandler1);
legends[2].addEventListener('click', legendHandler2);



//rellenar form
const nameInput = document.querySelector('.js-fullname');
const nameCard = document.querySelector('.js-nameInput');
const jobInput = document.querySelector('.js-job');
const jobCard = document.querySelector('.js-jobInput');
const emailInput = document.querySelector('.js-email');
const emailPreview = document.querySelector('.js_preview_email');

//handler
function writeName() {
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
emailInput.addEventListener('keyup', handleKeyEmail);

//Botón reset
const resetBtn = document.querySelector('.js-resetBtn');

resetBtn.addEventListener('click', () =>{
  nameCard.innerHTML = 'Nombre Apellido';
  jobCard.innerHTML = 'Front-end developer';

});


