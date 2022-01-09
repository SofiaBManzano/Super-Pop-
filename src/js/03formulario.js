"use strict";

//rellenar form
const nameInput = document.querySelector(".js-fullname");
const nameCard = document.querySelector(".js-nameInput");
const jobInput = document.querySelector(".js-job");
const jobCard = document.querySelector(".js-jobInput");
const emailInput = document.querySelector(".js-email");
const emailPreview = document.querySelector(".js_preview_email");
const phoneInput = document.querySelector("#phone");
const linkedinInput = document.querySelector("#linkedin");
const gitHubInput = document.querySelector("#github");

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

let data =   JSON.parse(localStorage.getItem("data")) || {
  palette: "2",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "https://images.chicmagazine.com.mx/fDGV_iMKva6n0r5I9LoejdhgARw=/958x596/uploads/media/2020/09/24/avril-lavigne-que-fue-de.jpg",
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

}
function handleInputData(event) {
  event.preventDefault();
  getUserData(event);
  setLocalStorage()
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
  profilePreview.style.backgroundImage = "url(https://images.chicmagazine.com.mx/fDGV_iMKva6n0r5I9LoejdhgARw=/958x596/uploads/media/2020/09/24/avril-lavigne-que-fue-de.jpg)";
  profileImage.style.backgroundImage = "";
  data.palette = "1";
  handleChangeColorCard(data.palette);
  sharecreation.classList.toggle("collapsed");
  sharebutton.classList.toggle("sharebuttongrey");

  data = {
    palette: "1",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "https://images.chicmagazine.com.mx/fDGV_iMKva6n0r5I9LoejdhgARw=/958x596/uploads/media/2020/09/24/avril-lavigne-que-fue-de.jpg",
  };
});

//Set local storage

function setLocalStorage() {
  const saveInfo =  JSON.stringify(data);
  localStorage.removeItem("data");
  localStorage.setItem("data", saveInfo);
}
