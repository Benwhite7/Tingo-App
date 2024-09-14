let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let closeMenuMobile = document.querySelector(".close-menu-mobile");
let bodyMenuMobile = document.querySelector(".menu-navbar-mobile");


menu.addEventListener("click", desplegarMenu);
closeMenuMobile.addEventListener("click", alternarNavBar);

function desplegarMenu() {
    body.classList.add("prevent-scroll");
    bodyMenuMobile.classList.remove("toLeft");
}
    
function alternarNavBar() {
    body.classList.remove("prevent-scroll");
    bodyMenuMobile.classList.add("toLeft");
}