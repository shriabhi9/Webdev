/**
 * Function Borrowing - Call and apply, bind
 */

const user1 = {
    name: "prakash",
    age:199,
    // sayhi(){
    //     console.log("HI " + this.name)
    // }
}
const user2 = {
    name: "ashish",
    age:201,
    // sayhi(){
    //     console.log("Hi "+this.name)
    // }
}
const user3 = {
    name: "shalini",
    age:91,
    // sayhi(){
    //     console.log("Hi " +this.name)
    // }
}
// instead of created fun each places
// we can make a separate function
// and by using call 
function sayhi(degree,year){
    console.log("Hi " + this.name + ", Student of " + degree ,year)
}
// call
// sayhi.call(user1, "Btech-CSE", 2024)
// sayhi.call(user2, "Btech-EC",2018)
// // sayhi.call(user3)

// // apply - pass arguments in array
// sayhi.apply(user1,["Btech - ECE", "2015"])
// sayhi.apply(user1,["Btech - CS", "2018"]) 

// bind - u'll have to assign to a variable
const result = sayhi.bind(user1, "Btech-CSE", 2024)
result()
