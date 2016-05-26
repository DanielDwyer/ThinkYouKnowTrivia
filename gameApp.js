'use strict';
//ajax function has to be in the global scope so I can call it for each new question
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
//---------------------------------------------------------------------------------
var div1;
var div2;
var local = localStorage;
//console.log(local);
//number of players playing
var numForm=(Number(local.numOfPlayers));
//console.log(players);
//console.log(typeof numForm);
//number of rounds to be played
var rounds = (Number(local.rounds));
console.log(rounds);

//starts with one player and one round, two rounds, three rounds, and goes to 2 players, 1,2, or 3 rounds
var parentOfScoreBall;
if(numForm === 1){
    if(rounds === 1){
      for(var i= 0; i<10;i++){
          parentOfScoreBall = document.querySelector(".scoreBalls");
  //parentOfScoreBall = document.getElementsByClassName("scoreBalls");
  //console.log(parentOfScoreBall);
          var scoreBall = document.createElement('div');
          scoreBall.style.border = "1px solid black";
          scoreBall.style.height = "30px";
          scoreBall.style.width = "30px";
          scoreBall.style.float ="left";
          scoreBall.style.borderRadius = "50%";
          scoreBall.style.marginLeft = "10px";
          scoreBall.style.marginTop = "20px";
          scoreBall.className = "ball"+[i];
          parentOfScoreBall.style.height = "100px";
          parentOfScoreBall.appendChild(scoreBall);
      }
    }
    if(rounds === 2){
      for(var i= 0; i<20;i++){
        parentOfScoreBall = document.querySelector(".scoreBalls");
        //parentOfScoreBall = document.getElementsByClassName("scoreBalls");
        //console.log(parentOfScoreBall);
        var scoreBall = document.createElement('div');
        scoreBall.style.border = "1px solid black";
        scoreBall.style.height = "30px";
        scoreBall.style.width = "30px";
        scoreBall.style.float ="left";
        scoreBall.style.borderRadius = "50%";
        scoreBall.style.marginLeft = "10px";
        scoreBall.style.marginTop = "20px";
        scoreBall.className = "ball"+[i];
        parentOfScoreBall.style.height = "150px";
        parentOfScoreBall.appendChild(scoreBall);
      }
    }
    if(rounds === 3){
      for(var i= 0; i<30;i++){
        parentOfScoreBall = document.querySelector(".scoreBalls");
//parentOfScoreBall = document.getElementsByClassName("scoreBalls");
//console.log(parentOfScoreBall);
        var scoreBall = document.createElement('div');
        scoreBall.style.border = "1px solid black";
        scoreBall.style.height = "30px";
        scoreBall.style.width = "30px";
        scoreBall.style.float ="left";
        scoreBall.style.borderRadius = "50%";
        scoreBall.style.marginLeft = "10px";
        scoreBall.style.marginTop = "20px";
        scoreBall.className = "ball"+[i];
        parentOfScoreBall.style.height = "200px";
        parentOfScoreBall.appendChild(scoreBall);
      }
    }
  }
//If there are two players
  if(numForm === 2){
    if(rounds === 1){
      for(var i= 0; i<10;i++){
        parentOfScoreBall = document.querySelector(".scoreBalls");
  //parentOfScoreBall = document.getElementsByClassName("scoreBalls");
  //console.log(parentOfScoreBall);
        var scoreBall = document.createElement('div');
        scoreBall.style.border = "1px solid black";
        scoreBall.style.height = "30px";
        scoreBall.style.width = "30px";
        scoreBall.style.float ="left";
        scoreBall.style.borderRadius = "50%";
        scoreBall.style.marginLeft = "10px";
        scoreBall.style.marginTop = "20px";
        scoreBall.className = "p1ball"+[i];
        scoreBall.innerHTML ="P1";
        parentOfScoreBall.style.height = "200px";
        parentOfScoreBall.appendChild(scoreBall);

        parentOfScoreBall = document.querySelector(".scoreBalls");
  //parentOfScoreBall = document.getElementsByClassName("scoreBalls");
  //console.log(parentOfScoreBall);
        var scoreBall = document.createElement('div');
        scoreBall.style.border = "1px solid black";
        scoreBall.style.height = "30px";
        scoreBall.style.width = "30px";
        scoreBall.style.float ="left";
        scoreBall.style.borderRadius = "50%";
        scoreBall.style.marginLeft = "10px";
        scoreBall.style.marginTop = "20px";
        scoreBall.className = "p2ball"+[i];
        scoreBall.innerHTML ="P2";
        parentOfScoreBall.style.height = "200px";
        parentOfScoreBall.appendChild(scoreBall);
      }
    }
    if(rounds === 2){
      for(var i= 0; i<20;i++){
        parentOfScoreBall = document.querySelector(".scoreBalls");
//parentOfScoreBall = document.getElementsByClassName("scoreBalls");
//console.log(parentOfScoreBall);
        var scoreBall = document.createElement('div');
        scoreBall.style.border = "1px solid black";
        scoreBall.style.height = "30px";
        scoreBall.style.width = "30px";
        scoreBall.style.float ="left";
        scoreBall.style.borderRadius = "50%";
        scoreBall.style.marginLeft = "10px";
        scoreBall.style.marginTop = "20px";
        scoreBall.className = "p1ball"+[i];
        scoreBall.innerHTML ="P1";
        parentOfScoreBall.style.height = "300px";
        parentOfScoreBall.appendChild(scoreBall);

        parentOfScoreBall = document.querySelector(".scoreBalls");
//parentOfScoreBall = document.getElementsByClassName("scoreBalls");
//console.log(parentOfScoreBall);
        var scoreBall = document.createElement('div');
        scoreBall.style.border = "1px solid black";
        scoreBall.style.height = "30px";
        scoreBall.style.width = "30px";
        scoreBall.style.float ="left";
        scoreBall.style.borderRadius = "50%";
        scoreBall.style.marginLeft = "10px";
        scoreBall.style.marginTop = "20px";
        scoreBall.className = "p2ball"+[i];
        scoreBall.innerHTML ="P2";
        parentOfScoreBall.style.height = "300px";
        parentOfScoreBall.appendChild(scoreBall);
      }
    }
    if(rounds === 3){
      for(var i= 0; i<30;i++){
        parentOfScoreBall = document.querySelector(".scoreBalls");
//parentOfScoreBall = document.getElementsByClassName("scoreBalls");
//console.log(parentOfScoreBall);
        var scoreBall = document.createElement('div');
        scoreBall.style.border = "1px solid black";
        scoreBall.style.height = "30px";
        scoreBall.style.width = "30px";
        scoreBall.style.float ="left";
        scoreBall.style.borderRadius = "50%";
        scoreBall.style.marginLeft = "10px";
        scoreBall.style.marginTop = "20px";
        scoreBall.className = "p1ball"+[i];
        scoreBall.innerHTML ="P1";
        parentOfScoreBall.style.height = "400px";
        parentOfScoreBall.appendChild(scoreBall);

        parentOfScoreBall = document.querySelector(".scoreBalls");
//parentOfScoreBall = document.getElementsByClassName("scoreBalls");
//console.log(parentOfScoreBall);
        var scoreBall = document.createElement('div');
        scoreBall.style.border = "1px solid black";
        scoreBall.style.height = "30px";
        scoreBall.style.width = "30px";
        scoreBall.style.float ="left";
        scoreBall.style.borderRadius = "50%";
        scoreBall.style.marginLeft = "10px";
        scoreBall.style.marginTop = "20px";
        scoreBall.className = "p2ball"+[i];
        scoreBall.innerHTML ="P2";
        parentOfScoreBall.style.height = "400px";
        parentOfScoreBall.appendChild(scoreBall);
      }
    }
  }

