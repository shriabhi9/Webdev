/**
 * Higher order function
 * 
 * A function that accepts another function as an argument or returns a function or does both is called H.O.F
 */

// First class function 
// function wrapper(){
//     return "Welcome to rajasthan"
// }
// 
// Higher order function
// function greetMessage(){
//     console.log("Bachho", wrapper())
// }
// greetMessage(wrapper)


// H.O.F -> Higher Order Funtion
// function displayMessage(){
//     return function(){
//         console.log("it was perfect down to the last minor detail(home lander)")
//     }
// }
// const output = displayMessage()
// output()
// // or
// displayMessage()()


// Example of H.O.F
// power of each number in array

// const arr = [1,2,4,3,5]

// function squareOfNum(arr){
//     let sqr = []
//     for(let number of arr){
//         sqr.push(number**2)
//     }
//     return sqr
// }
// const output = squareOfNum(arr);
// console.log(output)

// // cube of numbers
// function cubeOfNum(arr){
//     let cube = []
//     for(let number of arr){
//         cube.push(number**3)
//     }
//     return cube
// }

// const output1 = cubeOfNum(arr)
// console.log(output1)


const arr = [2,4,3,5,1]
function square(number){
    return number ** 2
}
function cube(number){
    return number ** 3
}
function calculatePow(wrapper,arr){
    let temp = [ ]
    for(let num of arr){
        temp.push(wrapper(num))
    }
    return temp
}

const squareOfNumber = calculatePow(square,arr)
const cubeOfNumber = calculatePow(cube,arr)
console.log(squareOfNumber)
console.log(cubeOfNumber)