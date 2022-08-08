
let d = new Date();
console.log(d);

//console.log(d.toUTCString());
console.log(d.toDateString());
console.log(d.getDate());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());
console.log(d.toTimeString());
console.log(d.toJSON());
console.log(d.toUTCString());


let d1=new Date("12-03-2011");
console.log(d1);

let dd=new Date("2011-09-12T12:30:00Z");
console.log("adding Date and time  :  "+dd);

const d2 = new Date("Jan 25 2015 ");
console.log("Long Dates : "+d2);

const d3 = new Date("January 25 2015 ");
console.log("Long Dates : "+d3);

const d4 = new Date("25 January 2015 ");
console.log("Long Dates : "+d4);

const d5 =Date.parse("March 21, 2012");
console.log("parse Dates (milisec) : "+d5);

let msec = Date.parse("12-08-13");
const d6 = new Date(msec);
console.log("Pasres Dates :"+d6);

let ms = Date.now();
console.log(ms);
let d7 = new Date(1657710276046);
console.log(d7);