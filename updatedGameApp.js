'use strict';

//to access the local storage

var local = localStorage;
console.log(local);
var numOfPlayers = local.numOfPlayers;
console.log("Number of Players: " + numOfPlayers);
console.log(typeof numOfPlayers);
var player1 = local.player1;
console.log("Player One: " +player1);
var player2 = local.player2;
console.log("Player Two: " +player2);
var numOfRounds = local.rounds;
console.log("Number of Rounds: " + numOfRounds);

//This places player 1's name as whose turn it is
var turnNow = document.querySelector('.turn');
turnNow.innerHTML = "It is " + player1 +"'s Turn";

var player1SB = document.querySelector('.player1name');
var player2SB = document.querySelector('.player2name');
console.log(player1SB);
player1SB.innerHTML = player1;
// player1SB.stlye.clear ="both";
player2SB.innerHTML = player2;

// scoreBoard(numOfPlayers, numOfRounds);
//to print out the scoreboard depending on how many players and how may rounds
var totalQ = (numOfRounds*10);

  if(numOfPlayers === "1"){

    for(var i = 0; i < totalQ; i++){
      var p1scoreball = document.createElement('div');
      p1scoreball.style.border = "1px solid black";
      p1scoreball.style.height = "36px";
      p1scoreball.style.width = "36px";
      p1scoreball.style.float ="left";
      p1scoreball.style.borderRadius = "50%";
      p1scoreball.style.marginLeft = "10px";
      p1scoreball.style.paddingTop =" 7px";
      p1scoreball.style.marginTop =" 12px";
      p1scoreball.className = "p1Ball"+(i+1);
      p1scoreball.innerHTML = "P1";
      p1scoreball.style.textAlign = "center";
      var scoreballZoneP1 = document.querySelector('.player1ScoreBalls');
      //console.log(scoreballZoneP1);
      scoreballZoneP1.style.height = (totalQ * 7)+"px";
      scoreballZoneP1.appendChild(p1scoreball);

    }
}

if(numOfPlayers === "2"){
  var turnMeOn = document.querySelector('.cash2');
  turnMeOn.style.visibility ="visible";
  for(var j = 0; j < totalQ; j++){
    var p1scoreball = document.createElement('div');
    p1scoreball.style.border = "1px solid black";
    p1scoreball.style.height = "36px";
    p1scoreball.style.width = "36px";
    p1scoreball.style.float ="left";
    p1scoreball.style.borderRadius = "50%";
    p1scoreball.style.marginLeft = "10px";
    p1scoreball.style.marginTop ="10px";
    p1scoreball.style.paddingTop =" 7px";
    p1scoreball.className = "p1Ball"+(j+1);
    p1scoreball.innerHTML = "P1";
    p1scoreball.style.textAlign = "center";
    var scoreballZoneP1 = document.querySelector('.player1ScoreBalls');
    //console.log(scoreballZoneP1);
    if(numOfRounds === 1){
      scoreballZoneP2.style.height = (totalQ * 15)+"px";
      p1scoreball.style.marginTop ="0";
    }
    scoreballZoneP1.style.height = (totalQ * 7)+"px";
    scoreballZoneP1.appendChild(p1scoreball);
  }

  for(var k = 0; k < totalQ; k++){
  var p2scoreball = document.createElement('div');
  p2scoreball.style.border = "1px solid black";
  p2scoreball.style.height = "36px";
  p2scoreball.style.width = "36px";
  p2scoreball.style.float ="left";
  p2scoreball.style.borderRadius = "50%";
  p2scoreball.style.marginLeft = "10px";
  p2scoreball.style.marginTop ="10px";
  p2scoreball.style.paddingTop =" 7px";
  p2scoreball.className = "p2Ball"+(k+1);
  p2scoreball.innerHTML = "P2";
  p2scoreball.style.textAlign = "center";
  var scoreballZoneP2 = document.querySelector('.player2ScoreBalls');
  //console.log(scoreballZoneP2);
  if(numOfRounds === 1){
    scoreballZoneP2.style.height = (totalQ * 15)+"px";
    p2scoreball.style.marginTop ="0";
  }
  scoreballZoneP2.style.height = (totalQ * 7)+"px";
  scoreballZoneP2.appendChild(p2scoreball);
  scoreballZoneP2.visibility = "visible";
}
}
//------------------------------------------------------------------------------
//ajax function so can be called later
var playersAnswer;
var rightOrWrong;
function ajax(method, url, handler){
  var req = new XMLHttpRequest();
    req.onreadystatechange = onStateChange;
      function onStateChange(){
        if (req.readyState == 4){
          if(req.status == '200'){
            //var res = JSON.parse(req.responseText);
            handler(null, JSON.parse(req.responseText));
            //console.log(req.responseText);
          }else{
            console.log("Here" + this.status, null);
          }
        }
      }
        req.open(method, url);
        req.send();
}
//------------------------------------------------------------------------------
ajax('GET', 'http://jservice.io/api/random', putQOnScreen);
var question;
var answer;
var hint;
var airDate;
var qValue;
function putQOnScreen(err, data){
  if(!err){
    question = data[0].question ;
    answer = data[0].answer ;
    console.log("This is it: " + answer);
    answer = answer.replace(/(<i>)/g, "");
    answer = answer.replace(/(<\/i>)/g, "");
    answer = answer.replace(/(\/)/g, "");
      if(answer[0] === "A" && answer[1] === " "){
        answer = answer.substring(2);
      }
      if(answer[0] === "a" && answer[1] === " "){
        answer = answer.substring(2);
      }
      if(answer[0] === "T" && answer[1] === "h" && answer[2] === "e" && answer[3] === " "){
        answer = answer.substring(4);
      }
      if(answer[0] === "t" && answer[1] === "h" && answer[2] === "e" && answer[3] === " "){
        answer = answer.substring(4);
      }
    console.log("This is it: " + answer);
    hint = data[0].category['title'];
    airDate = data[0].airdate;
    console.log(airDate);
    qValue = data[0].value;
      if(qValue === null){
        qValue = 1000;
      }
    console.log("Airdate: " +airDate);
    console.log("Question Value: "+qValue);
    console.log(hint);
    console.log("Question: " + data[0].question);
    console.log("Answer: " + data[0].answer);
    var addQToThis = document.querySelector('.questionBox');
    //console.log(addQToThis);
    addQToThis.innerHTML = question;

    var actualValue = document.querySelector('.actualValue');
    var actualAirDate = document.querySelector('.actualAirDate');
    actualValue.innerHTML = "This Question is a $" +qValue+" question!";
    actualAirDate.innerHTML = "This Question Aired in: "+airDate.substring(0, 4);;

    whosTurn();

        }
      }
