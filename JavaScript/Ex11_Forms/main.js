document.getElementById("form")
.addEventListener("submit",function(event){

event.preventDefault();

let name=this.elements["name"].value;
let email=this.elements["email"].value;

if(name==="" || email===""){
document.getElementById("msg").innerHTML=
"Fill all fields";
return;
}

document.getElementById("msg").innerHTML=
"Registration Successful";

});