/* Loader */

const $loader = document.querySelector(".Loader");

setTimeout(loadRemove, 5000);

function loadRemove() {
  $loader.classList.add("js-hide");
  setTimeout(removeDom, 2000);
  function removeDom() {
    $loader.remove();
  }
}

/* Loader */

/*Felugró Ablak */
const $Projects = document.querySelector(".Navbar_Div_1");
const $About = document.querySelector(".Navbar_Div_2");

const $Projects_Popup = document.querySelector("#PROJECTS");
const $About_Popup = document.querySelector("#ABOUT");

$Projects.addEventListener("click", visibility_1);
$About.addEventListener("click", visibility_2);

function visibility_1() {
  $Projects_Popup.classList.toggle("Js_Visible");
  $About_Popup.classList.remove("Js_Visible");
}

function visibility_2() {
  $About_Popup.classList.toggle("Js_Visible");
  $Projects_Popup.classList.remove("Js_Visible");
}

/*Felugró Ablak */

/* Carousel */
const $leftButton = document.querySelector("#LEFT_BUTTON");
const $rightButton = document.querySelector("#RIGHT_BUTTON");
let $carouselElements = document.querySelector("#PROJECT_LINK");
const $carouselMain = document.querySelector("#CAROUSEL_MAIN");

let carouselListCurrentPosition = 0;

let currentCarouselList = [];

let carouselActivation = false;

const htmlCarouselList = [
  '<a href="https://github.com/Domokos-Laszlo-Oliver/Final-Portfolio"><figure><img src="Images/Portfolio_Site.jpg" alt="1"><figcaption>This is my portfolio webpage you are on.</figcaption></figure></a>',
  '<a href="http://"><figure><img src="Images/Portfolio_webpage.png" alt="2"><figcaption>In Progress</figcaption></figure></a>',
  '<a href="http://"><figure><img src="Images/Inkedhtmlcssjs_3.jpg" alt="3"><figcaption>HCJ3</figcaption></figure></a>',
  '<a href="http://"><figure><img src="Images/Inkedhtmlcssjs_4.jpg" alt="4"><figcaption>HCJ4</figcaption></figure></a>',
  '<a href="http://"><figure><img src="Images/Inkedhtmlcssjs_5.jpg" alt="5"><figcaption>HCJ5</figcaption></figure></a>',
];

const pythonCarouselList = [
  '<a href="http://"><figure><img src="Images/InkedPython_1.jpg" alt="P1"><figcaption>P1</figcaption></figure></a>',
  '<a href="http://"><figure><img src="Images/InkedPython_2.jpg" alt="P2"><figcaption>P2</figcaption></figure></a>',
  '<a href="http://"><figure><img src="Images/InkedPython_3.jpg" alt="P3"><figcaption>P3</figcaption></figure></a>',
  '<a href="http://"><figure><img src="Images/InkedPython_4.jpg" alt="P4"><figcaption>P4</figcaption></figure></a>',
  '<a href="http://"><figure><img src="Images/InkedPython_5.jpg" alt="P5"><figcaption>P5</figcaption></figure></a>',
];

const $html_Css_Js = document.querySelectorAll("#HTML_CSS_JS_SELECTOR");

$html_Css_Js.forEach((li) => {
  li.addEventListener("click", () => {
    html_webpage_js();
  });
});

const $python = document.querySelector("#PYTHON_SELECTOR");

$python.addEventListener("click", python);

$leftButton.addEventListener("click", leftClick);

function html_webpage_js() {
  if (carouselActivation === true && currentCarouselList !== htmlCarouselList) {
    currentCarouselList = htmlCarouselList;
    carouselListCurrentPosition = 0;
    $carouselElements.innerHTML =
      currentCarouselList[carouselListCurrentPosition];
  } else if (carouselActivation === true) {
    carouselActivation = false;
    $carouselMain.setAttribute("style", "opacity:0");
  } else {
    currentCarouselList = htmlCarouselList;
    $carouselElements.innerHTML =
      currentCarouselList[carouselListCurrentPosition];
    carouselActivation = true;
    $carouselMain.setAttribute("style", "opacity:1");
  }
}

function python() {
  if (
    carouselActivation === true &&
    currentCarouselList !== pythonCarouselList
  ) {
    currentCarouselList = pythonCarouselList;
    carouselListCurrentPosition = 0;
    $carouselElements.innerHTML =
      currentCarouselList[carouselListCurrentPosition];
  } else if (carouselActivation === true) {
    carouselActivation = false;
    $carouselMain.setAttribute("style", "opacity:0");
  } else {
    currentCarouselList = pythonCarouselList;
    $carouselElements.innerHTML =
      currentCarouselList[carouselListCurrentPosition];
    carouselActivation = true;
    $carouselMain.setAttribute("style", "opacity:1");
  }
}

function leftClick() {
  if (carouselListCurrentPosition === 0) {
    return;
  } else {
    $carouselElements.innerHTML =
      currentCarouselList[carouselListCurrentPosition - 1];
    carouselListCurrentPosition = carouselListCurrentPosition - 1;
  }
}

$rightButton.addEventListener("click", rightClick);

function rightClick() {
  if (carouselListCurrentPosition === 4) {
    return;
  } else {
    $carouselElements.innerHTML =
      currentCarouselList[carouselListCurrentPosition + 1];
    carouselListCurrentPosition = carouselListCurrentPosition + 1;
  }
}

/* Carousel */

/* Preloader */

const allCarouselImageSource = [
  "Images/Portfolio_Site.jpg",
  "Images/Portfolio_webpage.png",
  "Images/Inkedhtmlcssjs_3.jpg",
  "Images/Inkedhtmlcssjs_4.jpg",
  "Images/Inkedhtmlcssjs_5.jpg", 
  "Images/InkedPython_1.jpg",
  "Images/InkedPython_2.jpg",
  "Images/InkedPython_3.jpg",
  "Images/InkedPython_4.jpg",
  "Images/InkedPython_5.jpg",
];
const preLoadedImages = [];

function preLoadImages() {
  allCarouselImageSource.forEach(preLoadImageSource);

  function preLoadImageSource(src) {
    const preImg = new Image();
    preImg.src = src;
    preLoadedImages.push(preImg);
  }
}

preLoadImages();
/* Preloader */
