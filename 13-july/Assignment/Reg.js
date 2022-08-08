let string = "Abc cd abc and abc";

let reg = /abc/g;

// let index = string.search(reg); 
// console.log("search index =",index);

// let res = string.replace(reg,"ABC");
// console.log(res);

let res = string.match(reg); //return an Array
console.log(res);


while(reg.test(string))
{
      console.log(string.search(reg));
}

// let result = reg.exec(string); //return an Object or array
// console.log(result);

// let result = reg.test(string);  //return true and false
// console.log(result);








