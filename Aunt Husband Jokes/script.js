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

// const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';
// const sourceText = 'Hello, how are you?';

// const targetLanguage = 'es'; // Spanish

// const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

// const requestData = {
//   q: sourceText,
//   target: targetLanguage,
// };

// fetch(apiUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(requestData),
// })
//   .then(response => response.json())
//   .then(data => {
//     const translatedText = data.data.translations[0].translatedText;
//     console.log(translatedText);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
