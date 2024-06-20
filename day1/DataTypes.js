// data type is  basically  used to show the type of data stored in variable

//there are two types of datatypes in javascript


//  1) primitives

/*
a) Number
b) boolean
c) bigInt
d) string
e) Symbol
f) Null
g) undefined
*/

//  2) Non- Primitives

/*
 a) objects
 b) Arrays
 c)Functions
*/

// let discuss about primitives datatypes


let firstName="Anshul";
let lastName="choudhary"
let isMale= true;
let age=20;
let userId;
let empty=null

let largeNumber=1234567891234567n;



//typeof operator returns the type of variable


console.log(typeof(firstName));     //string
console.log(typeof(lastName));     //string
console.log(typeof(largeNumber)); //bigint
console.log(typeof(isMale));     //boolean
console.log(typeof(age));       //number
console.log(typeof(empty));    //object
console.log(typeof(userId));  //undefined