//adding event listen to start game when the start game button is clicked
//greeting to greet either one or both players
var greeting = document.querySelector('.greeting');
console.log(greeting);
var p1 = local.player1;
var p2 = local.player2;
console.log(p1, p2);
if(numForm === 1){
  greeting.innerHTML = p1 + ", Welcome to Think You Know Trivia ";
}else{
  greeting.innerHTML = p1 +" & "+ p2 + ", Welcome to Think You Know Trivia ";
}

var startBtn = document.querySelector('.begin');
console.log(startBtn);
startBtn.addEventListener('click', addQuestion);

function addQuestion(event){
  //remove greeting, click below to begin, and button
  var parent = document.querySelector('.questionHere');
  console.log(parent);
  parent.removeChild(greeting);
  var clickBelow = document.querySelector('.clickHere');
  parent.removeChild(clickBelow);
 parent.removeChild(startBtn);

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
  ajax('GET', 'http://jservice.io/api/random', thingToDo );
  function thingToDo(err, data){
    console.log(arguments);
  if(!err){
      console.log(data[0].answer);
      console.log(data[0].question);
    compare = data[0].answer;

    div1 = document.createElement('div');
    div2 = document.createElement('div');
    div1.innerHTML = data[0].question;
    div1.className = "questionText";
    div2.innerHTML = data[0].answer;
    div1.className= "question";
    div2.className= "answer";
    var answer =document.createElement('input');
    answer.className = "answerText";
    answer.type = "text";
    answer.placeHolder = "Your Answer Goes Here";
    var answer1 = document.querySelector('.answerHere');
    //console.log(answer);
    answer1.appendChild(answer);
    var unHideMe = document.querySelector('.hideMe');
    var unHideMe2 = document.querySelector('.hideMe2');
    //console.log(unHideMe);
    unHideMe.style.visibility = "visible";
    unHideMe2.style.visibility ="visible";
    parent.appendChild(div1);
  }
  }
}


var checkMyAnswer = document.querySelector('.hideMe2');
console.log(checkMyAnswer);

checkMyAnswer.addEventListener('click',  getnewq);
var counter = -1;
var officalAns;
   function getnewq() {

     counter++;
     console.log(counter);
     var totalQ = (numForm * rounds *10 );
     console.log(totalQ);
     if(counter >= (numForm * rounds *10 )){

     }else{
     var userAnswer = document.querySelector('.answerText').value;
        officalAns = div2.innerHTML;
       userAnswer=userAnswer.toLowerCase();
       officalAns=officalAns.toLowerCase();
       //console.log(officalAns);
       console.log(userAnswer);

     if(userAnswer == officalAns){
         console.log("Correct!");
         var location = ".ball"+counter;
         console.log(location);
         var balls = document.querySelector(location);
         console.log(balls);
         balls.style.backgroundColor = "green";
     }else{
       console.log("Wrong!");
       var location = ".ball"+counter;
       var balls = document.querySelector(location);
       balls.style.backgroundColor = "red";
     }


      ajax("GET", 'http://jservice.io/api/random', function(err, data) {
        console.log(data[0].question);
        officalAns = data[0].answer;
        console.log(data[0].answer);
         populateQ(data[0].question);
      });
}
   function populateQ(question) {
      var questionBox = document.querySelector('.question');
      questionBox.innerHTML = question;
      officalAns = div2.innerHTML;
      console.log(officalAns);

    }
}
