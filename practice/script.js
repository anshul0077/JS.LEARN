let r1=document.querySelector("#r1")
let r2=document.querySelector("#r2")
let r3=document.querySelector("#r3")
let pp=document.querySelector(".wi")
let input=document.querySelectorAll('#tt')
let lowerText=document.querySelector("#lower-bar-text")
let upperText=document.querySelector("#upper-bar-text")
let dis=document.querySelector(".dis")
let h6=document.querySelector("h6")
let g1=document.querySelector("#get1")
let g2=document.querySelector("#get2")
let g3=document.querySelector("#get3")




function discreptionChange(dis, bb){
    if(bb==100){
        dis.innerHTML='"Congratulations "'

}
else if(bb==33){
        dis.innerHTML=`"More one step ahead, today!"`

}
else if(bb==66||bb==67){
    dis.innerHTML=`"Keep Going, You're making great progress!"`
}
}
function validate(){
input.forEach((item)=>{
if(item.value==""){
lowerText.style.color="red"
    
}
else{
    lowerText.innerHTML="you should set all of you goal"
}

        
})
}
validate()
let bb=0


let one=document.querySelector(".one")
let two=document.querySelector(".two")

let three=document.querySelector(".three")

one.addEventListener('keydown',(ee)=>{
if(ee.key==='Enter'){
console.log("enter");

    let value=one.value
    
    localStorage.setItem("Goal1",value)
    one.style.display="none"
    g1.innerHTML=localStorage.getItem("Goal1")
lowerText.style.display="none"
 
}
})
two.addEventListener('keydown',(ee)=>{
    if(ee.key==='Enter'){
    console.log("enter");
    lowerText.style.display="none"
        let value=two.value
        localStorage.setItem("Goal2",value)
        two.style.display="none"
    g2.innerHTML=localStorage.getItem("Goal2")
        
    
    }
    })
    three.addEventListener('keydown',(ee)=>{
        if(ee.key==='Enter'){
        console.log("enter");
        lowerText.style.display="none"
            let value=three.value
            localStorage.setItem("Goal3",value)
            three.style.display="none"
    g3.innerHTML=localStorage.getItem("Goal3")
        
        }
        })
let task=0
let cc= document.createElement('p');
cc.style.fontSize="12px"
cc.style.color='white'
cc.style.paddingLeft="12px"
pp.appendChild(cc)
r1.addEventListener("click",()=>{
    bb+=33
    console.log(bb);
    
   task+=1
   cc.innerHTML=`${task}/3 complete`;

 g1.style.textDecoration="line-through"
    g1.style.color="green"
    pp.style.width=`${bb}%`

 if(bb==100){
                upperText.innerHTML='congrats you complete all Goals ✅'
    
 }
else if(bb==33||bb==66||bb==67){
                upperText.innerHTML="keep going!"
    
}

discreptionChange(dis,bb)
    
    
    
    
})
r2.addEventListener('click',()=>{
    bb+=33
    console.log(bb);
        pp.style.width=`${bb}%`
        task+=1
        g2.style.textDecoration="line-through"
    g2.style.color="green"
        cc.innerHTML=`${task}/3 complete`;
        if(bb==100){
            upperText.innerHTML= 'congrats you complete all Goals ✅'
            
        }
       else if(bb==33 || bb==66 || bb==67 ){
                        upperText.innerHTML="just a step away, keep going!"
            
        }
        discreptionChange(dis,bb)
        

    
})
r3.addEventListener('click',()=>{
    bb+=34
    console.log(bb);
        pp.style.width=`${bb}%`
        task+=1
         g3.style.textDecoration="line-through"
    g3.style.color="green"
        cc.innerHTML=`${task}/3 complete`;
        if(bb==100){
            upperText.innerHTML='congrats you complete all Goals ✅'
            
        }
        
       else if(bb==34||bb==67 ||bb==33){
        upperText.innerHTML="Doing Well! "
        
    }
    discreptionChange(dis,bb)

})



//localstograge
