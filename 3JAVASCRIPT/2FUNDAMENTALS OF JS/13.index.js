/**
 * Error Handiling try catch block
 * syntax
 * 
 * try{
 * some line of code
 * }catch(error){
 * console.log(error)
 * }
 */
const username = "prakash"
try{
    console.log(myname)
}catch(error){
    console.log(error.name) // error name
    console.log(error.message) // error message
    console.log(error.stack) // error stack
    console.log("Error occured")
}

console.log(username)