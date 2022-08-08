

let string ="  ABCDEF GHIJ KLMNOP";
let len =string.length;
console.log(len);

let str=string.slice(0,15);
console.log(str);

let st=string.slice(-15,-9);//when index is negative then count from last .
console.log("fromlast = ",st);//but its not start from -18 its from -9

let s = string.slice(9);//when its have one parameter then it start from 9 index
console.log("single parameter",s);

 
let char=string.charAt(14);
console.log(char);

let string2 =" abcde"; 
let newStr = string.concat(string2);
console.log(newStr);

let index=string.indexOf("M");
console.log("Index OF M ="+index);

let arrStr = string.split(" ");
console.log(arrStr);

let arrS= string.split("");
console.log(arrS);

let newString=string.trim(); //it remove the white spaces at Start of string and end of string only
console.log(newString);

string.replace("ABCD","GHIJ");
console.log(string);
