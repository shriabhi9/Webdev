/**
 * Iterating over strings
 */


// keep in mind that character can be space, number, or anykind of special character
// let displayMessage = " I am a student of btech"
// for(let char of displayMessage){
//     console.log(char)
// }

// count the character
// let displayMessage = "I am a student of btech"
// let count = 0
// for(let char of displayMessage){
//     if(char === "a"){
//         count++
//     }
// }
// console.log(count)

// Indexing
let displayMessage = " I am a student of btech"
let count = 0
for(let i = 0; i < displayMessage.length; i++ ){
    if(displayMessage[i] == " "){
      count++   
    }
}
console.log(`There are ${count} spaces`)