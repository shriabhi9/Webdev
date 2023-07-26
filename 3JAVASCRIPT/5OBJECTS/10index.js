/**
 * This Keyword
 * refers to the object that is executing the function
 */
// const obj = { // <--(1)
//     name:"abhishek",
//     display : function(){
//         console.log(this) // <--(1)
//     }
// }
// if there is 'this' keyword exist in the function and that 
// function is inside the object then that 'this' keyword will 
// refers the object it exists
// obj.display()

// const obj = { // <--(1)
//     name:"abhishek",
//     display : function(){
//         console.log("hello " + this.name) // known as implicit binding // <--(1)
//     }
// }

// obj.display()


// arrow function example
const user = {
    name:"Abhishek",
    showName:() => {
        console.log(this.name)
    }
}

user.showName() // basically In Arrow function "this" keyboard does not point to the object
