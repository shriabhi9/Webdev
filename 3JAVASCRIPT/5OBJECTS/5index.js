/**
 * For in -> Property Excersice
 */

const obj = {
    name:"abhishek",
    city:"gwalior"
}

const isPropertyfound = "name" in obj // true
// console.log(isPropertyfound)

for(let key in obj){
    console.log(key,`:`, obj[key])
} 