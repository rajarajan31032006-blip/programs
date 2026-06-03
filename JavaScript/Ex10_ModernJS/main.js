const event={
name:"Workshop",
date:"20-06-2026"
};

const {name,date}=event;

console.log(name);
console.log(date);

function display(msg="Welcome"){
console.log(msg);
}

display();

let events=["Music","Workshop"];

let copiedEvents=[...events];

console.log(copiedEvents);