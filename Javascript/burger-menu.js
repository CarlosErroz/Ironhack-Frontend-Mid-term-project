/*
Menú hamburguesa
*/

const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const burgerSpan = document.querySelectorAll(".burger-span");

burgerMenu.addEventListener("click", function() {
    navMenu.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    burgerSpan.forEach(el => el.classList.toggle("active"));
})