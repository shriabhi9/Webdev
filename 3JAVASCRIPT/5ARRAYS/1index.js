/**
 * Arrays --> Non-Primitive Data Types
 */

// Array -> container that can store string, number, array inside array, objects
let studentName = ["Prakash","Adarsh","Avi",1,2,3,["HTML","CSS","JS"],{SchoolName : "SRCEM"}]
// console.log(studentName)

for(let i = 0; i < studentName[6].length; i++){
    console.log(studentName[6][i])

}

// or

for( let index in studentName){
    console.log(studentName[index])
}