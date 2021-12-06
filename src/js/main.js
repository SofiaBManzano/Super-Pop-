'use strict';

//ELEMENTO HTML

const shareButton = document.querySelector('.share_button_item');


//HANDLER

function changeColorButton(){
    shareButton.classList.remove("sharebuttonorange")
    shareButton.classList.add("sharebuttongrey")
}

shareButton.addEventListener('click',changeColorButton);