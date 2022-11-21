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
