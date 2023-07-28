/**
 * Filter
 */

// normal
const arr = [1,2,3,4,5,6,7,8,9]

// function filterNum(arr){
//     const temp = []
//     for(let number of arr){
//         if (number > 5){
//             temp.push(number)
//         }
//     }
//     return temp
// }

// console.log(filterNum(arr))

// filter
const output = arr.filter(number => number > 5) // A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
console.log(output)