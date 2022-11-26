/*
Cargar contenido de sección proyectos: son 3
*/
async function changeContent() {
  try {
    const response= await fetch("https://api.punkapi.com/v2/beers");
    const data= await response.json();
    // las 4 variables a sustituir
    const projectTitles = document.querySelectorAll(".projects-article-texts h3");
    const projectSubtitles = document.querySelectorAll(".projects-article-texts p");
    const projectImages = document.querySelectorAll(".projects-article-image img");
    const projectLinks = document.querySelectorAll(".projects-article-texts a");
    for (i=0;i<projectTitles.length;i++) {
      const randomPosition = Math.floor(Math.random() * data.length);
      const newTitle = data[randomPosition].name;
      projectTitles[i].innerHTML = newTitle;
      const newSubtitle = data[randomPosition].tagline;
      projectSubtitles[i].innerHTML = newSubtitle;
      const newImage = data[randomPosition].image_url;
      projectImages[i].src = newImage;
      projectLinks[i].href = `/project-single.html?positionBeer=${randomPosition}`;
    }
  }
  catch (error) {
  console.log("Something went wrong!", error);
}
} 
changeContent();


/* antiguo código con las funciones separadas de cambiar subtítulos e imágenes que junté en una misma función
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
*/

/*
Verificación formulario de email
*/

const formulario = document.getElementById("questions-form");

const urlQuestionsForm ="https://jsonplaceholder.typicode.com/posts";

// función para hacer el fetch-post
const postEmail = async () => {
  const newEmail = new FormData(formulario)
  try {
    const response = await fetch (urlQuestionsForm, {
      method: "POST",
      body: JSON.stringify(newEmail)
    })
    if (response.ok) {
      const data= await response.json();
      if (data) {
        const message = document.getElementById('message-ok-submit');
        message.style.display = 'block';
      }
      else {
        const message = document.getElementById('message-ko-submit');
        message.style.display = 'block';
      }
    } else {
      const message = document.getElementById('message-ko-submit');
      message.style.display = 'block';
    }
  } catch(error) {
    console.log(error);
  }
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  postEmail();
  })

