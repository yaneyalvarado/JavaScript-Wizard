var questions = [{
    question: "Example question" ,
    options: ["a-1", "a-2" , "a-3" , "a-4"] ,
    answer: "a-2"

},{
    question: "Example question 2" ,
    options: ["aa", "ab" , "ac" , "ad"] ,
    answer: "ab"

}]

var startpage = document.querySelector(".startpage")
var startbutton = document.querySelector(".startbutton")
var questionsection = document.querySelector(".questions")
startbutton.addEventListener("click" , function() {
    startpage.classList.add("hide")
questionsection.classList.remove("hide")
})