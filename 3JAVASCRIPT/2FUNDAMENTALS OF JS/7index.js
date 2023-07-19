/**
 * Logical Operator part 2
 */

const firstname = null
const nickname = ""

const userName = firstname || nickname || "Hidden person" // short circuting 
console.log(`Name - ${userName}`)

// let a = 12;
// let b;
// console.log(a+(b||0))

// const firstname = "Abhishek"
// const nickname = "Avi"

// const userName = firstname && nickname
// console.log(`Name - ${userName}`)
