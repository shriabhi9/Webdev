/**
 * Objects --> { key : value }
 */
// const obj = {} // Object literal
// console.log(typeof obj) // Object

const obj = {
    // key should be string 
    Name:"Abhishek",
    Age:21, 
    Profession:"student", // values can be anything
    
    // 1 : "Number" // it will convert the 1 into string
    // {'1' : "Number"}
    
    course : ["Html","Css","Js","React"]
}
// console.log(obj)
console.log(obj.Age)

// two way to acces
console.log(obj.course)

console.log(obj["course"])