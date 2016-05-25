'use strict';
var startGame = document.querySelector(".input");
//console.log(startGame);
startGame.addEventListener('click', storeInfo);

var totalPlaying;
var infoObj = {};
function storeInfo(){
    //this grabs and stores the player's names
  var player1Name = document.querySelector('#playerOne').value;
  //console.log(player1Name);
  var player2Name = document.querySelector('#playerTwo').value;

//loop through number of players radio button to determine how many players

var totalPlayers = document.querySelectorAll(".numOfPlayers");
//console.log(totalPlayers);
for(var ii = 0; ii < totalPlayers.length; ii++) {
  //console.log(typeof totalPlayers[ii].value);

   if(totalPlayers[ii].checked === true) {
       totalPlaying = totalPlayers[ii].value;
       //console.log(totalPlaying);

   }
  //console.log(player1Name);
  //console.log(player2Name);

  var roundsToPlay = document.querySelectorAll(".rounds");
  //console.log(roundsToPlay);
  for(var i = 0; i < roundsToPlay.length; i++) {
     if(roundsToPlay[i].checked == true) {
         var selectedNum = roundsToPlay[i].value;
         console.log(selectedNum);
     }
}
infoObj.peoplePlaying = totalPlaying;
infoObj.player1Name = player1Name;
infoObj.player2Name = player2Name;
infoObj.rounds = selectedNum;
console.log(infoObj);
localStorage.setItem('player1', player1Name);
localStorage.setItem('player2', player2Name);
localStorage.setItem('numOfPlayers', totalPlaying);
localStorage.setItem('rounds', selectedNum);

}
}

var players2 = document.querySelector('#twoPlayers');
console.log(players2);
players2.addEventListener('change', makePlayer2InputAppear);
function makePlayer2InputAppear(){
  var player2Input = document.querySelectorAll('#playerTwo');
  //console.log(player2Input);
  for(var x=0; x<player2Input.length; x++){
    player2Input[x].style.visibility ="visible";
  }
}
