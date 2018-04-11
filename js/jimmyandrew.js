
var initialArray = ["A","B","A","B"];
var random = 1;


$(document).ready(function() {

  $("form#nameInput").submit(function(event) {
    event.preventDefault();
  });

for(var i = 0; i<initialArray.length; i++) {
  $("span#indexval" + (i+1)).text(initialArray[i]);

};

console.log(initialArray.length);
  $(".card").click(function() {
    $(this).find("span").css("display", "block");

    // var cellValue = $(this).attr("p");
    var cardValue = ($(this).find("p").text());

    // $(this).find("span").removeClass(".showCard");
    // var showValue = ($(this).show());
    console.log(cardValue);

  });
})
