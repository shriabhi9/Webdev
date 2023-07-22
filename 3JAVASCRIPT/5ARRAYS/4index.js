/**
 * Pop, slice, splice
 */

// pop
// let course = ["HTML","CSS","JS","React","Jquery"]
// console.log(course)
// console.log(course.pop()) // removes the last element from the array and returns it
// console.log(course)

// slice
// let course = ["HTML","CSS","JS","React","Jquery"]
// console.log(course.slice(1,4)) // removes the elements in a particular range and returns too

// we can perform these task on string too
// let Username = "Abhishek"
// console.log(Username.slice(1,4))

// splice -> can remove and add something
// removing
// let course = ["HTML","CSS","JS","React","Jquery"]
// course.splice(3,5)
// console.log(course)

// adding
let course = ["HTML","CSS","JS","React","Jquery"]
course.splice(3,0,"Node")
console.log(course)
