"use strict";

const legends = document.querySelectorAll(".js-legend");

legends.forEach((legend) => legend.addEventListener("click", legendHandler));

function legendHandler(event) {
  const arrow = event.currentTarget.children[1];
  collapse(event);
  arrow.classList.toggle("legend__arrow--up");
}
//Esta función nos coge el siguiente elemento hermano y le hace un toggle.
function collapse(elementToCollapse) {
  elementToCollapse.currentTarget.nextElementSibling.classList.toggle(
    "collapsed"
  );
}
