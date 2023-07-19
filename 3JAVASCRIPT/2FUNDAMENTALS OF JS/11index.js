/**
 * For loop
 */

// for(startvalue; CSSConditionRule; increment/decrement){
//     Code...
// }

// for(let i = 0;i < 5;i++){
//     console.log("Hello...!")
// }
// console.log("Loop execution is done")

// so basically what is happening here 
// the loop will print hello..! untill the condition
// will become false and in last it will return 
// some text

// another example
const userName = "Avi Shrivastava"
let count = 0;
for(let i = 0;i < userName.length;i++){
    console.log(userName[i])
    count++
}
console.log(`There are total ${count} character in your name including spaces`)