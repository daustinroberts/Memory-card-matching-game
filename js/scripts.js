back end
var pairs = [];
var game = [];
var turnCounter = 0;


//potential shuffle method:
Array.prototype.shuffle = function () {
  var i = this.length, j, temp;
  while(--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}
//potential board creating function
function gameBoard() {
  turnCounter = 0;
  var output = "";
  pairs.shuffle();
  for(var i=0; i<pairs.length; i++) {
    output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
  }
}

//front end
$(document).ready(function() {
  // event.preventDefault();

  $("form#input").click(event);

  var name = $("#nameInput").val();
  $("#nameDisplayId").text(name);
  $("form#form").hide();
  // gameBoard();
});
