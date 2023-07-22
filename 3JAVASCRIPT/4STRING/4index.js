/**
 * string includes()
 */

// const text = "I love to code in dark mode"
// if(text.includes("dark")){
//     console.log("person loves to code in dark mode")
// }else{
//     console.log("person loves to code in light mode")
// }


// find if the string conatains any vowels or not
const text = "I love to code in dark mode"
const vowels = "aeiouAEIOU"
let flag = false
for(let char of text){
    if(vowels.includes(char)){
       flag = true; 
       break
    }else{
        flag = false;
    }
}

if(!flag){
    console.log("String dosen't have vowels")
}else{
    console.log("String has vowels")
}