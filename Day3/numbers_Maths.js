
// numbers in javascript

let myNumber=5900;  // we can define  number like this

console.log(myNumber);  // 5900

let anotherNumber=new Number(60)  // another method to define number
console.log(anotherNumber);     // [ Number : 60]

//some properties regarding numbers

console.log(anotherNumber.toString());  // tostring method convert number to string 
console.log(anotherNumber.toString().length);  //  2 => we can access the properties of string
console.log(anotherNumber.toFixed(2));  // 60.00 
console.log(anotherNumber.valueOf());// it will returns the value of the variable=> x=20 x.valueof=20 


let num=1000000
console.log(num.toLocaleString('en-In')) // it will add the  commas in us standard by default we can       change   it indian standart by passing arrguments 'en-In'


let floatnumber=168.8
console.log(floatnumber.toPrecision(3)); // 169


//+++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++



console.log(Math.abs(-4)); // it will convert the negative value to postitive value but not +  to -
console.log(Math.sqrt(25));  // 5
console.log(Math.round(22.5)); //23
console.log( Math.ceil(44.2)); // 45
console.log( Math.floor(44.7)); // 44
console.log( Math.max(45,78,45,88,54)); // 88
console.log( Math.min(78,45,21,41)); //21

console.log(Math.random()) // it will returns random numbers everytime  the value form 0 to 1
console.log(Math.random()*10)+1;  // it will returns random number from 1 to 10
console.log(Math.floor(Math.random()*10)+1);  

let max=20
let min=10
console.log(Math.floor(Math.random() * (max - min + 1)) + min );
