"use strict";

const shareCreationLink = document.querySelector(".js-shareCreationLink");
const twitterHref = document.querySelector(".share_creation__twitter");
const linkedinHref = document.querySelector(".share_creation__linkedin");
const facebookHref = document.querySelector(".share_creation__facebook");
const messageNewCard = document.querySelector(".share_creation__title");
const shareCardRrss = document.querySelectorAll(".js-share-RRSS");
function sendUserInfo() {
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((dataServe) => {
      if (dataServe.success === true) {
        shareCreationLink.href = dataServe.cardURL;
        for (const card of shareCardRrss) {
          card.classList.remove("collapsed");
        }
        shareCreationLink.innerHTML = dataServe.cardURL;
        messageNewCard.innerText = "La tarjeta ha sido creada:";
        twitterHref.href = `https://twitter.com/intent/tweet?text=%C2%A1Comparte%20esta%20tarjeta%20super%20molona%21&url=${dataServe.cardURL}`;
        linkedinHref.href = `https://www.linkedin.com/sharing/share-offsite/?url=${dataServe.cardURL}`;
        facebookHref.href = `http://www.facebook.com/share.php?u=${dataServe.cardURL}`;
      } else {
        for (const card of shareCardRrss) {
          card.classList.add("collapsed");
        }

        messageNewCard.innerText = "¡Error!";
        shareCreationLink.innerHTML =
          "Por favor, asegúrese de que ha cumplimentado todos los campos";
      }
    });
}
const sharebutton = document.querySelector(".share_button__item");
const sharecreation = document.querySelector(".share_creation ");
function clearError() {
  messageNewCard.innerHTML = "";
}
//SHARE BUTTON FUCNTION
function handleButtonClick(event) {
  event.preventDefault();

  sendUserInfo();
  changeColor();
  setLocalStorage();
}
function changeColor() {
  sharebutton.classList.toggle("sharebuttongrey");
  sharecreation.classList.toggle("collapsed");
}

sharebutton.addEventListener("click", handleButtonClick);
