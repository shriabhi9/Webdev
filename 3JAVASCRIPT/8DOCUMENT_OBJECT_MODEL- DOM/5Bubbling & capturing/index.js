let form = document.querySelector("#form")
let div = document.querySelector("#div")
let para = document.querySelector("#p")

para.addEventListener("click",()=>{
    alert("para tag")
},true)
form.addEventListener("click",()=>{
    alert("form tag")
},true)
div.addEventListener("click",()=>{
    alert("div tag")
},true /**for capturing*/)

// bubbling means start from child tag
// capturing means start from parent tags