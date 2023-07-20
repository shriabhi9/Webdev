/**
 * Lesson 1
 * Function 
 * 1. Function Statements/Declaration
 * 
 */
// function is a piece of code, we can use that code again and again
// whenever it is needed

// Funtion Declaration or Function Statement
// function greetMessage(){
//     console.log("Hello From Abhishek..!!!")
// }

// // Calling Function
// greetMessage()
// greetMessage()
// greetMessage()
// greetMessage()
// this is how we can call that fun as many times as we wanted. 
// output -->>
// Hello From Abhishek..!!!
// Hello From Abhishek..!!!
// Hello From Abhishek..!!!
// Hello From Abhishek..!!!



// function greetMessage(name, city){
//     console.log(`Welcome ${name}`)
//     console.log(`Thank you for joining from ${city}`)
// }

// // Calling Function
// greetMessage("Abhishek","Gwalior")
// greetMessage("Ashis","Ahemdabad")

function calculateSum(min,max){
    let sum = 0 
    for(let i = min; i <= max;i++){
        sum += i
    }
    return sum
}

console.log(calculateSum(2,5))