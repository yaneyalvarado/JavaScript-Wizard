var questions = [{
    question: "JavaScript is an _____________ language?" ,
    options: ["A: Object-Oriented", "B: Object-Based" , "C: Procedural" , "D: None of the above"] ,
    answer: "a-2"

},{
    question: "Example question 2" ,
    options: ["aa", "ab" , "ac" , "ad"] ,
    answer: "ab"

}]
var questionCount = 0
var startpage = document.querySelector(".startpage")
var startbutton = document.querySelector(".startbutton")
var questionsection = document.querySelector(".questions")
var questiontitle = document.querySelector(".questiontitle")
startbutton.addEventListener("click" , function() {
    startpage.classList.add("hide")
questionsection.classList.remove("hide")
displayquestions()
})

function displayquestions() {
    questiontitle.textContent= questions[questionCount].question
    for (let i = 0; i < 4; i++) {
        var questionoption = document.querySelector(".question" + (i+1))  
        questionoption.value= questions[questionCount].options[i]
        questionoption.textContent= questions[questionCount].options[i]
        questionoption.addEventListener("click" , function() {
        checkScores()
        })
    }
}

function checkScores() {
    if (questionCount < questions.length) {
        questionCount ++  
        displayquestions()
    }
   
}