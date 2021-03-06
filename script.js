// Questions, choices, correct answer
var quizQuestions = [{
    title: "Inside which element do we put the JavaScript?",
    answerOne: "script",
    answerTwo: "js",
    answerThree: "javascript",
    answerFour: "scripting",
    correct: "script",
},
{
    title: "Where is the correct place to insert a JavaScript?",
    answerOne: "The body section",
    answerTwo: "The head section",
    answerThree: "Both will work",
    answerFour: "Neither will work",
    correct: "Both will work",
},
{
    title: "How do you write 'Hello World' in an alert box?",
    answerOne: "alert('Hello World');",
    answerTwo: "alertBox('Hello World');",
    answerThree: "msg('Hello World');",
    answerFour: "msgBox('Hello World');",
    correct: "alert('Hello World');",
},
{
    title: "How do you create a function in JavaScript?",
    answerOne: "function myFunction()",
    answerTwo: "function = myFunction()",
    answerThree: "function:myFunction()",
    answerFour: "function(myFunction)",
    correct: "function myFunction()",
},
{
    title: "How to write an IF statement in JavaScript?",
    answerOne: "if (i == 5)",
    answerTwo: "if i = 5 then",
    answerThree: "if i = 5",
    answerFour: "if i == 5 then",
    correct: "if (i == 5)",
}
]

//variables
var currentScore = 0;
var currentTime = 91;
var currentQuestion = 0;
var timer;

var startButton = document.getElementById("start");
var showQuestion = document.getElementById("hiddenQuest");
var showScore = document.getElementById("hiddenScore");
var countdown = document.getElementById("timeLeft");
var questionElement = document.getElementById("questions");
var choiceA = document.getElementById("btnA");
var choiceB = document.getElementById("btnB");
var choiceC = document.getElementById("btnC");
var choiceD = document.getElementById("btnD");
var score = document.getElementById("score");
var enterScore = document.getElementById("addScore");
var userInput = document.getElementById("user-input")



btnA.addEventListener("click", checkUserGuess);
btnB.addEventListener("click", checkUserGuess);
btnC.addEventListener("click", checkUserGuess);
btnD.addEventListener("click", checkUserGuess);
enterScore.addEventListener("click", appendScore);


//Store score, goes to High Scores page
function appendScore() {
    var scoreList = JSON.parse(localStorage.getItem("scoreList")) || [];
    var data = {
        savedInitials: userInput.value,
        savedScore: currentScore
    }
    console.log(data);

    scoreList = data;
    localStorage.setItem("scoreList", JSON.stringify(scoreList));

    window.location.replace("./highscores.html")
    console.log(scoreList);
}

//End game, display score
function gameOver() {
    showQuestion.style.display = "none";
    showScore.style.display = "block";
    currentTime = 0 + 1;
    score.innerHTML = currentScore + (" out of 5");
}


//Compare user guess to correct answer, reveal if correct or incorrect, ask next question or end game
function checkUserGuess() {
    var userGuess = this.textContent;
    if (userGuess === quizQuestions[currentQuestion].correct) {
        currentTime == currentTime;
        currentScore++;
        console.log(currentScore);
        //alert("Correct Answer!")
        currentQuestion++;
    }
    else {
        currentTime = currentTime - 10;
        //alert("Incorrect Answer.")
        currentQuestion++;
    }
    if (currentQuestion === quizQuestions.length) {
        gameOver();
    } else {
        askQuestion()
    }
}
//display question//
function askQuestion() {

    questionElement.textContent = quizQuestions[currentQuestion].title;
    choiceA.innerHTML = quizQuestions[currentQuestion].answerOne;
    choiceB.innerHTML = quizQuestions[currentQuestion].answerTwo;
    choiceC.innerHTML = quizQuestions[currentQuestion].answerThree;
    choiceD.innerHTML = quizQuestions[currentQuestion].answerFour;
}

//First question appears when user clicks start game. Timer also begins counting down.
startButton.addEventListener("click", startGame);
//First question appears when user clicks start game. Timer also begins counting down.
function startGame() {
    startButton.style.display = "none";
    showQuestion.style.display = "block";

    //start timer//
    timer = setInterval(function () {
        currentTime--;
        countdown.textContent = currentTime;
        if (currentTime <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
    askQuestion();

}