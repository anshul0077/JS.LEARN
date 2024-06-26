// objects in JS
// object basically hold the various type of data like string ,number, boolean , symbol,function etc

// singleton object
// Object.create  we can create the singleton object with object constructor

// creating first object
let mysym=Symbol("key1")

let myobj={
    name:"Anshul",       
    Location:"Palampur",
    [mysym]:"My key 1", // if we don't give in [] it's type is string but in this case it is treated as symbol
    age:20,
    isLoggedIn:true,
    Email:"anshul220@gmail.com",
    "full name": "Anshul choudhary" // we can't acces this using dot operator we can access by using second method

}  
// the object will be in key and value format

//access the object properties

console.log(myobj.name); //Anshul
console.log(myobj.Email); //anshul220@gmail.com

//second method to access the properties
console.log(myobj["full name"]); //Anshul Choudhary // *** important
console.log(myobj["name"]);     //Anshul
console.log(myobj["Location"]); //palampur
console.log(myobj[mysym]);


// if we do not change the value of object then use freeze()

//******  Object.freeze(myobj)  

//we can change the value 
myobj.name="Abhay"
myobj.Email="abhay234@gmail.com"
console.log(myobj.name); //abhay
console.log(myobj.Email);//abhay234@gmail.com

// adding function in object
myobj.greet=function(){
    console.log("hello");
}
myobj.greeting=function(){
    console.log(`hello,${this.name}`);
}
console.log(myobj.greet());
console.log(myobj.greeting());




