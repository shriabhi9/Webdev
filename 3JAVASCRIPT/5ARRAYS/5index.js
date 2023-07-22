/**
 * Array Method - includes
 */

const availableSize = ["S","M","L","XL","XXL","XXXl"]

const readlineSync = require("readline-sync")
const userSize = readlineSync.question("Which size of shirt do you want ? - ")

const isSizeAvailable = availableSize.includes(userSize)
if(isSizeAvailable){
    console.log("Size is available")
}
else{
    console.log("Size is not available")
}