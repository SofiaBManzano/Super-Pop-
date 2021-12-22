"use strict";

const shareCreationLink = document.querySelector(".js-shareCreationLink");
const twitterHref = document.querySelector('.share_creation__twitter');


function sendUserInfo() {
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        shareCreationLink.href = data.cardURL;
        shareCreationLink.innerText = data.cardURL;
        twitterHref.href = `https://twitter.com/intent/tweet?text=%C2%A1Comparte%20esta%20tarjeta%20super%20molona%21&url=${data.cardURL}`;
       // linkedinHref.href = `https://www.linkedin.com/sharing/share-offsite/?url=${data.cardURL}`;
        //facebookHref.href = `http://www.facebook.com/share.php?u=${data.cardURL}`;
      } else {
        const messageNewCard = document.querySelector(".share_creation__title");
        const shareCardRrss = document.querySelectorAll(".js-share-RRSS");
        for (const card of shareCardRrss) {
          card.classList.add('collapsed');
          console.log(card);
        }
        messageNewCard.innerHTML = "¡Error!";
        shareCreationLink.innerHTML =
          "Por favor, asegúrese de que ha cumplimentado todos los campos";
      }
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
