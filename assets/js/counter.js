// =====================================
// Counter Animation
// =====================================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=

+counter.dataset.target;

const count=

+counter.innerText;

const inc=target/200;

if(count<target){

counter.innerText=

Math.ceil(count+inc);

setTimeout(update,10);

}else{

counter.innerText=target;

}

}

update();

});