var score = 0;
var currentTime = 0;
var currentQuestions = 0;
var i = 0;
var timer;



// Questions, choices, correct answer
var quizQuestions = [{
    quizTitle : "cool1",
    questionChoices : ["hi", "i'm", "made", "up"],
    questionAnswer : "hi",
},
{
    quizTitle : "cool2",
    questionChoices : ["hi", "i'm", "made", "up"],
    questionAnswer : "i'm",
},
]



var startButton = document.getElementById("start");
var showQuestion = document.getElementById("hiddenQuest");
var countdown = document.getElementById("timeLeft");


startButton.addEventListener("click", startGame);
//First question appears when user clicks start game. Timer also begins counting down.
function startGame() {
    
    startButton.style.display = "none";
    showQuestion.style.display = "block";

    //start timer//
    currentTime = 91;
    

    timer = setInterval(function() {
        currentTime--;
        countdown.textContent = currentTime;
        if (currentTime <= 0) {
            clearInterval(timer);
            //gameOver();
        }
    }, 1000);
    askQuestion()
}

function askQuestion() {

}