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
    answer: "C: The <body> section"

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
var startpage = document.querySelector(".startpage");
var startbutton = document.querySelector(".startbutton");
var questionsection = document.querySelector(".questions");
var questiontitle = document.querySelector(".questiontitle");
var questionOptions = document.querySelectorAll(".question1");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var totalTime = 100

var button1 = document.getElementById("question1");
var button2 = document.getElementById("question2");
var button3 = document.getElementById("question3");
var button4 = document.getElementById("question4");
button1.addEventListener("click",buttonClicked);
button2.addEventListener("click",buttonClicked);
button3.addEventListener("click",buttonClicked);
button4.addEventListener("click",buttonClicked);

var finalScore = document.getElementById("finalScore");
var initialInput = document.getElementById("initialInput");
var highScores = document.getElementById("highScores");
var listOfHighScores = document.getElementById("listOfHighScores");
submit.addEventListener("click",buttonClicked);

startbutton.addEventListener("click" , function() {
    startpage.classList.add("hide")
        questionsection.classList.remove("hide");
    
    var timer = setInterval(function() {
      totalTime--;
       timeLeft.textContent = totalTime;
       if(totalTime <= 0) {
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
    questionCount = 0
    displayQuestion(questions[0])
});

function displayQuestion(currentQuestion) {
    // console.log(currentQuestion) 
    if (questionCount < questions.length) {
         questiontitle.textContent= currentQuestion.question
    for (let i = 0; i < currentQuestion.options.length; i++) {
        var answerButton = document.getElementById("question" + (i+1))  
        answerButton.value= currentQuestion.options[i]
        answerButton.textContent= currentQuestion.options[i]
          
    }
} else {
    gameOver()
}
}

function buttonClicked(event){
    event.stopPropagation();
    console.log("clicked")
    console.log(questionCount)
    if(event.target.innerText === questions[questionCount].answer) {
        displayCorrect()
    } else { 
        displayWrong() 
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

function gameOver() {
    clearInterval(timer)
    finalScore.textContent = questions.answer
}

function storeHighScores(event) {
    event.preventDefault();
    if (initialInput.value === "") {
        alert("Please enter your intials!");
        return;
    }
}

var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
//     showHighScores(); {
// }

// var i = 0;
// function showHighScores( {

    // var savedHighScores = localStorage.getItem("high scores");
    //    if (savedHighScores === null) {
    //     return;
    //    }
    //    console.log(savedHighScores);

    //    var storedHighScores = JSON.parse(savedHighScores);

//        for (i < storedHighScores.length; i++) {
//         var eachNewHighScore = document.createElement("p");
//         eachNewHighScore.innerHTML = storedHighScores[i].initials + ":" + storedHighScores[i].score;
//         listOfHighScores.appendChild(eachNewHighScore);
        
//        }
// })

initialInput.addEventListener("click", function(){
    storeHighScores(event);
});


