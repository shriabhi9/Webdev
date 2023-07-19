/** 
 * lesson 4
 * Ternory operator --> condition ? yes : no
 */
const totalMarkScored = 80;


(totalMarkScored < 40) ? console.log("you need to work hard") : console.log("you cleared the exam. Great!!")

// we can also put this condintion in a variable too

// const result = (totalMarkScored < 40) ? console.log("you need to work hard") : console.log("you cleared the exam. Great!!")
// console.log(result)

// if(totalMarkScored < 40){
//     console.log("you need to work hard")
// }else if(totalMarkScored < 60){
//     console.log("B grade")
// }
// else if(totalMarkScored < 75){
//     console.log("A grade")
// }
// else if(totalMarkScored < 85){
//     console.log("A+ grade")
// }
// else {
//     console.log("Genius")
// }

const result  = totalMarkScored < 40 ? "you need to work hard" : totalMarkScored < 60 ? "B grade" : totalMarkScored < 75 ? "A grade" : totalMarkScored < 85 ? "A+ grade": "genius"

console.log(result)