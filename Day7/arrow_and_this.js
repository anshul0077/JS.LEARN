// this 

let username={
    name:"Anshul",
    Age:20,

    welcomeMessage:function welcomeMessage(){
        console.log(`${this.name},hello`);
        console.log(this);  // this keyword only used in function
    }
}

username.welcomeMessage()
username.name="Sam"
username.welcomeMessage()

// arrow function



//  myfun=()=>{
// console.log("hello");
// }
// myfun()

// another method

let chai=(a,b)=>{
    return a+b
}
console.log(chai(5,6))

//implicit return

let code=(a,b) => a+b  // js engine automatically add return in this syntax
console.log(code(4,4));





//   ++++++++++++IIFE++++++++++++++++++++++++++++++++++++++

(function maths(){ // named iife
    console.log(Math.round(44.9));
})();                                 // adding two iife function add end statement ";" important

( ()=>{
    console.log("Hii,buddy");
})();

// passing arrguments in iife function

(Three=(name)=>{
console.log(`${name},welcome `);
})("Anshul")   // arrguments

