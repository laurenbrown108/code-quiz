var clear = document.getElementById("clear");
var listedScore = document.getElementById("all-scores");

clear.addEventListener("click", clearScore);

//Local Storage
var scoreList = localStorage.getItem("scoreList")
scoreList = JSON.parse(scoreList);

//Add Score
var newLi = document.createElement("li");
newLi.innerHTML = scoreList.savedInitials + " : " + scoreList.savedScore
console.log(newLi);
listedScore.appendChild(newLi);

//Clear score//
function clearScore () {
    localStorage.clear();
    location.reload();
}


