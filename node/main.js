let random = require("./optModule")
let files=require("fs")

files.readFile('./Myfile.txt','utf8',(err,data)=>{
    if(err){
        console.log("File cannot be read",err)
    }
    else{
        console.log("Here is your file data::--",data)
    }
})
console.log(files);

// console.log(random());
