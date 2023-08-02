/**
 * Generate Secret code from a given string
 * input --> prakash
 * encode By chars --> 2
 * Output --> rtcmcuj
 */

const inputStr = "prakash"
const shiftBypos = 4
const getEncodeStr = (str, shiftBypos) =>{
    let encodestr = ""
    let currPosition = 0
    for(let i = 0; i < str.length; i++){
        currPosition = str.charCodeAt(i)
        encodestr += String.fromCharCode(currPosition + shiftBypos)
    }
    return encodestr
    
}
const result = getEncodeStr(inputStr,shiftBypos)
console.log(result)