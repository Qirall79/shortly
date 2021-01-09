const burger = document.querySelector(".burger-logo");
const nav = document.querySelector(".burger-nav");

burger.addEventListener("click", ()=>{
    nav.classList.toggle("display");
})