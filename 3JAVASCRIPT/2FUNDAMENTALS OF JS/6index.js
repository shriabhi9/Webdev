/**
 * Conditional statement Excercise
 * A program that reads 3 string and print the smallest string
 */

const firstString = "apple"
const secondString = "kiwi"
const thirdString = "watermelon"

const lenOffirstStr = firstString.length 
const lenOfsecondStr = secondString.length
const lenOfthirdStr = thirdString.length

if(lenOffirstStr < lenOfsecondStr && lenOffirstStr < lenOfthirdStr){
    console.log(`${firstString} is the smallest string`)
}
else if(lenOfsecondStr < lenOffirstStr && lenOfsecondStr < lenOfthirdStr){
    console.log(`${secondString} is the smallest string`)
}
else if(lenOfthirdStr < lenOffirstStr && lenOfthirdStr < lenOfsecondStr){
    console.log(`${thirdString} is the smallest string`)
}else{
    console.log("found two or more string of the same length")
}


