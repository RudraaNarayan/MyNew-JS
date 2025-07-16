const marvel_heros = ["Thor", "Captain", "Ironman", "Jarvis"];
const dc_heros = ["Superman", "Batman", "flash"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

 

console.log(Array.isArray("Rudra"));  //false
console.log(Array.from("Rudra"));  //['R' , 'u' , 'd' , 'r' , 'a']
console.log(Array.from({name: "Rudra"}));  //[]


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]


