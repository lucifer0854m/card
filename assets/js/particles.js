// =====================================
// Floating Particles
// =====================================

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=

4+Math.random()*6+"s";

p.style.animationDelay=

Math.random()*4+"s";

document.body.appendChild(p);

}