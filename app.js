/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer,dice1, dice2, gamePlaying,scoreSet;
var diceRoll=[];
scoreSet = 100;
start();
document.querySelector(".btn-roll").addEventListener("click",function(){
  if (gamePlaying){

    // generate a random number
    dice1 = Math.floor(( Math.random() * 6 )) +1;
    dice2 = Math.floor(( Math.random() * 6 )) +1;
    // store dice in diceRoll
  /*  diceRoll.push(dice); */
    // dice pic shows up
    var dice0DOM = document.getElementById("dice-0");
    var dice1DOM = document.getElementById("dice-1");
    dice0DOM.style.display = "block";
    dice1DOM.style.display = "block";
    // relate the random number to the Dice

    dice0DOM.src = "dice-"+dice1+".png";
    dice1DOM.src = "dice-"+dice2+".png";
    // update the round score IF the rolled number is not 1;
    //var lastDice = diceRoll[diceRoll.length-2];

  /*  if (lastDice ===6 && dice===6 && diceRoll.length >=2) {


      console.log(lastDice);
      document.getElementById("score-"+activePlayer).textContent=0;
      scores[activePlayer]=0;
      nextPlayer();
    } else
    */ if (dice1 !== 1 && dice2 !== 1){
        //Add Score
        roundScore += (dice1 +dice2); // == roundScore = roundScore + dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;


    }else {
       nextPlayer();
    }
  };

});

document.querySelector(".btn-hold").addEventListener("click",function(){
  if(gamePlaying){
    //add current score to global scores
    scores[activePlayer] += roundScore;

    //update it to UI
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];

    //check if player won the Game
    if (scores[activePlayer] >= scoreSet){
      gamePlaying = false;
      document.querySelector("#name-"+activePlayer).textContent = "Winner!";
      document.getElementById("dice-0").style.display = "none";
      document.getElementById("dice-1").style.display = "none";
      document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
      document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");

    } else {
       nextPlayer();
    }
  }
});


document.querySelector(".btn-new").addEventListener("click",start);
// grab the value from input text
function scoreSetting (){
   scoreSet = document.getElementById("scoreSetting").value;
   start();
   return scoreSet;
}
function start(){
  gamePlaying = true;
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;


  document.getElementById("dice-0").style.display = "none";
  document.getElementById("dice-1").style.display = "none";

  document.getElementById("score-0").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("acitve");

  document.querySelector(".player-0-panel").classList.add("active");
}






function nextPlayer(){
  //Next player
  //ternary operator
  activePlayer === 0? activePlayer = 1: activePlayer = 0;
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //document.querySelector(".player-0-panel").classList.remove("active");
  //document.querySelector(".player-1-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".player-0-panel").classList.toggle("active");

  document.getElementById("dice-0").style.display = "none";
  document.getElementById("dice-1").style.display = "none";
};


// //DOM by Using ID    //only change textContent
// // setter
//
//
// // document.querSelector('#current-' + activePlayer).innerHTML = "<em>" + dice +" </em>  "
//
// // getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
