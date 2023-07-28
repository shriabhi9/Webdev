/**
 * Pure function
 * 1. It takes an arguments
 * 2. It should return something
 * 3. For same input you should get the same output
 * 4. The result should not be influenced by outer parameter
 * 5. it should not mutate the original argument
 */

// const x = 4
// function getDoubleValue(number){
//     return number * 2 * x // now it become impure function 
//                           // because the value of the number is now depends on x that is outer variable
// }
// const result = getDoubleValue(5)
// console.log(result)

// Example of - Pure Function
function appendNumbers(arr){
    let newArr = []
    // newArr.push(arr, 5,6) // but this will return something [[1,2,3,4],5,6] -> array inside the array
    // to over come with this issue we can use spread operator
    newArr.push(...arr,5,6) 
    return newArr
}
const result = appendNumbers([1,2,3,4])
console.log(result)