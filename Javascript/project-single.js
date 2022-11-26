/*
Fecha actual en página de proyecto
*/

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

document.getElementById("current-date").innerHTML = day + "/" + month + "/" + year;

/*
Cargar contenidos: son 3 (¿cómo hacer que no se repita?)... pero ya vendrá del index.js
*/

//para cargar el proyecto principal, con el parámetro en la url

const urlString = window.location.search

const urlParams = new URLSearchParams(urlString);

const randomValue = urlParams.get('positionBeer');

async function updateMainProject() {
    try {
      const response= await fetch("https://api.punkapi.com/v2/beers");
      const data= await response.json();
      // las variables a sustituir
      const mainProjectTitle = document.querySelector("#the-project h2");
      const mainProjectSubtitle = document.querySelector("#the-project-text1");
      const mainProjectImageBack = document.querySelector("#the-project-image-back");
      const mainProjectImageFront = document.querySelector("#the-project-image-front");
      const mainProjectText1 = document.querySelector("#description1");
      const mainProjectText2 = document.querySelector("#description2");
      
      //voy sustituyendo con el valor que le toca
      const newTitle = data[randomValue].name;
      mainProjectTitle.innerHTML = newTitle;
      
      const newSubtitle = data[randomValue].tagline;
      mainProjectSubtitle.innerHTML = newSubtitle;

      const newImageBack = data[randomValue].image_url;
      mainProjectImageBack.src = newImageBack;

      const newImageFront = data[randomValue].image_url;
      mainProjectImageFront.src = newImageFront;

      const newText1 = data[randomValue].description;
      mainProjectText1.innerHTML = `<span style="color:blue">Description:</span> ${newText1}`;

      const newText2 = data[randomValue].brewers_tips;
      mainProjectText2.innerHTML = `<span style="color:blue">Tips:</span> ${newText2}`;

    }
    catch (error) {
    console.log("Something went wrong!", error);
  }
  }

  updateMainProject()
  