
let opt=require("./optModule")
let userOPT=require("./DATABASE")
function checkingveri (opt,userOPT){
if(userOPT==opt){
    return "You are sucessfully logined"
}
else{
    return "Enter the valid opt"
}
}
module.exports=checkingveri