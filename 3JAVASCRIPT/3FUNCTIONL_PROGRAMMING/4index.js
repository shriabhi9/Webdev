/**
 * Arrow function =>()
 */

// const calculateSum = function(x,y){
//     return x+y;
// }
// console.log(calculateSum(12,4))

// we can alo write it by using  =>()
// const calculateAdd = (x,y) => {
//     return x+y
// }
// console.log(calculateAdd(2,6))

// another way
// const calculateAdd = (x,y) => x+y
// console.log(calculateAdd(9,9))

// another example
// const sum = (x,y) => x > y ? x+y : x-y
// const output =  sum(150, 14)
// console.log(output)

// example sum of min to max
function calculateSum(min,max){
    let total = 0;
    for(let i = min; i <= max; i++){
        total = total + i;
    }
    return total;
}
const result = calculateSum(10,20);
console.log(result)