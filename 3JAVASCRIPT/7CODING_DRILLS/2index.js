/**
 * Delete vowels from the string
 */

const string = "the Quick brown fox jumps over the lazy dog"

function getStringNoVowels(str){
    const vowels = ["a","e","i","o","u"]
    let result = ""
    for(let char of str){
        if(!vowels.includes(char.toLowerCase())){
            result += char
        }
    }
    return result
}

const WithouVow = getStringNoVowels(string)
console.log(WithouVow)