let number=0

console.log(number);  // 0
console.log(typeof number); // number

// after conversion

let cast=String(number)  
console.log(cast);         // "0"   
console.log(typeof cast);    // string
 

let typecast=Number(number)     
console.log(typecast);        //0
console.log(typeof typecast); //number


let typecasting=Boolean(number) 
console.log(typecasting);         //false
console.log(typeof typecasting);  //boolean


console.log( "1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"



let str1="Hello "
let str2= " Budys"
let str3=str1 + str2
console.log(str3); // string contactination 

//using backticks we can add the dynamic data
let username="Buddy"
let day=2

console.log(`Hello ${username} welcome to the day ${day} of javascript`);