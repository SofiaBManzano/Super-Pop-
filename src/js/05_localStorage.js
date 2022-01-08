/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable strict */
/* eslint-disable semi */

rememberUserData();


function rememberUserData(){
    nameInput.value = data.name;
    jobInput.value = data.job;
    emailInput.value = data.email;
    nameInput.value = data.name;
    const palette = parseInt(data.palette)-1;
    colorOptions[palette].checked = true;
    phoneInput.value = data.phone;
    linkedinInput.value = data.linkedin;
    gitHubInput.value = data.github;
    //NO FUNCIONA LO DE RECUPERAR LA IMAGEN DESDE EL LOCAL STORAGE, SALEN COSAS RARAS   
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;



}