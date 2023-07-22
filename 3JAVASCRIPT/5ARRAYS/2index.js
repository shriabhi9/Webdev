/**
 * Copy By Reference - Array
 */

let arr1 = [1,2,3] // Is referring to memory location..
let arr2 = arr1 // Is also pointing/ referring to the same memory location

// It creates a shallow Copy
// which basically make changes at that memory location where are
// actual data is stored
console.log(arr1)
console.log(arr2)

arr2.push(4)
-
console.log("Updated Arr2 :",arr2)
console.log("Updated Arr1 :",arr1)

// Spread Operator
let arr3 = [...arr1] // ... spread operator will not make changes on the actuall memory location
console.log(arr3)
arr3.push(5)
console.log("Updated Arr1 :",arr1) // arr1 will be the same as it was before
console.log("Updated Arr3 :",arr3) // arr3 will change when we push soomething in that array


// we can do this by using loops
