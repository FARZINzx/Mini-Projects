const btn = document.querySelector(".btn");
const colorSpan = document.querySelector(".color")
const colors = ["green" , "red" , "rgba(133,122,200)" , "#f15025"]

let randomNum = 0;

btn.addEventListener("click" , function(){
        randomNum = createRandomNum();
        console.log(randomNum) 
        document.body.style.backgroundColor= colors[randomNum];
        colorSpan.textContent = colors[randomNum]
})

function createRandomNum(){
   return Math.floor(Math.random() * colors.length)
}


