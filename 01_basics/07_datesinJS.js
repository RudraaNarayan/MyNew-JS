// Dates
/*
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
*/

//let myCreateDate = new Date(2025, 7, 14)
//let myCreateDate = new Date(2025, 7, 14, 5, 3)
let myCreateDate = new Date("07-14-2025")
 console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

/*
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
*/

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})

