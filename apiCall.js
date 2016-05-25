'use strict';
// function oneAtATime (event){
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
//add a listen event to a submit button to generate a new/fresh question. stop at 10 per round
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
}
}
