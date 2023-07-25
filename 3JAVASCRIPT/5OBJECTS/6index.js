/**
 * Object Reference And Shallow copy
 */

const person1 ={
    name:"abhi",
    age:118
}

// console.log(person1)
// const person2 = person1 // both will refering to the same memory location
// console.log(person2)

// // shallow copy
// person2.name = "Avi"

// // if we make changes in one both will affect because of reference
// console.log(person2)
// console.log(person1)

// there is a another way to do copy
const person2 = Object.assign({}, person1) // it will copy preperties from person1 and will copy them in it empty object {} and assign it to person2
// console.log(person2)

person2.name = "Avi"
person1.age = 121

console.log(person2)
console.log(person1)

// Note - when we have nested obj, then changes will affect both
