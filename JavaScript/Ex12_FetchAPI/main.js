function sendData(){

setTimeout(()=>{

fetch(
"https://jsonplaceholder.typicode.com/posts",
{
method:"POST",
body:JSON.stringify({
name:"John"
}),
headers:{
"Content-type":"application/json"
}
}
)
.then(response=>response.json())
.then(data=>{
document.getElementById("result").innerHTML=
"Success";
})
.catch(error=>{
document.getElementById("result").innerHTML=
"Failed";
});

},2000);

}