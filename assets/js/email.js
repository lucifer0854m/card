// =====================================
// EmailJS
// =====================================

emailjs.init("YOUR_PUBLIC_KEY");

const form=document.getElementById("contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

emailjs.send(

"YOUR_SERVICE_ID",

"YOUR_TEMPLATE_ID",

{

from_name:

document.getElementById("name").value,

from_email:

document.getElementById("email").value,

subject:

document.getElementById("subject").value,

message:

document.getElementById("message").value

}

)

.then(()=>{

alert("Message Sent!");

form.reset();

})

.catch(()=>{

alert("Failed!");

});

});

}