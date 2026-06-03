function ready(){
document.getElementById("msg").innerHTML=
"Video Ready To Play";
}

window.onbeforeunload=function(){
return "Form not completed";
};