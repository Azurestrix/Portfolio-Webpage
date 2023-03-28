/* Loader */

const $Loader = document.querySelector('#LOADER')

/* window.addEventListener('load', invisibility); */   /* Jó lenne konkrétan tudni ez miért is nem megy? */

/* function invisibility(){
    $Loader.classList.add('.Js_Invisible');
}

setTimeout(invisibility, 3000) */



  
window.addEventListener("load", function () {
    this.setTimeout(function loader(event) {
      document
        .getElementById("preloader-container")
        .classList.toggle("invisible");
    }, 7000);
  });






/* Loader */




/*Felugró Ablak */
const $Projects = document.querySelector('.Navbar_Div_1');
const $About = document.querySelector('.Navbar_Div_2');

const $Projects_Popup = document.querySelector('#PROJECTS');
const $About_Popup = document.querySelector('#ABOUT');



$Projects.addEventListener('click', visibility_1);
$About.addEventListener('click', visibility_2);

function visibility_1(){
    $Projects_Popup.classList.toggle('Js_Visible');
    $About_Popup.classList.remove('Js_Visible');
}

function visibility_2(){
    $About_Popup.classList.toggle('Js_Visible');
    $Projects_Popup.classList.remove('Js_Visible');
}


/*Felugró Ablak */




