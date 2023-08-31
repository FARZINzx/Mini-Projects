const btn = document.querySelector(".btn")
const colorText = document.querySelector(".color")

const hex = [0,1 ,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let randomNum = 0;
btn.addEventListener("click" , function(){
    let hexColor = "#"
    
    for (let index = 0; index < 6; index++){
    hexColor +=hex[getRandomNum()]
    }
    colorText.textContent = hexColor;
    document.body.style.backgroundColor = hexColor
})

function getRandomNum(){
    return Math.floor(Math.random()*hex.length)
}