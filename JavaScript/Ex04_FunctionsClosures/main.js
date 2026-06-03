function addEvent(name){
console.log(name+" Added");
}

function registerUser(name){
console.log(name+" Registered");
}

function filterEventsByCategory(events,callback){
return events.filter(callback);
}

function counter(){

let total=0;

return function(){
total++;
return total;
};

}

let count=counter();

console.log(count());
console.log(count());

addEvent("Workshop");
registerUser("John");

let events=["Music","Workshop","Music"];

let result=filterEventsByCategory(
events,
event=>event==="Music"
);

console.log(result);