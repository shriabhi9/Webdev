/**
 * Rest parameter -- > ...rest/...args
 */
// function calculate(a, b, ...rest){ //A rest parameter must be last in a parameter list.
//     console.log(a,b)
//     console.log(rest) // will give u the array for extra remaining arguments
// }
// calculate(5,6,7,4,3,5,7,8,9)

// another example
function calculate(...rest){
    let total = 0
    for(let value of rest){
        total += value
    }
    console.log(total)
}

calculate(4,5,6,7,4,4,6,8,7)