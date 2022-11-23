/*
Cargar contenidos: son 6... ya vendrá del index.js
*/


/*
Botón cargar extra-contenidos: otros 6 (no toca los anteriores pero pueden repetirse y además la 2º vez sí los cambia)
*/

function createProject() {
    const base = document.querySelector(".projects-grid");
    const article = document.createElement("article");
    base.appendChild(article);
    const div1 = document.createElement("div");
    div1.className="projects-article-image projects-article-image-new";
    const image = document.createElement("img");
    image.src="/Project-assets/projects-section/1.jpg";
    article.appendChild(div1);
    div1.appendChild(image);    
    const div2 = document.createElement("div");
    div2.className="projects-article-texts projects-article-texts-new";
    article.appendChild(div2);
    const title = document.createElement("h3");
    title.textContent ="Title";
    div2.appendChild(title);
    const subtitle = document.createElement("p");
    subtitle.textContent ="Subtitle";
    div2.appendChild(subtitle);
    const link = document.createElement("a");
    link.href="/project-single.html";
    link.target="_blank>Learn More";
    link.textContent="Learn More";
    div2.appendChild(link);
}

const loadProjects = document.querySelector("#projects-button");

loadProjects.addEventListener("click", function() {
  for (i=0;i<6;i++) {
    createProject();
  }
  newchangeContent();
})

// nueva función para cargar contenidos de los nuevos proyectos y que no machaque a los originales

async function newchangeContent() {
  try {
    const response= await fetch("https://api.punkapi.com/v2/beers");
    const data= await response.json();
    // las 4 variables a sustituir
    const projectTitles = document.querySelectorAll(".projects-article-texts-new h3");
    const projectSubtitles = document.querySelectorAll(".projects-article-texts-new p");
    const projectImages = document.querySelectorAll(".projects-article-image-new img");
    const projectLinks = document.querySelectorAll(".projects-article-texts-new a");
    for (i=0;i<projectTitles.length;i++) {
      const randomPosition = Math.floor(Math.random() * data.length);
      const newTitle = data[randomPosition].name;
      projectTitles[i].innerHTML = newTitle;
      const newSubtitle = data[randomPosition].tagline;
      projectSubtitles[i].innerHTML = newSubtitle;
      const newImage = data[randomPosition].image_url;
      projectImages[i].src = newImage;
    }
  }
  catch (error) {
    console.log("Something went wrong!", error);
  }
  }