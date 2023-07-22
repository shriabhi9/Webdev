/**
 * Array - Distructuring
 */

// const numbers = [1,2,3]
// const [a,b,c,courses] = [1,2,3,["Html","JS","CSS"]] // distructuring

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(courses)


// Ignoring
// const numbers = [1,2,3]
// const [ , , ,courses] = [1,2,3,["Html","JS","CSS"]] // distructuring

// console.log(courses)

// spread operator
const numbers = [1,2,3]
const [courses, ...rest] = [["Html","JS","CSS"],1,2,3,4,5,6] // distructuring

console.log(rest)
console.log(courses)

// Example - Swap Numbers

let a = 5;
let b = 10;

[a,b] = [b,a]
console.log("A -",a)
console.log("B -",b)
