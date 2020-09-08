var score = 0;
var currentTime = 0;
var currentQuestion = 0;
var timer;
var quiz


// Questions, choices, correct answer
var quizQuestions = [{
    title : "cool1?",
    answerOne : "yes",
    answerTwo : "no",
    answerThree : "maybe",
    answerFour : "so", 
    correct : "yes",
},
{
    title : "cool2?",
    answerOne : "no way",
    answerTwo : "idk",
    answerThree : "maybeidfk",
    answerFour : "uhh", 
    correct : "idk",
},
]



var startButton = document.getElementById("start");
var showQuestion = document.getElementById("hiddenQuest");
var countdown = document.getElementById("timeLeft");
var questionElement = document.getElementById("questions");
var choiceA = document.getElementById("btnA");
var choiceB = document.getElementById("btnB");
var choiceC = document.getElementById("btnC");
var choiceD = document.getElementById("btnD");


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
}
    askQuestion(quizQuestions);
//display question//
function askQuestion(quizQuestions) {
        questionElement.textContent = "";
        questionElement.textContent = quizQuestions[currentQuestion].title;
        choiceA.innerHTML = quizQuestions[currentQuestion].answerOne;
        choiceB.innerHTML = quizQuestions[currentQuestion].answerTwo;
        choiceC.innerHTML = quizQuestions[currentQuestion].answerThree;
        choiceD.innerHTML = quizQuestions[currentQuestion].answerFour;
};
function checkUserGuess(guess) {
    rightAnswer = quizQuestions[currentQuestion].correct;
    if (guess === rightAnswer) {
        score = score + 10;
        currentQuestion++;
        askQuestion(quizQuestions);
    }
    else {
        currentTime = currentTime - 10;
        currentQuestion++;
        askQuestion (quizQuestions);
    }
}