//-------------turn changer function
var counter = 0;
var itsYourTurn;
function whosTurn (){
  counter++;
  console.log(counter);
  var currentQ = document.querySelector('.current');
  console.log(currentQ);

  var totalNumOfQ = ((numOfPlayers)*(numOfRounds)*10);
  console.log(totalNumOfQ);

  if(counter > ((numOfPlayers)*(numOfRounds)*10)){
    var endIt = document.querySelector('.actualSubmitBtn');
    endIt.removeEventListener("click", allInOne);
    var endGame = document.querySelector('.questionBox');
    endGame.innerHTML = "The game is over! Good Game!";


  }

  if(numOfPlayers === "1"){
  if(counter <=10){
    currentQ.innerHTML = "Round 1 Question "+counter;
  }else if(counter > 10 && counter <= 20){
    currentQ.innerHTML = "Round 2 Question "+(counter-10);
  }else{
    currentQ.innerHTML = "Round 3 Question "+(counter-20);
  }
  }


  if(numOfPlayers === "2"){
  if(counter <=20){
    currentQ.innerHTML = "Round 1 Question "+counter;
  }else if(counter > 20 && counter <= 40){
    currentQ.innerHTML = "Round 2 Question "+(counter-20);
  }else{
    currentQ.innerHTML = "Round 3 Question "+(counter-40);
  }
}

  //player 1's turn
  turnNow = document.querySelector('.turn');
  turnNow.innerHTML = "It is " + player1 +"'s Turn";
  itsYourTurn = 1;


  if(counter % 2 === 0 && numOfPlayers === "2"){
    //player 2's turn
    console.log(counter);
    turnNow.innerHTML = "It is " + player2 +"'s Turn";
    itsYourTurn = 2;
  }else{
    //player 1's turn
    turnNow = document.querySelector('.turn');
    turnNow.innerHTML = "It is " + player1 +"'s Turn";
    itsYourTurn = 1;
  }
  if(counter >= (numOfRounds * numOfPlayers * 10)){
    //Do this because the game has reached it's total number of questions
    var endGame = document.querySelector('questionBox');
    endGame.innerHTML ="The Game is Over!"
  }
}


// --------------------answer checker function
// var userAnswer = document.querySelector('.userAnswer');
// console.log("USER ANSWER: ", userAnswer);
// userAnswer = userAnswer.toLowerCase();
// answer = answer.toLowerCase();
var cash = 0;
var p1Cash =0;
var p2Cash =0;
function compareAnswers(user, correct){
  console.log('USER: ', user);
  console.log('CORRECT: ', correct);
  correct = correct.toLowerCase();
  user = user.toLowerCase();

  if(user == correct){
    console.log("RIGHT!");
    //cash = cash + qValue;
    //console.log("Current Cash: " +cash);
    //return true;
      if(itsYourTurn === 1){
        p1Cash = p1Cash + qValue;
        var p1winnings = document.querySelector('.cash1');
        p1winnings.innerHTML ="Player 1 Winnings: "+ p1Cash;
      }else{
        p2Cash = p2Cash + qValue;
        var p2winnings = document.querySelector('.cash2');
        p2winnings.innerHTML ="Player 2 Winnings: "+ p2Cash;
      }
      return true;
  }else{
    console.log("Wrong :(");
    //cash = (Number(cash) - qValue);
    //console.log(typeof cash);
    //console.log(cash);
    console.log("Current Cash: " + cash);
    //return false;
      if(itsYourTurn === 1){
      p1Cash = p1Cash - qValue;
      var p1winnings = document.querySelector('.cash1');
      p1winnings.innerHTML ="Player 1 Winnings: $"+ p1Cash;
      }else{
      p2Cash = p2Cash - qValue;
      var p2winnings = document.querySelector('.cash2');
      p2winnings.innerHTML ="Player 2 Winnings: $"+ p2Cash;
      }
    return false;
  }

  // var p1winnings = document.querySelector('.cash1');
  // var p2winnings = document.querySelector('.cash2');
  // p1winnings.innerHTML ="Player 1 Winnings: "+ p1Cash;
  // p2winnings.innerHTML ="Player 2 Winnings: "+ p2Cash;
}

