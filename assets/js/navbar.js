// =====================================
// Navbar
// =====================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

if(menu){

menu.onclick=()=>{

menu.classList.toggle("active");

nav.classList.toggle("active");

}

}