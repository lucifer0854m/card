// =====================================
// Custom Cursor
// =====================================

const cursor=document.querySelector(".cursor");

const cursor2=document.querySelector(".cursor2");

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

}

if(cursor2){

cursor2.style.left=e.clientX+"px";

cursor2.style.top=e.clientY+"px";

}

});