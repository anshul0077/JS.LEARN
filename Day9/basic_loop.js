for (let i = 1; i <=10; i++) {
if(i==5){
    continue  // 5 will skiped
}
console.log(i);
    
}
for (let i = 0; i < 11; i++) {
    if(i==4){
        break;     // it terminate the loop if condition is match
    }
    console.log(i);
    
}

for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
    console.log(`${i}*${j}=${i*j}`);  // console table from i to 10
    }
}

let myarray=["Spiderman","Ironman","Thor","CAmerica"]

for (let index = 0; index < myarray.length; index++) {
console.log(myarray[index]);
    
}

// while
let l=0;
while (l<=10) {
    console.log(l);
    l++
}

// do-while

let num=0;
do {
    num=num+2
    console.log(num);   // at least one time run
} while (num<=100);

