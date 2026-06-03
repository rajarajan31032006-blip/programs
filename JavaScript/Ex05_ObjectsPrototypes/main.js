function Event(name,seats){

this.name=name;
this.seats=seats;

}

Event.prototype.checkAvailability=function(){

if(this.seats>0){
return "Seats Available";
}

return "Full";

};

let e1=new Event("Workshop",20);

console.log(e1.checkAvailability());

Object.entries(e1).forEach(item=>{
console.log(item[0],item[1]);
});