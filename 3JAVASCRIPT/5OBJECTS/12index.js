/**
 * new keyword and constructor functions
 * 
 * Constructor functions technically are regular functions. they have 2 conventions though
 * they are named with capital letter first 
 * they should be executed only with "new" operator.
 */

function user(name,age){
    (this.name = name), // in constructor fun we write properties in this way
    (this.age = age)
}

const user1 = new user("prakash",101) // when we call function by using new keyword it construct an object
const user2 = new user("abhishek",11)
const user3 = new user("ashish",19)
const user4 = new user("riya",102)
console.log(user1) 
console.log(user2) 
console.log(user3) 
console.log(user4) 
console.log(typeof user4) // type object