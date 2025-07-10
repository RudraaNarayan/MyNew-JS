// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const BigInt = 34265783564784n


// Reference (Non primitive)

// Array, Object, Function

const heros = ["Hanuman", "Superman", "Shaktiman"]
let myObj={
    name:"Rudra",
    age: 23,
}

/*
const myFunction = function(){
    console.log("Hello world");
    //return           //It will print the output statement :-Hekko world  
}
//return myFunction()    // It also still print the result
*/

// console.log(typeof bigNumber);
// console.log(typeof scoreValue);
console.log(typeof heros);