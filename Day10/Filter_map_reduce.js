let arr=["ironman","spiderman","cAmerica","Antman"]
arr.forEach((e)=>{   // foreach doesnot return value
    console.log(e);
})

let num=[1,2,3,4,5,6,7,8,9,10] 
let ne= num.filter((e)=>(e>3))
console.log(ne);
num.forEach((e)=>{
    if(e>4){
        console.log(e);
    }
})



const book=[
    {
        title:"Book one", genre:"fiction",publish:1981,edition:2004
    },
    {
        title:"Book two", genre:"Non-fiction",publish:1992,edition:2008
    },
    {
        title:"Book three", genre:"history",publish:1999,edition:2007
    },
    {
        title:"Book four", genre:"non-fiction",publish:1989,edition:2010
    },
    {
        title:"Book five", genre:"science",publish:2009,edition:2014
    },
    {
        title:"Book six", genre:"fiction",publish:1987,edition:2010
    },
    {
        title:"Book seven", genre:"history",publish:1986,edition:1996
    },
    {
        title:"Book eight", genre:"science",publish:2011,edition:2016
    },
    {
        title:"Book nine", genre:"Non-fiction",publish:1981,edition:1989
    }
]
let gen= book.filter((e)=>e.genre=="history")    // filter retrns only true value
// console.log(gen);       
let user=book.filter((e)=>e.publish>=1996 && e.genre==="history")
console.log(user);

////////////////////////////////////////////////  M A P  /////////////////////////

let myNum=[1,2,3,4,5,6,7,8,9,10]
let newNum=myNum.map((e)=> e>=7)       // map return both value true and false
console.log(newNum);

// chaining

let otherNum=myNum.map((e)=> e*10).map((e)=> e+1).filter((e)=>e>=40)
console.log(otherNum);


// reduce
// let acc=0
 let result=myNum.reduce((acc,init)=>acc+init)
 console.log(result);

 let shopingcart=[
    {
        item:"Pen",
        prize:100,
    },
    {
        item:"mouse",
        prize:1000,
    },
    {
        item:"speaker",
        prize:10000,
    }
    ,
    {
        item:"keyboard",
        prize:6000,
    }
 ]
let result2= shopingcart.reduce((acc,initval)=> acc+initval.prize,0)
console.log(result2);