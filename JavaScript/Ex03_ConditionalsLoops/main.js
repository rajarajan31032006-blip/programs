let events=[
{name:"Workshop",upcoming:true,seats:10},
{name:"Seminar",upcoming:false,seats:5},
{name:"Conference",upcoming:true,seats:0}
];

events.forEach(event=>{

if(event.upcoming && event.seats>0){
console.log(event.name);
}

});

try{

let seats=5;

if(seats<=0){
throw "No Seats Available";
}

console.log("Registration Successful");

}

catch(error){
console.log(error);
}