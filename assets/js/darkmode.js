// =====================================
// Dark Mode
// =====================================

const theme=document.getElementById("theme-toggle");

if(theme){

theme.onclick=()=>{

document.body.classList.toggle("light-theme");

localStorage.setItem(

"theme",

document.body.classList.contains("light-theme")

?

"light"

:

"dark"

);

};

}

window.onload=()=>{

const saved=

localStorage.getItem("theme");

if(saved==="light"){

document.body.classList.add("light-theme");

}

}