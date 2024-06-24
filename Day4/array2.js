// let marvel_heros=["IronMan","Spiderman","thor","CA"]


// let DC_hero=["Flash","superman","Batman"]

// let concat=marvel_heros.concat(DC_hero) //this will merge the two array
// // console.log(concat);  


// let arr=[1,2,4,5,[3,5,6],3,[100,200,[400,600,900]]]
// console.log(arr.flat(Infinity)); // this will returns the simple array rather then nested array


// let all_heros=[...DC_hero,...marvel_heros] // the spread operator (...) will spread all element of array 
// console.log(all_heros); 


// array.form  .of .isarray

console.log(Array.isArray("anshul")); // this will retuns the boolean value false
console.log(Array.from("anshul")); 
let score1=100
let score2=99
let score3=234
console.log(Array.of(score1,score2,score3));
