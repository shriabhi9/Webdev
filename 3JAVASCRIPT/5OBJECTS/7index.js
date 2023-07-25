/**
 * Optional chaining
 */
const user = {
    name:"abhi"
    ,age:99
    ,address:{
        street:"citycenter"
        ,city:"gwalior"
    },
    getdisplayMessege:function(){
        console.log("Welcom Abhishek")
    }
    ,likes:"Eat sing code sleep repeat"
}
// console.log(user.address.city)

// if(user.address !== undefined){
//     console.log(user.address.city)
// }
// else{
//     console.log("Address is not found")
// }

// optional chaining
console.log(user.address?.city) // will check whether the city is availible there or not
// if it exist will return city if it is not will return undefined

// it also works with function
user.getdisplayMessege()

// fun that does not exist
console.log(user.getdisplayAddress?.()) // undefine if it does not exist