//add cash to scoreboard



//-----------ball colorer function
var p1Counter=0;
var p2Counter=0;
function colorBall (whosTurn, isAnswerCorrect){

  if(whosTurn == 1){
    p1Counter++;
    if(isAnswerCorrect === true){
      var ballForThisQ = document.querySelector('.p1Ball'+p1Counter);
      console.log(ballForThisQ);
      ballForThisQ.style.backgroundColor = "green";
    }else{
      var ballForThisQ = document.querySelector('.p1Ball'+p1Counter);
      ballForThisQ.style.backgroundColor = "red";
    }
  }else{
    p2Counter++;
    if(isAnswerCorrect === true){
      var ballForThisQ = document.querySelector('.p2Ball'+p2Counter);
      console.log(ballForThisQ);
      ballForThisQ.style.backgroundColor = "green";
    }else{
      var ballForThisQ = document.querySelector('.p2Ball'+p2Counter);
      ballForThisQ.style.backgroundColor = "red";
    }
  }
}

//----------------------------------------------


var checkAnsBttn = document.querySelector('.actualSubmitBtn');
console.log("ANSWER BUTTON",checkAnsBttn);
checkAnsBttn.addEventListener('click', allInOne);

function allInOne (event){
    event.preventDefault();
    // ajax('GET', 'http://jservice.io/api/random', putQOnScreen);
    // // var rightOrWrong =compareAnswers();


    var userAnswer = document.querySelector('.userAnswer');
    console.log("USER ANSWER HERE",userAnswer.value);
    console.log("CORRENT ANSWER: ", answer);

    var rightOrWrong = compareAnswers(userAnswer.value, answer);
    console.log("DID THE PLAYER GET THE ANSWER RIGHT? ", rightOrWrong);


    colorBall(itsYourTurn,rightOrWrong);

    var clearAnswer = document.querySelector('.userAnswer');
    //console.log(clearAnswer);
    clearAnswer.value = "";

    var clearHint = document.querySelector('.hint');
    console.log(clearHint);
    clearHint.innerHTML = "Hint Please!";
    ajax('GET', 'http://jservice.io/api/random', putQOnScreen);

    var lastAnswer = document.querySelector('.lastAnswer');
    console.log(lastAnswer);
    lastAnswer.innerHTML = "The last answer was: " + answer;

};

window.addEventListener("keypress", enterKey, false);
function enterKey (event){
  if(event.keyCode == 13 || event.whic == 13){
    event.preventDefault();
    // ajax('GET', 'http://jservice.io/api/random', putQOnScreen);
    // // var rightOrWrong =compareAnswers();


    var userAnswer = document.querySelector('.userAnswer');
    console.log("USER ANSWER HERE",userAnswer.value);
    console.log("CORRENT ANSWER: ", answer);

    var rightOrWrong = compareAnswers(userAnswer.value, answer);
    console.log("DID THE PLAYER GET THE ANSWER RIGHT? ", rightOrWrong);


    colorBall(itsYourTurn,rightOrWrong);

    var clearAnswer = document.querySelector('.userAnswer');
    //console.log(clearAnswer);
    clearAnswer.value = "";

    var clearHint = document.querySelector('.hint');
    console.log(clearHint);
    clearHint.innerHTML = "Hint Please!";
    ajax('GET', 'http://jservice.io/api/random', putQOnScreen);

    var lastAnswer = document.querySelector('.lastAnswer');
    console.log(lastAnswer);
    lastAnswer.innerHTML = "The last answer was: " + answer;
}
};



var userAnswer = document.querySelector('.userAnswer').value;
//---------------------------------
//adding a hint if you click the hint button
var hintButton = document.querySelector('.hint');
hintButton.addEventListener('click', function(){
  hintButton.innerHTML = hint;
});

// var actualValue = document.querySelector('.actualValue');
// var airDate = document.querySelector('.actualAirDate');
// actualValue.innerHTML = qValue;
// airDate.innerHTML = airDate;

//---------------------------------------------------------------------------
//adding a keyup event to
//var hereYeeHereYee = document.querySelector('.')
