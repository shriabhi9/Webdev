/**
 * IndexOf()
 */

// const text = "I am a student"
// console.log(text.indexOf("a",5))// the number inside the parenthesis is representing that search after index 5

function findchar ( text, char){
    const index = text.indexOf(char)
    return index // if char is in string will return index of that char or will return -1
}
console.log(findchar("I am a student", "z"))
console.log(findchar("I am a student", "a"))
console.log(findchar("I am a student", "s"))

// example
function findcharacter(text, char){
    const index = text.indexOf(char)
    if(index === -1){
        return "character not found";
    }else{
        return "character found in the string"
    }
}
const result = findcharacter("avi@gmail.com", "@")
console.log(result)