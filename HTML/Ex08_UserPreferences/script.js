function savePreference(){
let event=document.getElementById("eventType").value;

localStorage.setItem("event",event);
}

function loadPreference(){
let event=localStorage.getItem("event");

if(event){
document.getElementById("eventType").value=event;
}
}

function clearData(){
localStorage.clear();
sessionStorage.clear();
}