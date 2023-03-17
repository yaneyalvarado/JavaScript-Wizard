var questions = [{
    question: "JavaScript is a _____________ language?" ,
    options: ["A: Markup language", "B: Style" , "C: Procedural" , "D: Scripting"] ,
    answer: "D: Scripting"

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

},{
    question: "Arrays in JavaScript can be used to store ____________." ,
    options: ["A: numbers and strings", "B: other arrays " , "C: booleans " , "D: all of the above"] ,
    answer: "B: other arrays"

},{ 
    question: "To see if two variables are equal in an if / else statement you would use _____________." ,
    options: ["A: numbers and strings", "B: other arrays " , "C: booleans " , "D: all of the above"] ,
    answer: "B: other arrays"

},{
    question: "The first index of an array is _________." ,
    options: ["A: 0" , "B: 1" , "C: A" , "D: none of the above"] ,
    answer: "A: 0"

}, {
    question: "How to write an IF statement in JavaScript?" ,
    options: ["A: if i == 5 then" , "B: if i = 5 then" , "C: if(i == 5)" , "D: if[i = 5]"] ,
    answer: "C: if(i == 5)"

},{
    question: "How do you call a function names myFunction?" ,
    options: ["A: callmyFunction()" , "B: call function myFunction()" , "C:myFunction()" , "D: Call myFunction"] ,
    answer: "C: myFunction()"

},{
   question: "Which of the following function of Boolean object returns a string containing the source of the boolean object?" ,
   options: ["A: toSource()" , "B: valueOf()" , "C: toString()" , "D:trueString"] ,
   answer: "A: toSource()"


}]
var questionCount = 0
var startpage = document.querySelector(".startpage")
var startbutton = document.querySelector(".startbutton")
var questionsection = document.querySelector(".questions")
var questiontitle = document.querySelector(".questiontitle")
var questionOptions = document.querySelector(".questionoptions")

startbutton.addEventListener("click" , function() {
    startpage.classList.add("hide")
questionsection.classList.remove("hide")
displayQuestion(questions[0])
})

function displayQuestion(currentQuestion) {
    console.log(currentQuestion) 
    questiontitle.textContent= currentQuestion.question
    for (let i = 0; i < currentQuestion.options.length; i++) {
        // console.log(i)
        var answerButton = document.getElementById("question" + (i+1))  
        answerButton.value= currentQuestion.options[i]
        answerButton.textContent= currentQuestion.options[i]
        answerButton.addEventListener("click" , function(event) {
            console.log(questionCount)
            if(event.target.innnerText === currentQuestion.answer) {
                displayCorrect()
            } else { 
                displayWrong() 
            }
            
        }) 
    
    }
}

function checkScores() {
    if (questionCount < questions.length) {
        questionCount ++  
        displayQuestion(questions[questionCount])
    }
   
}

// document.querySelectorAll('.question1').forEach(item => {
//     item.addEventListener('click', event => {
//         checkScores();
//     })
// })

function displayCorrect() {
console.log("correct")
checkScores()
}

function displayWrong() {
console.log("wrong")
checkScores()
}