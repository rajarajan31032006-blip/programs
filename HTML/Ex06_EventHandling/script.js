function validatePhone(){
let phone=document.getElementById("phone").value;

if(phone.length!=10){
alert("Invalid Phone Number");
}
}

function showFee(fee){
document.getElementById("fee").innerHTML=
"Fee : ₹"+fee;
}

function confirmSubmit(){
alert("Feedback Submitted");
}

function enlargeImage(){
document.getElementById("img").style.width="300px";
}

function countChars(){
let count=document.getElementById("feedback").value.length;

document.getElementById("count").innerHTML=
count+" Characters";
}