// =====================================
// Project Cards
// =====================================

document.querySelectorAll(".project-card")

.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=

card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=

(y-rect.height/2)/18;

const rotateY=

(rect.width/2-x)/18;

card.style.transform=

`perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-12px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0) rotateY(0)";

});

});