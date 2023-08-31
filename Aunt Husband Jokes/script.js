const jokeDom = document.querySelector("#joke")
const jokeBtn = document.querySelector("#joke-btn")

getJoke();

jokeBtn.addEventListener('click',()=>getJoke())

function getJoke(){
     
     const config = {
          headers : {
               'Accept' : 'application/json'
          }
     }
     fetch("https://icanhazdadjoke.com",config)
     .then((response)=>response.json())
     .then((data)=>jokeDom.innerHTML = data.joke)
}