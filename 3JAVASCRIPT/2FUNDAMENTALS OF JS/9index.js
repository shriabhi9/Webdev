/**
 * Exercise - For Loop
 */
// star patterns
// *
// * * 
// * * *
// * * * *
// * * * * *

// const symbol = "*"

// // for(let i = 1; i <= 5; i++){
// // console.log(symbol.repeat(i))
// // }
// for(let i = 5; i >= 1; i--){
// console.log(symbol.repeat(i))
// }

// lets count the character form the string
// const userName = "Abhishek shrivastava"
// let count = 0
// for(let i = 0; i<userName.length; i++){
//     count++
// }
// console.log(`Number of characters in the given string : ${count}`)
// // it also count the space 


/**
 * Given a range of the numbers form 1 to 101, find all the even numbers
 * 2,4,5,6,8.....
 */
// for(let i = 1;i<=101;i++){
//     if(i%2==0){
//         console.log(`${i} is an even number`)
//     }
//     else{
//         console.log(`${i} is an odd number`)
//     }
// }

/**
 * Another Exercise
 */
const inputString = "Hello , i love GFG....";
const vowels = "aeiou";

for(let i = 0; i < inputString.length;i++){
    if(vowels.includes(inputString[i])){
        console.log(`${inputString[i]} is a vowel`)
    }
    else{
        console.log(`${inputString[i]} is not a vowel`)
    }
}