// array  :- The array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name.

const myArr = [0, 1, 2, 3 ,4 ,5 , 'Roman']
const myHeros = ["superman","ironman","Thor"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);

// console.log(myArr[5]);



// +++++ Array methods +++++

// myArr.push("rudra")
// myArr.push(9)
// myArr.pop()

// myArr.unshift(1)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(19));

// const newArr = myArr.join()

// console.log(myArr);

// console.log(newArr);
// console.log(typeof newArr);



// +++++ slice, splice +++++

console.log("A" , myArr);  // A [0, 1, 2, 3, 4 , 5, 'Roman']

const myn1 = myArr.slice(1, 3)  //in slice in excludes the last index element.
console.log(myn1);  //[1, 2]

console.log("B", myArr);  // B [0, 1, 2, 3, 4, 5, 'Roman']

const myn2 = myArr.splice(1, 3)  //in splice the last index element is included while printing. and after this method the array that exist remained changed . 
console.log(myn2);  //[1, 2, 3]


console.log("C", myArr);  // C [0, 4 , 5, 'Roman]