let events=["Music Show","Workshop"];

events.push("Seminar");

console.log(events);

let musicEvents=events.filter(
event=>event.includes("Music")
);

console.log(musicEvents);

let cards=events.map(
event=>"Event : "+event
);

console.log(cards);