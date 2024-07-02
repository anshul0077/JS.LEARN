//for of

let myArray=[1,2,3,4,5,6,7,8,9]
let object1={
    name:"Anshul",
    Age:40,
    email:"anshul@gmail.com"
}

for (const arr of myArray) {
    console.log(arr);
}

let greeting="Hello world"
for (const greet of greeting) {
 
    console.log(greet);
}

// for (const obj  of object1) {
//     // console.log(obj);   object are not iterable
// }
let obj1={
    userName:"anshul",
    password:805435343,
    phone:839738923,
}

for (const key in obj1) {
console.log(`${key} : ${obj1[key]} `);
}
for (const key in myArray) {
  console.log(myArray[key]);
}

//foreach loop

myArray.forEach(element => {
    console.log(element);
});
let brr=["hello","hii","Welcome","Namaste"]
brr.forEach((elem,ind,arr)=>{
    console.log(elem,ind,arr);
})

let obArray=[
    {name:"anshul",
age:20},
{name:"aditya",
age:20},
{name:"abhay",
age:21},
{name:"shubham",
age:2},
{name:"shekhar",
age:20},
{name:"abhi",
age:21},

]
obArray.forEach( elem=>{
    console.log(elem.name);
})