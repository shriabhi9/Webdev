/**
 * Destructing Objects
 */

// lets create an object
// let obj = {
//     name: "Avi",
//     address:{
//         state:"MP",
//         city:"Gwalior",
//         Locality:"Santacruz"
//     },
//     courses:["HTML","CSS","JS","Reactjs","Redux"]
// }

// let {name,address,courses} = obj
// console.log(name)
// console.log(address)

// you wanted add address and courses in different obj 
// let {name, ...rest} = obj
// console.log(name)
// console.log(rest)

// if you wanted to change key name
// let {name: userName} = obj
// let {name: userName, address : userAddress} = obj

// console.log(userName)
// we've already change the name so this won't work
// console.log(name) // ReferenceError: name is not defined

// access obj inside obj
// let {address : {state, city, Locality}} = obj;
// console.log(city)

// Example:-->
const employee = {
    engineer:{
        en1:{
            id: 1,
            name: "Abhishek",
            occupation: "Front-end developer"
        },
        en2:{
            id:2,
            name:"Ashish",
            occupation:"Data Scientist"
        },
    },
    placement:{
        en3:{
            id:3,
            name:"Sakshi",
            occupation:"Sr. Executive"
        },
    },
    youtube:{
        en4:{
            id:4,
            name:"jay",
            occupation :"Yotube Manager"
        },
    }
}

// wanted the data of en1
// let {engineer: {en2:{name,occupation}}} = employee
// console.log(name,occupation)