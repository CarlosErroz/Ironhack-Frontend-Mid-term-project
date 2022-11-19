/*
Fecha actual en página de proyecto
*/

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
document.getElementById("current-date").innerHTML = day + "/" + month + "/" + year;

/*
Menú hamburguesa
*/