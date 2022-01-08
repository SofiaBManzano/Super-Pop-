/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable strict */
/* eslint-disable semi */

if(localStorage.getItem("data")){
    rememberUserData();
}


function rememberUserData(){
    nameInput.value = data.name;
    nameCard.innerHTML = data.name;
    jobInput.value = data.job;
    jobCard.innerHTML = data.job;
    emailInput.value = data.email;
    nameInput.value = data.name;
    const palette = parseInt(data.palette)-1;
    colorOptions[palette].checked = true;
    phoneInput.value = data.phone;
    linkedinInput.value = data.linkedin;
    gitHubInput.value = data.github;
   
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;



}