// Elementos que cambian
const colorOptions = document.querySelectorAll(".design__radio");
const icon = document.querySelectorAll(".icon-js");
const tinyRectangle = document.querySelector(".rectangle-js");
const fullName = document.querySelector(".fullname-js");
const cardIcons = document.querySelectorAll(".cardicon-js");

//Handlefunction
function handleChangeColorCard(palette) {
  const optionSelected = data.palette;
 //data.palette = optionSelected;

  // FIRST OPTION BLUE-GREEN RECTANGLE&NAME
  if (optionSelected === "1") {
    tinyRectangle.classList.remove("rectanglered");
    tinyRectangle.classList.remove("rectanglemix");
    tinyRectangle.classList.add("rectangleblue");
    fullName.classList.remove("namered");
    fullName.classList.remove("namemix");
    fullName.classList.add("nameblue");

    // SECOND OPTION RED-ORANGE RECTANGLE&NAME
  } else if (optionSelected === "2") {
    tinyRectangle.classList.remove("rectangleblue");
    tinyRectangle.classList.remove("rectanglemix");
    tinyRectangle.classList.add("rectanglered");
    fullName.classList.remove("namemix");
    fullName.classList.remove("nameblue");
    fullName.classList.add("namered");

    // SECOND OPTION COLOR-MIX RECTANGLE&NAME
  } else if (optionSelected === "3") {
    tinyRectangle.classList.remove("rectangleblue");
    tinyRectangle.classList.remove("rectanglered");
    tinyRectangle.classList.add("rectanglemix");
    fullName.classList.remove("namered");
    fullName.classList.remove("nameblue");
    fullName.classList.add("namemix");
  } //ICON CIRCLES
  for (const eachIcon of icon) {
    if (optionSelected === "1") {
      eachIcon.classList.remove("mixiconcircle");
      eachIcon.classList.remove("rediconcircle");
      eachIcon.classList.add("blueiconcircle");
    } else if (optionSelected === "2") {
      eachIcon.classList.remove("mixiconcircle");
      eachIcon.classList.remove("iconbluecircle");
      eachIcon.classList.add("rediconcircle");
    } else if (optionSelected === "3") {
      eachIcon.classList.remove("rediconcircle");
      eachIcon.classList.remove("iconbluecircle");
      eachIcon.classList.add("mixiconcircle");
    } //ICONS
  }
  for (const eachCardIcon of cardIcons) {
    if (optionSelected === "1") {
      eachCardIcon.classList.remove("redicon");
      eachCardIcon.classList.remove("mixicon");
      eachCardIcon.classList.add("blueicon");
    } else if (optionSelected === "2") {
      eachCardIcon.classList.remove("blueicon");
      eachCardIcon.classList.remove("mixicon");
      eachCardIcon.classList.add("redicon");
    } else if (optionSelected === "3") {
      eachCardIcon.classList.remove("redicon");
      eachCardIcon.classList.remove("iblueicon");
      eachCardIcon.classList.add("mixicon");
    }
    
  }
}

for (const eachPalette of colorOptions) {
  eachPalette.addEventListener("click", getPalette);
}
