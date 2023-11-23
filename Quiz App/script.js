const quizData = [
     {
         question: "Which language runs in a web browser?",
         a: "Java",
         b: "C",
         c: "Python",
         d: "JavaScript",
         correct: "d",
     },
     {
         question: "What does CSS stand for?",
         a: "Central Style Sheets",
         b: "Cascading Style Sheets",
         c: "Cascading Simple Sheets",
         d: "Cars SUVs Sailboats",
         correct: "b",
     },
     {
         question: "What does HTML stand for?",
         a: "Hypertext Markup Language",
         b: "Hypertext Markdown Language",
         c: "Hyperloop Machine Language",
         d: "Helicopters Terminals Motorboats Lamborginis",
         correct: "a",
     },
     {
         question: "What year was JavaScript launched?",
         a: "1996",
         b: "1995",
         c: "1994",
         d: "none of the above",
         correct: "b",
     },
 ];

 const quizContainer = document.getElementsByClassName("container")
 const quizQuestion = document.getElementById("question")
 const quizMain = document.getElementById(".quiz-main")
const answerTag = document.querySelectorAll(".answer")
const a_answer = document.getElementById("a-text")
const b_answer = document.getElementById("b-text")
const c_answer = document.getElementById("c-text")
const d_answer = document.getElementById("d-text")
const submitBtn = document.getElementById("submit")

console.log(answerTag)

let currentQuiz = 0 // star in 0
let score = 0

startQuiz()

function startQuiz(){

     untiSelected()
     // show first question
     let currentQuizQuestion = quizData[currentQuiz]

     quizQuestion.innerText = currentQuizQuestion.question
     a_answer.innerText = currentQuizQuestion.a
     b_answer.innerText = currentQuizQuestion.b
     c_answer.innerText = currentQuizQuestion.c
     d_answer.innerText = currentQuizQuestion.d    
}

function untiSelected(){
     answerTag.forEach((item) => item.checked = false)
}

function getUserAnswer(){
     let UA;
     answerTag.forEach(item =>{
          if(item.checked){
               UA = item.id
          }
     })
     return UA
}

submitBtn.addEventListener('click' , ()=>{
     const userAnswer = getUserAnswer()
     currentQuiz++;
     isTrue(userAnswer);
     startQuiz()
     console.log("score"+score)
})

function isTrue(userAnswer){
     console.log(userAnswer)
     console.log( quizData[currentQuiz].correct)
     // check the correctness of answere and increase or decrease score
     if(userAnswer == quizData[currentQuiz].correct ){
          score++;
     }
}

function finishQuiz(){
     if(score == quizData.length){
          quizMain.innerHTML = `
            <span>
             You get ${score}/${quizData.length}
            </span>
          `
     }
}


