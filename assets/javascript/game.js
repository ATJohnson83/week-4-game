$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * 102) + 19;
$('#random_num').html(randomNumber);


var crystalNumA = Math.floor(Math.random() * 12 ) + 1;
var crystalNumB = Math.floor(Math.random() * 12 ) + 1;
var crystalNumC = Math.floor(Math.random() * 12 ) + 1;
var crystalNumD = Math.floor(Math.random() * 12 ) + 1;


var counter = 0;

var wins = 0;
$('#numwins').html(wins);

var losses = 0;
$('#numlosses').html(losses);

$('#play_again').on('click',function() {
	counter = 0;
	$('#your_score').html(counter);
 randomNumber = Math.floor(Math.random() * 102) + 19;
$('#random_num').html(randomNumber);
});


$('#reset_game').on('click',function() {
	counter = 0;
	$('#your_score').html(counter);
	 
	randomNumber = Math.floor(Math.random() * 102) + 19;
	$('#random_num').html(randomNumber);
  	
  	wins = 0;
	$('#numwins').html(wins);

 	losses = 0;
	$('#numlosses').html(losses);
});
// if (counter == randomNumber){
// 	alert("You Won!");
// }


$('#crystal_1').on('click',function(){
	counter += crystalNumA;
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


