/*Felugró Ablak */
let $Projects = document.querySelector('.Navbar_Div_1');
let $About = document.querySelector('.Navbar_Div_2');

let $Projects_Popup = document.querySelector('#PROJECTS');
let $About_Popup = document.querySelector('#ABOUT');



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

/*
let $Loader = document.querySelector('#LOADER')

window.addEventListener('load', invisibility);

function invisibility(){
    $Loader.classList.add('.Invisible');
}

*/
