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
      p1scoreball.style.marginTop = "20px";
      p1scoreball.className = "p1Ball"+(i+1);
      p1scoreball.innerHTML = "P1";
      p1scoreball.style.textAlign = "center";
      var scoreballZoneP1 = document.querySelector('.player1name');
      //console.log(scoreballZoneP1);
      scoreballZoneP1.style.height = (totalQ * 8)+"px";
      scoreballZoneP1.appendChild(p1scoreball);

    }
}

if(numOfPlayers === "2"){
  for(var j = 0; j < totalQ; j++){
    var p1scoreball = document.createElement('div');
    p1scoreball.style.border = "1px solid black";
    p1scoreball.style.height = "36px";
    p1scoreball.style.width = "36px";
    p1scoreball.style.float ="left";
    p1scoreball.style.borderRadius = "50%";
    p1scoreball.style.marginLeft = "10px";
    p1scoreball.style.marginTop = "20px";
    p1scoreball.className = "p1Ball"+(j+1);
    p1scoreball.innerHTML = "P1";
    p1scoreball.style.textAlign = "center";
    var scoreballZoneP1 = document.querySelector('.player1ScoreBalls');
    //console.log(scoreballZoneP1);
    scoreballZoneP1.style.height = (totalQ * 8)+"px";
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
  p2scoreball.style.marginTop = "20px";
  p2scoreball.className = "p2Ball"+(k+1);
  p2scoreball.innerHTML = "P2";
  p2scoreball.style.textAlign = "center";
  var scoreballZoneP2 = document.querySelector('.player2ScoreBalls');
  //console.log(scoreballZoneP2);
  scoreballZoneP2.style.height = (totalQ * 8)+"px";
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
function putQOnScreen(err, data){
  if(!err){
    question = data[0].question ;
    answer = data[0].answer ;
    console.log("Question: " + data[0].question);
    console.log("Answer: " + data[0].answer);
    var addQToThis = document.querySelector('.questionBox');
    //console.log(addQToThis);
    addQToThis.innerHTML = question;

    whosTurn();

    // var userAnswer = document.querySelector('.userAnswer');
    // console.log("USER ANSWER: ", userAnswer);
    // userAnswer = userAnswer.toLowerCase();
    // answer = answer.toLowerCase();
    // function compareAnswers(ans1, ans2){
    //   console.log('ANSWER1: ', ans1);
    //   console.log('ANSWER2: ', ans2);
    //   answer = answer.toLowerCase();
    //   playersAnswer = playersAnswer.toLowerCase();
    //   if(answer == userAnswer){
    //     console.log(answer);
    //     console.log(userAnswer);
    //     return true;
    //   }else{
    //     return false;
    //   }
    //
    // }
    // var clearAnswer = document.querySelector('.userAnswer');
    // console.log(clearAnswer);
    // clearAnswer.value = "";


        }
      }
//------------------------------------------------------------------------------


//-------------turn changer function
var counter = 0;
var itsYourTurn;
function whosTurn (){
  counter++;


  //player 1's turn
  turnNow = document.querySelector('.turn');
  turnNow.innerHTML = "It is " + player1 +"'s Turn";
  itsYourTurn = 1;


  if(counter % 2 === 0){
    //player 2's turn
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
  }
}


// --------------------answer checker function
// var userAnswer = document.querySelector('.userAnswer');
// console.log("USER ANSWER: ", userAnswer);
// userAnswer = userAnswer.toLowerCase();
// answer = answer.toLowerCase();
function compareAnswers(user, correct){
  console.log('USER: ', user);
  console.log('CORRECT: ', correct);
  correct = correct.toLowerCase();
  user = user.toLowerCase();
  if(user == correct){
    console.log("RIGHT!");
    return true;
  }else{
    console.log("Wrong :(");
    return false;
  }

}

//  var userAnswer = document.querySelector('.userAnswer').value;
//  userAnswer = userAnswer.toLowerCase();
//  console.log(userAnswer);
//  answer = answer.toLowerCase();
//  console.log(answer);
// // and var answer equals the officla answer
// function compareAnswers(ans1, ans2){
//   if(ans1 == ans2){
//     console.log(ans1);
//     console.log(ans2);
//     return true;
//   }else{
//     return false;
//   }
//
// }

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
checkAnsBttn.addEventListener('click', function(event){
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
    ajax('GET', 'http://jservice.io/api/random', putQOnScreen);




});
var userAnswer = document.querySelector('.userAnswer').value;
//----------------------------------------------------------------------------
// // event listener and function to store the name of the user's answer
// var userAnswer = document.querySelector('.userAnswer');
// var playersAnswer;
// userAnswer.addEventListener('change', function(){
//   playersAnswer = document.querySelector('.userAnswer').value;
// });
//console.log(userAnswer = document.querySelector('.userAnswer').innerHTML);
