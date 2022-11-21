/*
Cargar contenido de sección proyectos: son 3
*/

async function changeTitles() {
  try {
    const response= await fetch("https://api.punkapi.com/v2/beers");
    const data= await response.json();
    const projectTitles = document.querySelectorAll(".projects-article-texts h3")
    for (i=0;i<projectTitles.length;i++) {
      const newTitle = data[Math.floor(Math.random() * data.length)].name;
      projectTitles[i].innerHTML = newTitle;
    }
  }
  catch (error) {
  console.log("Something went wrong!", error);
}
} 
changeTitles();

async function changeSubtitles() {
  try {
    const response= await fetch("https://api.punkapi.com/v2/beers");
    const data= await response.json();
    const projectSubtitles = document.querySelectorAll(".projects-article-texts p")
    for (i=0;i<projectSubtitles.length;i++) {
      const newSubtitle = data[Math.floor(Math.random() * data.length)].tagline;
      projectSubtitles[i].innerHTML = newSubtitle;
    }
  }
  catch (error) {
  console.log("Something went wrong!", error);
}
} 
changeSubtitles();

async function changeImages() {
  try {
    const response= await fetch("https://api.punkapi.com/v2/beers");
    const data= await response.json();
    const projectImages = document.querySelectorAll(".projects-article-image img")
    for (i=0;i<projectImages.length;i++) {
      const newImage = data[Math.floor(Math.random() * data.length)].image_url;
      projectImages[i].src = newImage;
    }
  }
  catch (error) {
  console.log("Something went wrong!", error);
}
} 
changeImages();

