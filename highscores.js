var clear = document.getElementById("clear");
var listedScore = document.getElementById("all-scores");

clear.addEventListener("click", clearScore);

//Local Storage
var scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse(scoreList);

console.log(scoreList);
console.log(scoreList.length);

//Display scores
for (var i = 0; i < scoreList.length; i++) {
    var newLi = document.createElement("li");
    newLi.innerHTML = scoreList[i]
    console.log(newLi);
    listedScore.appendChild(newLi);


}

//clear score//
function clearScore () {
    localStorage.clear();
    location.reload();
}


