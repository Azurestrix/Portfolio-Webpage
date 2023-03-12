/*Felugró Ablak */
const $Projects = document.querySelector('.Navbar_Div_1');
const $About = document.querySelector('.Navbar_Div_2');

const $Projects_Popup = document.querySelector('#PROJECTS');
const $About_Popup = document.querySelector('#ABOUT');



$Projects.addEventListener('click', visibility_1);
$About.addEventListener('click', visibility_2);

function visibility_1(){
    $Projects_Popup.classList.toggle('Visible');
    $About_Popup.classList.remove('Visible');
}

function visibility_2(){
    $About_Popup.classList.toggle('Visible');
    $Projects_Popup.classList.remove('Visible');
}


/*Felugró Ablak */


/* Loader */

const $Loader = document.querySelector('#LOADER')

window.addEventListener('load', invisibility);

function invisibility(){
    $Loader.classList.add('.Invisible');
}

/* Loader */



