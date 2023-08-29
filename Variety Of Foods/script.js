const icons = document.querySelectorAll('.section-1-icons i')
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