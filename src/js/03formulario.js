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

let data = {
  palette: "1",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

function getPalette(event) {
  data.palette = event.target.value;
  handleChangeColorCard(data.palette);

}

function getUserData(input) {
  let userInputName = input.currentTarget.name;
  let userInputValue = input.currentTarget.value;
  if (userInputName === "name") {
    if (nameInput.value === "") {
      nameCard.innerHTML = "Nombre Apellido";
    } else {
      data.name = userInputValue;
      nameCard.innerHTML = data.name;
    }
  } else if (userInputName === "job") {
    if (jobInput.value === "") {
      jobCard.innerHTML = "Front-end developer";
    } else {
      data.job = userInputValue;
      jobCard.innerHTML = data.job;
    }
  } else if (userInputName === "phone") {
    data.phone = userInputValue;
  } else if (userInputName === "email") {
    data.email = userInputValue;
    emailPreview.href = `mailto:${userInputValue}`;
  } else if (userInputName === "linkedin") {
    data.linkedin = userInputValue;
  } else if (userInputName === "github") {
    data.github = userInputValue;
  }
  getPalette();
  setLocalStorage();
}
function handleInputData(event) {
  event.preventDefault();
  getUserData(event);
}

//Listener form
for (const eachInput of allInput) {
  eachInput.addEventListener("keyup", handleInputData);
}

//Botón reset
const resetBtn = document.querySelector(".js-resetBtn");
resetBtn.addEventListener("click", () => {
  nameCard.innerHTML = "Nombre Apellido";
  jobCard.innerHTML = "Front-end developer";
  profilePreview.style.backgroundImage = "url(https://placekitten.com/240/200)";
  profileImage.style.backgroundImage = "";
  data.palette = "1";
  handleChangeColorCard(data.palette);
  sharecreation.classList.toggle("collapsed");
  sharebutton.classList.toggle("sharebuttongrey");
});

//Set local storage
/*
function setLocalStorage() {
  const saveInfo =  JSON.stringify(data);
  localStorage.setItem("data", saveInfo);
}
*/