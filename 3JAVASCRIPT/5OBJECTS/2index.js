/**
 * Function as Object Property
 */

const obj = {
    username:"~Avi",
    greetMessage : function(){
        console.log(`~Avi welcome to gfg`)
    },
    bye(){
        console.log("Bye have a great day")
    }
}
obj.greetMessage()
obj.bye()