let username="Anshul" // string decleration
 console.log(username); //Anshul


let accountName= String("Welcome to 30 Days of Javascript")  // second method to declear the string
 console.log(accountName);  //Anshul

 // we can use the  various string methods

console.log(username.length)         // 6
 console.log(username.toUpperCase());//ANSHUL
 console.log(username.toLowerCase()) //anshul
 console.log(username.charAt(2))   // s
 console.log(username.indexOf('n'))  // 1
 console.log(username.charCodeAt('A'))  // the code of A character is (68)
 console.log(accountName.includes("30"))  //true
 console.log(accountName.endsWith("script"))  //true
 console.log(accountName.startsWith("hello"))        // false
 console.log(accountName.replace("30","60"))      // replace 30 to 60
 console.log(accountName.slice(10,18))      //remember it does not include last value 

 console.log(accountName.trim()) // eg :-      Anshul      it cutout the unwanted spaces 


 console.log( username.concat("  Age = 20 , student")) // Anshul age=20 , student

 console.log(accountName.substring(8,17))  // it returns => to 30 Day
 console.log(accountName.search("Days"))  // retuns the saearch element  start-index

 console.log(accountName.split("-")) // it will return array 
 let str= "hello planet , earth is the greatest planet"  

 console.log(str.lastIndexOf("planet"));  //it will conside the last occurence && it is case sensi

console.log(str.match("earth"));  // retuns the object   earth in index 15 and input


console.log(username.repeat(8)); // it will repeat the string 8 times 