const humBurgerMenu=document.querySelector("#hum-burger-menu");
const sideBar=document.querySelector(".side-bar");
const overlay=document.querySelector(".overlay");

humBurgerMenu.onclick=()=>{
    sideBar.classList.add("side-bar-active");
    overlay.classList.add("overlay-active");
}

overlay.onclick=()=>{
    sideBar.classList.remove("side-bar-active");
    overlay.classList.remove("overlay-active");
}