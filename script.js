
const button = document.querySelector(".hamburger-1");
const navbar = document.querySelector(".navbar-links-ul");

button.addEventListener("click",() =>{
    navbar.classList.toggle("open");
})