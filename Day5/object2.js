// singleton object
const obj = new Object() 
// console.log(obj);  // empty object {}



// object literals 

let obj1 = {}

obj1.id="1234Abc"
obj1.password="122343fxcvr"
console.log(obj1);  // normal object output

//nested object

let tinder={
    email:"anshul345@gmail.ccm",
    userName:{
      userFullName:{
        firstName:"Anshul",
        LastName:"Choudhary"
      }
    }
}
console.log(tinder.userName.userFullName.firstName); // accesing the nested object propreties

 
//merging the objects

let ob1={1:"a",2:"b",3:"c"}
let ob2={4:"a",5:"b",6:"c"}
let ob3={ob1,ob2}  // not used


let ob4={...ob1,...ob2} // mostly used

let ob5=Object.assign({},ob1,ob2)  // less use
console.log(ob3);
console.log(ob4);
console.log(ob5);


console.log(Object.keys(obj1));  // it return only keys in array type
console.log(Object.values(obj1)); // it return only values of object  in array type 
console.log(Object.entries(obj1)); // it will return key and value in wrapped array


// check the key is exist or not

console.log(obj1.hasOwnProperty('password')); //true
 

let data=[
    {id:"1234",email:"anshul29"},
    {id:"12",email:"anshdsfgsfgul29"},
    {id:"12345",email:"ans5555erhul29"},
]
// accessing array of object

console.log(data[2].id);
// destructuring the object

const {email:Ml}=tinder // giving iwn name  here and directly access
console.log(Ml);

const {password:pass}=obj1
console.log(pass);
