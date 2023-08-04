let startbut = document.querySelector(".start")
let countbut = document.querySelector(".count")
let stopbut = document.querySelector(".stop")

// function showMessage(){
//     console.log("button-clicked")
// }


// startbut.addEventListener("click", showMessage)

// will change the innerText of the element
startbut.addEventListener("click", ()=>{
    if(startbut.innerText === "Start"){
        // startbut.innerText = "Begin"
        startbut.innerHTML = '<span>Lets begin</span>'
    }else{
        startbut.innerText = "Start"
    }
})

let value = 0
countbut.addEventListener("click",()=>{
    value+=1
    console.log(value)
})

stopbut.addEventListener("click" , ()=>{
    stopbut.classList.toggle("btn-red") // 
})
