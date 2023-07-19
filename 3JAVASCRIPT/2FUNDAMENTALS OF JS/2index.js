/**
 * lesson 2
 * Conditional Statements
 */
// syntax
/**
 * if(condition/statement){
 *    task
 * }
 */

// const readlinesync = require("readline-sync")
// const userAge = readlinesync.question("How old are you ?")
// if(userAge > 18){
//     console.log("You are an adult")
// }
// else{
//     console.log("No you are not an adult")  
// }

const readlinesync = require("readline-sync")
const number = readlinesync.question("Enter a number : ")
const remainderAfterDivisibleByThree = number % 3;
const remainderAfterDivisibleByFive = number % 5;
const remainderAfterDivisibleBySeven = number % 7;
// if(remainderAfterDivisibleByThree === 0){
//     console.log("Fizzz")
// }
// else if(remainderAfterDivisibleByFive === 0){
//     console.log("Buzzz")  
// }

// logical operator
if (remainderAfterDivisibleByThree === 0 && remainderAfterDivisibleByFive === 0) {
    console.log("Fizzz")
} else if (remainderAfterDivisibleByFive === 0 || remainderAfterDivisibleByThree === 0) {
    console.log("Buzzz")
}
else if(remainderAfterDivisibleBySeven === 0){
    console.log("BuzzBuzz")
}
else{
    console.log("number is not divisible with 3,5 and 7")
}