/**
 * Computed Properties
 */
const readlineSync = require("readline-sync")
const key = readlineSync.question("What do you know about the mentor(Name/age/city/state) - ")
const courses = readlineSync.question("which course do you want to learn(html/css/js/redux - ")

const obj = {
    name:"Abhishek", // name ->  should be in " " ->bcoz its an property 
    age:99,
    [courses] : "Course not available" // crux -> [course] -> when we call it, we can do it normally
}

// this how we can add things externally in obj
obj.city = "Gwalior"
obj.state = "Mp"
// console.log(obj)

// computed property 
console.log(obj[key])
console.log(obj[courses])