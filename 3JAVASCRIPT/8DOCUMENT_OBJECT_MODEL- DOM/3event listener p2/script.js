let input = document.querySelector(".input")
// input.addEventListener("change",()=>{
//     console.log(input.value) // input -> on time change
// })                         

// input.addEventListener("input",()=>{
//     console.log(input.value) // change -> click on something then wanted to change
// })

// input.addEventListener("focus",()=>{
//     console.log(input.value) 
// })

input.addEventListener("keyup",()=>{
    console.log(input.value)
})