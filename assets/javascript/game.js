$(document).ready(function() {
// creates a Random Numer between 19->120
var randomNumber = Math.floor(Math.random() * 102) + 19;
$('#random_num').html(randomNumber);

// creates a random number for each crystal between 1->12
var crystalNumA = Math.floor(Math.random() * 12 ) + 1;
var crystalNumB = Math.floor(Math.random() * 12 ) + 1;
var crystalNumC = Math.floor(Math.random() * 12 ) + 1;
var crystalNumD = Math.floor(Math.random() * 12 ) + 1;

// sets counter to 0, counter will be used to store user score
var counter = 0;

// sets wins % losses to 0 and prints to screen
var wins = 0;
$('#numwins').html(wins);
var losses = 0;
$('#numlosses').html(losses);

// when the user clicks the play again button the counter is reset to 0,
// and printed to screen, the random number is reset and printed to screen,
// and the 4 crystal numbers are reset.
$('#play_again').on('click',function() {
	counter = 0;
	$('#your_score').html(counter);
  
  randomNumber = Math.floor(Math.random() * 102) + 19;
  $('#random_num').html(randomNumber);
  
  crystalNumA = Math.floor(Math.random() * 12 ) + 1;
  crystalNumB = Math.floor(Math.random() * 12 ) + 1;
  crystalNumC = Math.floor(Math.random() * 12 ) + 1;
  crystalNumD = Math.floor(Math.random() * 12 ) + 1;
});

// when the user clicks the "reset game" everything in the "play again" function
// is reset plus the wins and losses are set to 0
$('#reset_game').on('click',function() {
	counter = 0;
	$('#your_score').html(counter);
	 
	randomNumber = Math.floor(Math.random() * 102) + 19;
	$('#random_num').html(randomNumber);
  	
  	wins = 0;
	$('#numwins').html(wins);

 	losses = 0;
	$('#numlosses').html(losses);

  crystalNumA = Math.floor(Math.random() * 12 ) + 1;
  crystalNumB = Math.floor(Math.random() * 12 ) + 1;
  crystalNumC = Math.floor(Math.random() * 12 ) + 1;
  crystalNumD = Math.floor(Math.random() * 12 ) + 1;
  
});


// This is a set of 4 "onclick-> if ,else if" statements that determins
// what happens when the user clicks each crystal

$('#crystal_1').on('click',function(){
	counter += crystalNumA;
	$('#your_score').html(counter);

	if (counter === randomNumber) {
      alert("You win!");
      wins ++;
      $('#numwins').html(wins)
    }

    else if (counter >= randomNumber) {
      alert("You lose!!");
      losses ++;
      $('#numlosses').html(losses);
    }
});

$('#crystal_2').on('click',function(){
	counter += crystalNumB;
	$('#your_score').html(counter);

	if (counter === randomNumber) {
      alert("You win!");
      wins ++;
      $('#numwins').html(wins);

    }

    else if (counter >= randomNumber) {
      alert("You lose!!");
      losses ++;
      $('#numlosses').html(losses);

    }
});

$('#crystal_3').on('click',function(){
	counter += crystalNumC;
	$('#your_score').html(counter);

	if (counter === randomNumber) {
      alert("You win!");
      wins ++;
      $('#numwins').html(wins);

    }

    else if (counter >
     randomNumber) {
     alert("You lose!!");
  	losses ++;
  	$('#numlosses').html(losses);

    }
});

$('#crystal_4').on('click',function(){
	counter += crystalNumD;
	$('#your_score').html(counter);

	if (counter === randomNumber) {
      alert("You win!");
      wins ++;
      $('#numwins').html(wins);

    }

    else if (counter >= randomNumber) {
      alert("You lose!!");
      losses ++;
      $('#numlosses').html(losses);

    }
});



});


