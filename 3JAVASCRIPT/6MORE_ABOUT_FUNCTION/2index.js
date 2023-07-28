/**
 * First Class Function
 * 
 * A programming language is said to have First-class function if function in that language are treated like other variable.
 * so the function can be asiigned to any other variable or passed as an argument or can be returned by another function
 */

// 1] assigning fun to an variable
// const greetMessage = function(){
//     console.log("Hello gopi bahu")
// }
// greetMessage()


// 2] passing fun as an argument
// function wrapper(){
//     return "Welcome to nala supara"
// }

// function greetMessage(inner,name){
//     console.log(name,inner())
// }
// greetMessage(wrapper,"Abhishek")


// 3] Returning the function
function greetMessage(){
    function wrapper(){
        let name = "prakash"
        console.log(name, "welcome to nalasupara")
    }
    return wrapper // bcoz when you will not return fun then it will return undefined by default
}
const output = greetMessage()
output()
// or
greetMessage()()
