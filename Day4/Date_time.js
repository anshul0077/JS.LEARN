// Date and time
// The js stores the date as number of milisecond since january 1970

let D=new Date()
console.log(typeof D); // obejct
console.log(D);      // this is not readable 2024-06-23T03:05:49.658Z
console.log(D.toString()); // sun jun 23 2024 08:28:41 GMT+0530 (Indian Standard Time)
console.log(D.toDateString());  // this will returns only  the current date
console.log(D.toISOString());    // this will convert the date object into string
console.log(D.toJSON());        // this will convert the date into string
console.log(D.toLocaleDateString()); // this will returns the only date in 6/23/2024 format
console.log(D.toLocaleString());  // this will returns the date and time  6/23/2024 , 8:33:49 AM
console.log(D.toLocaleTimeString());  // this will returns only time 
console.log(D.toTimeString());         // this will also returns the time with standard



let mydate= new Date("12/12/2004")   // we can pass arguments in date

console.log(mydate.toString());      // Sun Dec 12 2004 00:00:00 GMT+0530 (India Standard Time)
console.log(mydate.getDate());   // 12
console.log(mydate.getDay());      // 0 = sunday   day also started with 0 in indian standard
console.log(mydate.getMonth()+1);  // month start form 0
console.log(mydate.getFullYear());

let dt=new Date("1/2/2005,5:30:14:4")
console.log(dt.toString());  //Sun Jan 02 2005 05:30:14 GMT+0530 (India Standard Time)
console.log(dt.getHours());   // 5
console.log(dt.getMilliseconds());  // 4
console.log(dt.getMinutes()); //30
console.log(dt.getSeconds()); //14


let timeDate =Date.now()
console.log(timeDate);     // it will retuns the miliseconds form 1 jan 1970 1719113750439
                                                 
