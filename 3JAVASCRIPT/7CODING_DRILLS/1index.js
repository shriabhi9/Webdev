/**
 * Palindrome String -> > aba = aba <
 */


// Method 1
// const str = "Abhishek"
// const arrOfChar = str.split("")

// const reversedChar = arrOfChar.reverse();
// reverseStr = reversedChar.join("")

// if(str === reverseStr){
//     console.log("String is a palindrome")
// }else{
//     console.log("String is not a plaindrome")
// }

// Method 2
// const str = "geeks"
// const reverseStr = str.split("").reverse().join("")

// if(str === reverseStr){
//     console.log("String is a palindrome")
// }else{
//     console.log("String is not a plaindrome")
// }

// method 3
// Looping
const str = "madam"

function getReverse(str){
    let reverseStr = ""
    for(let i = str.length-1; i>=0; i--){
        reverseStr += str[i]
    }
    return reverseStr
}

const result = getReverse(str)
if(result === str){
    console.log("String is a palindrome")
}else{
    console.log("String is not a plaindrome")
}