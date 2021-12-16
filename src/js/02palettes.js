

// Elementos que cambian
const colorOptions = document.querySelectorAll(".design__radio");
const icon = document.querySelectorAll(".icon-js");
const tinyRectangle = document.querySelector(".rectangle-js");
const fullName = document.querySelector(".fullname-js");

//Handlefunction
function handleChangeColorCard(event) {
  console.log(event.target.id);
  const optionSelected = event.target.id;
  // FIRST OPTION BLUE-GREEN RECTANGLE&NAME
  if (optionSelected === "blue-green") {
    tinyRectangle.classList.remove("rectanglered");
    tinyRectangle.classList.remove("rectanglemix");
    tinyRectangle.classList.add("card__title--rectangle");
    fullName.classList.remove("namered");
    fullName.classList.remove("namemix");
    fullName.classList.add("name");

    // SECOND OPTION RED-ORANGE RECTANGLE&NAME
  } else if (optionSelected === "red-orange") {
    tinyRectangle.classList.remove("card__title--rectangle");
    tinyRectangle.classList.remove("rectanglemix");
    tinyRectangle.classList.add("rectanglered");
    fullName.classList.remove("namemix");
    fullName.classList.remove("name");
    fullName.classList.add("namered");

    // SECOND OPTION COLOR-MIX RECTANGLE&NAME
  } else if (optionSelected === "color-mix") {
    tinyRectangle.classList.remove("card__title--rectangle");
    tinyRectangle.classList.remove("rectanglered");
    tinyRectangle.classList.add("rectanglemix");
    fullName.classList.remove("namered");
    fullName.classList.remove("name");
    fullName.classList.add("namemix");
  }//ICON CIRCLES
  for (const eachIcon of icon) {
    if (optionSelected === "blue-green") {
      eachIcon.classList.remove("mixicon");
      eachIcon.classList.remove("redicon");
      eachIcon.classList.add("blueicon");
    } else if (optionSelected === "red-orange") {
      eachIcon.classList.remove("mixicon");
      eachIcon.classList.remove("iconblue");
      eachIcon.classList.add("redicon");
    } else if (optionSelected === "color-mix") {
      eachIcon.classList.remove("redicon");
      eachIcon.classList.remove("iconblue");
      eachIcon.classList.add("mixicon");
    }
  }
}

for (const eachPalette of colorOptions) {
  eachPalette.addEventListener("click", handleChangeColorCard);
}

