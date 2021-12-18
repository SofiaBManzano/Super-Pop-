/* eslint-disable quotes */
/* eslint-disable indent */
'use strict';

const legends = document.querySelectorAll(".js-legend");

legends.forEach( legend => legend.addEventListener('click', legendHandler));

function legendHandler(event){
    const arrow = event.target.children[1];
    console.dir(arrow);
    collapse(event);
    
    arrow.classList.toggle('legend__arrow--up');
}
//Esta función nos coge el siguiente elemento hermano y le hace un toggle.
function collapse(elementToCollapse){
    elementToCollapse.target.nextElementSibling.classList.toggle('collapsed');

}
