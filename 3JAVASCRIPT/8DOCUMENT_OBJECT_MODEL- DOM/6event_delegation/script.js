let btncontainer = document.querySelector("#btn-container")

btncontainer.addEventListener("click" ,(event)=>{
    let btntext = event.target.innerText
    if(btntext === "red"){
        event.target.classList.toggle("btn-red")
    }
    if(btntext === "yellow"){
        event.target.classList.toggle("btn-yellow")
    }
    if(btntext === "blue"){
        event.target.classList.toggle("btn-blue")
    }
    if(btntext === "green"){
        event.target.classList.toggle("btn-green")
    }
    if(btntext === "magenta"){
        event.target.classList.toggle("btn-magenta")
    }
}) 