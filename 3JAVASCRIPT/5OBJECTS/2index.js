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
console.log(obj.greetMessage) // output : [Funtion : greetMessage]
obj.greetMessage()
obj.bye()