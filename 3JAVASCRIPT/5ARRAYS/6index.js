/** 
 * Array Methods - Sort
 */

// in array of string it compare the string character by character
// const fruits = ["apple", "cherry","orange","banana"]
// fruits.sort()
// console.log(fruits)

const number = [1,4,2,5,7,4,3,8,9,3,5,7,61,54,11] 
// number.sort() // In numbers it also compare them as string like it converts them in a string
// Before comparing 
// so the output we'll get
// [
//     1, 11, 2,  3,  3, 4,
//     4,  5, 5, 54, 61, 7,
//     7,  8, 9
// ] // lets take an example of 11 
// 11 will considered as a string so when it will be compare with the 2 so the fisrt character of 11 will be compared
// that is 1 and 1 is < 2 so thats why we are getting this kind of output

// To do it in a appropriate way

// function sortAscendingorder(a,b){
//     return a-b
//     // if the diff is negative it will not swap or if it is positive it will swap
// }
function sortdescendingorder(a,b){
    return b-a
    // if the diff is negative it will not swap or if it is positive it will swap
}
// number.sort(sortAscendingorder)
number.sort(sortdescendingorder)
console.log(number)