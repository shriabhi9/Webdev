/**
 * Mouse Events
 */

let input = document.querySelector(".input")

// input.addEventListener("mousedown",(event)=>{
//     console.log(event.button)
// })

// input.addEventListener("mousedown",(event)=>{
//     let xcor = event.pageX
//     let ycor = event.pageY
//     let cors = `X cor - ${xcor}, Y cor - ${ycor}`
//     console.log(cors)
// })
document.body.addEventListener("mousedown",(event)=>{
    let xcor = event.clientX
    let ycor = event.clientY
    let cors = `X cor - ${xcor}, Y cor - ${ycor}`
    console.log(cors)
})