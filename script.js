/*=========================================
        DEEPAK LODHI PORTFOLIO
        PREMIUM JAVASCRIPT
==========================================*/

/*==========================
PRELOADER
==========================*/

window.addEventListener("load", () => {

const loader =
document.getElementById("page-loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

}

});


/*==========================
SMOOTH NAVIGATION
==========================*/

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/*==========================
HEADER SCROLL
==========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


/*==========================
TYPEWRITER
==========================*/

if(document.querySelector(".typing")){

new Typed(".typing",{

strings:[

"Center Manager",

"Executive Admin",

"Python Developer",

"Machine Learning",

"Data Analyst",

"AWS Cloud",

"SQL Developer"

],

typeSpeed:70,

backSpeed:40,

backDelay:1800,

loop:true

});

}


/*==========================
SCROLL REVEAL
==========================*/

ScrollReveal({

distance:"70px",

duration:1600,

delay:250,

reset:false

});

ScrollReveal().reveal(

".hero-left",

{

origin:"left"

}

);

ScrollReveal().reveal(

".hero-right",

{

origin:"right"

}

);

ScrollReveal().reveal(

".section-header",

{

origin:"top"

}

);

ScrollReveal().reveal(

".glass-card",

{

interval:120,

origin:"bottom"

}

);

ScrollReveal().reveal(

".project-card",

{

interval:150,

origin:"bottom"

}

);

ScrollReveal().reveal(

".service-card",

{

interval:150,

origin:"bottom"

}

);

ScrollReveal().reveal(

".timeline-card",

{

interval:180,

origin:"left"

}

);

ScrollReveal().reveal(

".achievement-card",

{

interval:120,

origin:"bottom"

}

);


/*==========================
COUNTER
==========================*/

const counters=document.querySelectorAll(".counter");

const speed=220;

counters.forEach(counter=>{

const update=()=>{

const target=

+counter.getAttribute("data-target");

const count=

+counter.innerText;

const increment=

target/speed;

if(count<target){

counter.innerText=

Math.ceil(count+increment);

setTimeout(update,15);

}else{

counter.innerText=target;

}

};

update();

});


/*==========================
SKILL BARS
==========================*/

const skills=document.querySelectorAll(

".progress-fill"

);

window.addEventListener("scroll",()=>{

skills.forEach(skill=>{

const top=

skill.getBoundingClientRect().top;

if(top<window.innerHeight-80){

const width=

skill.dataset.width;

skill.style.width=

width+"%";

}

});

});


/*==========================
ACTIVE MENU
==========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(

"nav ul li a"

);

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=

section.offsetTop-200;

if(pageYOffset>=sectionTop){

current=

section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("active");

}

});

});
/*==================================================
            DARK MODE
==================================================*/

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-theme");

const icon=themeBtn.querySelector("i");

if(document.body.classList.contains("light-theme")){

icon.className="fas fa-sun";

}else{

icon.className="fas fa-moon";

}

});

}

/*==================================================
            CUSTOM CURSOR
==================================================*/

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

document.querySelectorAll("a,button,.glass-card").forEach(el=>{

el.addEventListener("mouseenter",()=>{

if(cursor2){

cursor2.style.transform="translate(-50%,-50%) scale(1.8)";

}

});

el.addEventListener("mouseleave",()=>{

if(cursor2){

cursor2.style.transform="translate(-50%,-50%) scale(1)";

}

});

});

/*==================================================
            EMAIL JS
==================================================*/

emailjs.init("h0h5pAncFfz4aoQlp");

const contactForm=document.getElementById("contact-form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const params={

from_name:
document.getElementById("name").value,

from_email:
document.getElementById("email").value,

subject:
document.getElementById("subject").value,

message:
document.getElementById("message").value

};

emailjs.send(

"service_f87eai4",

"template_vm4lz0k",

params

)

.then(()=>{

alert("Message Sent Successfully!");

contactForm.reset();

})

.catch((err)=>{

console.log(err);

alert("Message Failed.");

});

});

}

/*==================================================
            SCROLL TO TOP
==================================================*/

const topBtn=document.querySelector(".float-btn:last-child");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";

topBtn.style.pointerEvents="all";

}else{

topBtn.style.opacity="0";

topBtn.style.pointerEvents="none";

}

});

/*==================================================
        SCROLL PROGRESS BAR
==================================================*/

const progress=document.createElement("div");

progress.id="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=

(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});

/*==================================================
            PARALLAX IMAGE
==================================================*/

const heroImage=document.querySelector(".image-box");

window.addEventListener("mousemove",(e)=>{

if(heroImage){

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=

`rotateY(${x}deg) rotateX(${y}deg)`;

}

});

/*==================================================
            FLOATING ICONS
==================================================*/

document.querySelectorAll(".float-icon").forEach((icon,index)=>{

icon.style.animation=

`floating ${4+index}s ease-in-out infinite`;

});

/*==================================================
            RANDOM GLOW
==================================================*/

setInterval(()=>{

document.querySelectorAll(".glass-card").forEach(card=>{

card.style.boxShadow=

`0 20px 60px rgba(${Math.floor(Math.random()*100)+80},58,237,.15)`;

});

},2500);

/*==================================================
            PARTICLES
==================================================*/

for(let i=0;i<25;i++){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=

5+Math.random()*8+"s";

particle.style.animationDelay=

Math.random()*5+"s";

document.body.appendChild(particle);

}

/*==================================================
        PROJECT IMAGE TILT
==================================================*/

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/18;

const rotateY=(rect.width/2-x)/18;

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

/*==================================================
            AUTO YEAR
==================================================*/

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==================================================
            LOADER ANIMATION
==================================================*/

window.onload=()=>{

const loader=document.getElementById("page-loader");

if(loader){

loader.style.transition="1s";

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},1000);

}

};

/*==================================================
            END
==================================================*/
