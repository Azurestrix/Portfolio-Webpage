/* Loader */

const $Loader = document.querySelector('#LOADER')

/* window.addEventListener('load', invisibility); */   /* Jó lenne konkrétan tudni ez miért is nem megy? */

/* function invisibility(){
    $Loader.classList.add('.Js_Invisible');
}

setTimeout(invisibility, 3000) */



  
/* window.addEventListener("load", function () {
    this.setTimeout(function loader(event) {
      document
        .getElementById("preloader-container")
        .classList.toggle("invisible");
    }, 7000);
  });
 */





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



/* Carousel */
const $leftButton = document.querySelector('#LEFT_BUTTON');
const $rightButton = document.querySelector('#RIGHT_BUTTON');
const $carouselElements = document.querySelector('#PROJECT_LINK');

let carouselListCurrentPosition = 0;

let currentCarouselList = []


const htmlCarouselList = [
  '<a href="http://"><img src="Images/lili.jpg" alt="1"></a>',
  '<a href="http://"><img src="Images/Vector_2677.jpg" alt="2"></a>',
  '<a href="http://"><img src="Images/Vector_2677.jpg" alt="3"></a>',
  '<a href="http://"><img src="Images/Vector_2677.jpg" alt="4"></a>',
  '<a href="http://"><img src="Images/dd.jpg" alt="5"></a>'
]

const pythonCarouselList =[
  '<a href="http://"><img src="Images/python.jpg" alt="1"></a>',
  '<a href="http://"><img src="Images/Vector_2677.jpg" alt="2"></a>',
  '<a href="http://"><img src="Images/Vector_2677.jpg" alt="3"></a>',
  '<a href="http://"><img src="Images/Vector_2677.jpg" alt="4"></a>',
  '<a href="http://"><img src="Images/pyther.jpg" alt="5"></a>'
] 

const $html_Css_Js = document.querySelectorAll('#HTML_CSS_JS_SELECTOR');
const $python = document.querySelector('');



$html_Css_Js.addEventListener('click', html_webpage_js);

function html_webpage_js() {
  currentCarouselList = htmlCarouselList
  $carouselElements = currentCarouselList
  console.error('MEGY')
}



/* $leftButton.addEventListener('click', leftClick);

function leftClick() {
  if (carouselListCurrentPosition === 0) {
    return;
  } else {
    $carouselElements.innerHTML = currentCarouselList[carouselListCurrentPosition - 1];
    carouselListCurrentPosition = carouselListCurrentPosition - 1;
  }
}

$rightButton.addEventListener('click', rightClick);

function rightClick() {
  if (carouselListCurrentPosition === 4) {
    return;
  } else {
    $carouselElements.innerHTML = currentCarouselList[carouselListCurrentPosition + 1];
    carouselListCurrentPosition = carouselListCurrentPosition + 1;
  }
}
 */
/* Carousel */


