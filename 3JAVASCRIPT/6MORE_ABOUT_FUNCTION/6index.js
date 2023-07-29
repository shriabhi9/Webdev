/**
 * reduce -- 😁
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */

const arr =[1,2,3,4,5]
const reducerFun = (acc,cur) => acc+cur
/**
 * what is happening 
 * 0 + 1 = 1 --> acc
 * 1 + 2 = 3 --> acc
 * 3 + 3 = 6 --> acc
 * 6 + 4 = 10 --> acc
 * 10 + 5 = 15 --> acc
 */
const output = arr.reduce(reducerFun, 0) // acc is nothing but initial value so acc will become 0, and cur become first item of the arr
// if you will not assign zero as an initial value then acc value will be the first ele of arr and cur will be the second one

console.log(output)

const  arr1 = [2,4,3,5,6,7,3,5]
const red = (ac,cu) => ac * cu
const out = arr1.reduce(red,1)
console.log(out)