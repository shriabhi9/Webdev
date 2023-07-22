/**
 * String Method
 * chatAt() | charCodeAt()
 */

const text = "I am a student of btech"
// on the 5th indext we have "a" char
console.log(text.charAt(5)) // it will return that
console.log(text.charCodeAt(5)) // returns the unicode means ascii value of that particular character
// Note -  By default the index is zero

// example ASCII -> american standart code of information interchange
for(let i = 0; i < text.length; i++){
    console.log(`the ascii value of ${text[i]} is ${text.charCodeAt(i)}`)
}
console.log("HEllo")