let container=document.querySelector("#events");

let card=document.createElement("div");

card.innerHTML="Workshop Event";

container.appendChild(card);

function register(){
card.innerHTML="Registered Successfully";
}