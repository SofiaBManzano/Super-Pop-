const colorOptions = document.querySelectorAll(".design__radio");

// Elementos que cambian
const icon = document.querySelectorAll(".icon-js");
const tinyRectangle = document.querySelector(".rectangle-js");
const fullName = document.querySelector(".fullname-js");

function handleChangeColorCard(event) {
  console.log(event.target.id);
  const optionSelected = event.target.id;
  // FIRST OPTION BLUE-GREEN RECTANGLE&NAME
  if (optionSelected === "blue-green") {
    tinyRectangle.classList.remove("rectanglered");
    tinyRectangle.classList.remove("rectanglemix");
    tinyRectangle.classList.add("rectangleblue");
    fullName.classList.remove("namered");
    fullName.classList.remove("namemix");
    fullName.classList.add("name")
      // SECOND OPTION RED-ORANGE RECTANGLE&NAME
  } else if (optionSelected === "red-orange") {
    tinyRectangle.classList.remove("rectangleblue");
    tinyRectangle.classList.remove("rectanglemix");
    tinyRectangle.classList.add("rectanglered");
    fullName.classList.remove("namemix");
    fullName.classList.remove("name");
    fullName.classList.add("namered");

    // SECOND OPTION COLOR-MIX RECTANGLE&NAME
  } else if (optionSelected === "color-mix") {
    tinyRectangle.classList.remove("rectangleblue");
    tinyRectangle.classList.remove("rectanglered");
    tinyRectangle.classList.add("rectanglemix");
    fullName.classList.remove("namered");
    fullName.classList.remove("name");
    fullName.classList.add("namemix");
  }
  for (const eachIcon of icon){ 
        
  }
}

for (const eachPalette of colorOptions) {
  eachPalette.addEventListener("click", handleChangeColorCard);
}
