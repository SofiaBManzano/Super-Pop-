"use strict";

const shareCreationLink = document.querySelector(".js-shareCreationLink");

function sendUserInfo() {
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      shareCreationLink.href = data.cardURL;
      shareCreationLink.innerText = data.cardURL;
    });
}

const sharebutton = document.querySelector(".share_button__item");
const sharecreation = document.querySelector(".share_creation ");

//SHARE BUTTON FUCNTION
function handleButtonClick(event) {
  event.preventDefault();
  sendUserInfo();
  changeColor();
}
function changeColor() {
  sharebutton.classList.toggle("sharebuttongrey");
  sharecreation.classList.toggle("collapsed");
}

sharebutton.addEventListener("click", handleButtonClick);
