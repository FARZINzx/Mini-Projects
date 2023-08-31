const icons = document.querySelectorAll('.section-1-icons i')
const nav = document.querySelector(".nav")
const navIcon = document.querySelector(".nav-icon")


let count = 1;
setInterval(()=>{
    count++;
    const firstIcon = document.querySelector('.slide-show')
    firstIcon.classList.remove("slide-show")
    if(count>icons.length){
        icons[0].classList.add("slide-show")
        count=1
    }else{
        firstIcon.nextElementSibling.classList.add("slide-show")
    }
},1000)

navIcon.addEventListener('click' , ()=>{
    document.querySelectorAll(".target").forEach((item)=>{
        item.classList.toggle('change')
    })
})