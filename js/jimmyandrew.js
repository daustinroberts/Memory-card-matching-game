



$(document).ready(function() {
  $(".card").click(function() {
    // var cellValue = $(this).attr("p");
    var cardValue = ($(this).find("p").text());
    console.log(cardValue);
  });
})
