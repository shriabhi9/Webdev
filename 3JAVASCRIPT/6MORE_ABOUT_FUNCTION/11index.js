/**
 * Recursion is a programming term where the function called from it self
 * 
 */

// sum of n numbers
// function sum(number){
//     if(number === 1){ // base conditon - >  where u want to end
//         return number // otherwise it will run recursively 
//     }
//     return number + sum(number - 1)
    
// }
// const result  = sum(10)
// console.log(result)

// Find factorial
function fact(num){
    if(num === 1){
        return num
    }
    return num * fact(num - 1)
}
const result2 = fact(5)
console.log(result2)