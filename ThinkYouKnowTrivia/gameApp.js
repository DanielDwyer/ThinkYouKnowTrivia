'use strict';
var local = localStorage;
console.log(local);
 var greeting = document.querySelector('.greeting');
 console.log(greeting);
 console.log(local.player);
 greeting.innerHTML = local.player + ", Welcome to Think You Know Trivia ";

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
   ;
     var div1 = document.createElement('div');
     var div2 = document.createElement('div');
     div1.innerHTML = data[0].question;
     div2.innerHTML = data[0].answer;

     div1.className= "question";
     div2.className= "answer";
     var answer =document.createElement('input');
     answer.type = "text";
     answer.placeHolder = "Your Answer Goes Here";
     parent.appendChild(answer);

     parent.appendChild(div1);
   }
   }
 }
