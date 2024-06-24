let arr=[1,2,3,4,5,6]
console.log(arr);

       //  or

let anotherarray= new Array(20,30,40,50,60,70,)
console.log(anotherarray); // another method to create an array


console.log(arr.push(7));  // 7 add element in last of array
console.log(arr); //[1,2,3,4,5,6,7]   
console.log(arr.pop())   //delete 7 elenent from last  of array
console.log(arr);      //  [1,2,3,4,5,6]

console.log(arr.unshift(100));  // 100 will be added in first of array
console.log(arr); //[100,1,2,3,4,5,6]

console.log(arr.shift());   // 100 will be deleted form array
console.log(arr);

console.log(arr.includes(4)); // true
console.log(arr.includes(99)); //false

console.log(arr.indexOf(4)); // 3
console.log(arr.indexOf(5)); //4

// slice
let arr1=[11,12,23,34,56,76,84]

console.log(arr1); 

console.log(arr1.slice(3,6)) // this will returns the part of array you defined in arrguments it does not include 6 (3,4,5)  it does not change the original array [34,56,76]

console.log(arr1); // [11,12,23,34,56,76,84]


// splice

let arr2=[11,22,33,44,55,66,77]  
console.log(arr2);
let arrsplice=arr2.splice(3,3,100,2200,300)  // this method  same as slice method but  change the original array    

console.log(arrsplice); //  [44,55,66]
console.log(arr2);  // the original array =>[11,22,33,100,2200,300,77]


// array join

let jarray=[1,2,3,4,5,6,7]
let join=jarray.join()
console.log(join);  //this will retun the array in string type
