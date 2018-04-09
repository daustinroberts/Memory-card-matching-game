$(document).ready(function(){

// Use Fisher-Yates shuffle
  var card = document.getElementById("");
  var cards = [];

//type of display on click
  var displayCard = function Display(card){
    this.classList.toggle("matched");
    this.classList.toggle("hide");
    this.classList.toggle("show");
  }
  for (var i=0; i<cards.length; i++){
    cards[i].addEventListener("click", displayCard);
};
// chosen cards
  var showCards = [];
  for( var i=0; i<showCards.length; i++){
  var firstCard = [i,0];
  var secondCard = [0,i]
  if (showCards.length=== 2){
    function turn(move){
        move++;
        counter.innerHTML = moves;
    }
  }
}
//matched v nonmatched
  var nonmatched = [];
  var matched = function Match(first, second){
   if first == second{
     return true;
   } else {
     return false;
   }
 }





});
