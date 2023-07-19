/**
 * Lesson 5
 * Concatenation and Template Literal
 */

let userName = "Abhishek"
let age = 21

// let message = "My Name is " + userName +" and i'm "+age+" year old."
// console.log(message)
// but its an old way to do these thing

// there is a another way Template literal 
// let text = `My name is ${userName} and I am ${age} years old.`
// console.log(text)

let multiple_line = `My name is ${userName}
I am ${age} years old.`
console.log(multiple_line) // we can also print any thing with the variable in multiple line

// we cant do these thing in concatination so the best way to do it is Template Literal