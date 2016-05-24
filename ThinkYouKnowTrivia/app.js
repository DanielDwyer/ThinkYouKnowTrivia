'use strict';
var numberOfPlayers = document.querySelectorAll(".players2").value;
console.log(numberOfPlayers)
numberOfPlayers.addEventListener('change', addPlayer);

function addPlayer(event){
var player2input = document.querySelector('players2').value;

if(player2input.checked == true){
player2input.style.visibility = "visible";
}
}

// add event listener to start game button
var startGame = document.querySelector(".input");
//console.log(startGame);
startGame.addEventListener('click', storeInfo);

var infoObj = {};
function storeInfo(){
  var playerName = document.querySelector('#userName').value;
  console.log(playerName);

  var roundsToPlay = document.querySelectorAll(".rounds");
  console.log(roundsToPlay);
  for(var i = 0; i < roundsToPlay.length; i++) {
     if(roundsToPlay[i].checked == true) {
         var selectedNum = roundsToPlay[i].value;
         //console.log(selectedNum);
     }
}infoObj.playerName = playerName;
infoObj.rounds = selectedNum;
console.log(infoObj);
localStorage.setItem('player', playerName);
localStorage.setItem('rounds', selectedNum);

}
//-----------------------------------------------
