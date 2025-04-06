
let opt=require("./optModule")
let userOPT=require("./DATABASE")
let value1=opt()
let value2=userOPT()

function validation(){
    if(value1==value2){
        console.log("youare sucessfully logined ");
        
    }
    else{
        console.log("Please enter the valid opt");
        
    }
}

module.exports=validation