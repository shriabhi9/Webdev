/**
 * Global and local Variable 
 * Global, local and block scope
 */

// Global variable is nothing but the varibale that assign out of the function

// var x = 3 // global variable --> accessable at anywhere
// function showNumber(){
//     var y = 5 // local variable -> not accessable outside the fun
//     console.log(y)
//     console.log(x)
// }
// console.log(y) // error

// function f1(){
//     console.log(x)
// }
// f1()
// showNumber()

// scope
// basically variable declared with let and const have local scope
// and variable declared with var has an gloable scope it is avalible at anywhere
/// whether i declared it anywhere

{
    // let a = 3;
    var b = 5; 
}
// console.log(a)
console.log(b)