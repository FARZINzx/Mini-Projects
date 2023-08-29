const container = document.querySelector(".container")
const closeBtn = document.getElementById("close")
const openBtn = document.getElementById("open")
const circle = document.querySelector(".circle")

openBtn.addEventListener("click" , ()=>{
     container.classList.add("show-rotate")
})

closeBtn.addEventListener("click" , ()=>{
     container.classList.remove("show-rotate")
})




