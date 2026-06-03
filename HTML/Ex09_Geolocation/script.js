function findLocation(){

navigator.geolocation.getCurrentPosition(
showPosition,
showError,
{
enableHighAccuracy:true,
timeout:5000
}
);

}

function showPosition(position){

document.getElementById("location").innerHTML=
"Latitude : "
+position.coords.latitude+
"<br>Longitude : "
+position.coords.longitude;

}

function showError(error){

document.getElementById("location").innerHTML=
error.message;

}