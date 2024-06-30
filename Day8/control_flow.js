//if 

let temperature =40
if(temperature<40){
    console.log("it's not too hot today");

}
else{
    console.log("its's too hot today");

}


let raning=true
if(raning){
    console.log("remember to take your umbrella!");
}
else{
    console.log("no need for an  umbrella!");

}

//else if 

let marks= 90
if(marks<=50){
    console.log("Grade: D");
}
else if(marks<=70){
    console.log("Grade: C");

}
else if(marks<=85){
    console.log("Grade: B");

}
else if(marks<=95){
    console.log("Grade: A");

}
else{
    console.log("Topper");
}
// single line if statement
let age=20
if(age>=20) console.log("You are able to start the business");

// logical operators

let username=""
let password=123457897;
let googleLoggedIn=true
let emailLoggedIn=false

if(username && password){
    console.log("User are logged in");
}
else if(googleLoggedIn || emailLoggedIn){
console.log("user logged in by email or gmail");
}
else{
    console.log("something went wrong");
}
//switch statement
             // note if don't use the break statement then after the match case it will log all the next case except default

let day= 4;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
        case 2:
        console.log("Monday");
        break;
        case 3:
        console.log("Tuesday");
        break;
        case 4:    
        console.log("Wednesday");
        break;
        case 5:
        console.log("Thursday");
        break;
        case 6:
        console.log("friday");
        break;
        case 7:
        console.log("Saturday");
        break;


    default:
        console.log("Wrong input");
        break;
}


// Truthy and falsy values 

// fasly => 0 ,null ,undefined,"", -0, false ,nan
//truthy => "false",true,1,-1,object ,array

// nullish coalescing Operator
//note=> this will used to handle the undefined and null 
let carCompany="Toyota"??"tata"  // in this the first value is assign to the variable
console.log(carCompany);

let nullish=null??40  //in this case the second is assign to the variable
console.log(nullish);
let nullish2=90??undefined
console.log(nullish2);

// ternary operator


let speedLimit=60;
let speed=70
let result= speed>60 ? console.log("Fine"):console.log("Not fine");