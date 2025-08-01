/*
const score = 300
console.log(score);  //100

const balance = new Number(100)
console.log(balance);  //[Number: 100]

console.log(balance.toString());  //100
console.log(typeof(balance.toString()));  //string
console.log(balance.toString().length);  //3

console.log(balance.toFixed(2));  //100.00

const otherNumber = 123.4567
console.log(otherNumber.toPrecision(4));  //123.5

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000
*/


// ++++++++++ Maths ++++++++++
/*
console.log(Math);  //Object [Math] {}
console.log(Math.abs(-4));  //4
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.1));  //5
console.log(Math.floor(4.9));  //4
console.log(Math.min(4,3,6,8));  //3
console.log(Math.max(4,3,6,8));  //8
*/
console.log(Math.random());
console.log((Math.random()*10)+ 1 );
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);