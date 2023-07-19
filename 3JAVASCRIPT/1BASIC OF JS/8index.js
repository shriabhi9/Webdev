/**
 * Lesson 8
 * ReadlineSync
 */
const ReadlineSync = require("readline-sync")

const username = ReadlineSync.question("May I know your Name: ")
const age = ReadlineSync.question("May I know your Age: ")

yearOfBirth = 2023 - (Number(age)+Number(1))
console.log(`Welcome ${username} to GFG`)
console.log(`You born in ${yearOfBirth} and your age is ${age}`)