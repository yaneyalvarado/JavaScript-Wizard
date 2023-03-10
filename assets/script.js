var questions = [{
    question: "JavaScript is a _____________ language?" ,
    options: ["A: Markup language", "B: Style" , "C: Procedural" , "D: Scripting"] ,
    answer: "D: JavaScript is a scripting language."

},{
    question: "Inside which HTML element do we put the JavaScript?" ,
    options: ["A: <script>", "B: <scripting>" , "C: <javascript>" , "D: <js>"] ,
    answer: "A: <script>"

},{
    question: "Where is the correct place to insert a JavaScript?" ,
    options: ["A: The <head> section", "B: Both the <head> section and the <body> section are correct" , "C: The <body> section" , "D: None of the above"] ,
    answer: "C: JavaScript is inserted in the <body> section"
},{
    question: "How do you create a function in JavaScript?" ,
    options: ["A: function myFunction()", "B: function:myFunction()" , "C: function = myFunction()" , "D: function myFunction[] "] ,
    answer: "A: function myFunction()"


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