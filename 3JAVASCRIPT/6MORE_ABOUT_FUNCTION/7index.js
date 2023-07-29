/**
 * Argument Object in non-Arrow Function
 * -- argument object is an array like object present locally inside a function
 *    and it contains value of all the arguments passed to a function
 */
// function calcluteTotal(){
//     let sum = 0;
//     for(let value of arguments){
//         sum += value
//     }
//     console.log(arguments)// object like array
//     const arr = [...arguments]
//     console.log(arr)
// }
// calcluteTotal(4,5,6,7,8)

// lets understand what is happening internally
function calclute(a = 10) {
    console.log(a) // 4
    console.log(arguments) // 4
    arguments[0] = 9 // update 4 with 9
    console.log(arguments) // 9
    console.log(a) 
    // it will not change 4 bcoz we have an parameter and its default value is 10 and when u will pass new value 
    // even though you use arguments object to change the value it is not going to change 
    // and whn we dont hgave default value changes will affect
}
calclute(4)