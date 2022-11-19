/*
Fecha actual en página de proyecto
*/

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

document.getElementById("current-date").innerHTML = day + "/" + month + "/" + year;

/*
Cargar el contenido que debería venir ser + otros 3
*/
