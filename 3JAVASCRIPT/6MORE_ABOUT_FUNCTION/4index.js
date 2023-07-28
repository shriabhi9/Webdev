/**
 * Map
 */
const arr = [1,2,3,4,5]

// function squareOfNum(arr){
//     const tempArr = []
//     for(let num of arr){
//         tempArr.push(num ** 2)
//     }
//     return tempArr
// }

// const result = squareOfNum(arr)
// console.log(result)

// Map
function getSquare(number){
    return number ** 2
}
const output = arr.map(getSquare) // map -> Calls a defined callback function on each element of an array, and returns an array that contains the results.
console.log(output)

// arrow fun
const squareOfNum = arr.map(number => number ** 2)
console.log(squareOfNum)