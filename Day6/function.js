// function defination
function myfun(){
console.log("H");
console.log("E");
console.log("L");
console.log("L");
console.log("O");

}

myfun // reference

// myfun()// execution

function addTwoNumbers(a,b){
let result=a+b
return result
}
let rr=addTwoNumbers(1,4)
console.log(rr);

function loginUser(name){
return `${name}  logged in`
}
let re=loginUser("4")
console.log(re);

//default arrgument

function defaultArgs(Username="Buddy"){
    return `${Username} loggedIn`
}
console.log(defaultArgs("Anshul"));   // Anshul LoggedIn
console.log(defaultArgs());         //Buddy LoggedIn

//rest operator


function calculateCart(...num1){  //rest operator 
    return num1
}
console.log(calculateCart(400,500,600,700,800)); //[400,500,600,700,800]


// passing object as arrguments

function userdetails( anyobject ){

    return `User name is ${anyobject.name} and Age is ${anyobject.age} `
}
console.log(userdetails({
    name:"Anshul",
    age:20
}));

// passing array an arrgument

function arrayfunc(myarray){
    return  myarray[2]
}
console.log(arrayfunc([
    400,500,6005,565
]));