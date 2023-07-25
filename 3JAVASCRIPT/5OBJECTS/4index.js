/**
 * Property shorthand
 */
function getObj(name,city){
    return {
        name,
        city
    }
}

const obj = getObj("Abhishek","Gwalior")
// console.log(obj)

// another way we can make obj
const student = "Abhishek"
const course = "JavaScript"

console.log({student,course})