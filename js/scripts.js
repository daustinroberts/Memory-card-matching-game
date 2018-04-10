// var turn = 1;
// var turn1Array = [];
// var turn2Array = [];
// /* this is to try and refactor and make this more scalable, not sure if it's even possible
// var cells = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6"]
//
// var value = function(cellName) {
//   $("input:radio[name=" + cellName + "]:checked").val();
// };
// console.log(value(cells[0]));
// */
// $(document).ready(function() {
//
//
//   $("#end-turn").click(function() {
//     var box1 = $("input:radio[name=cell1]:checked").val();
//     var box2 = $("input:radio[name=cell2]:checked").val();
//     var box3 = $("input:radio[name=cell3]:checked").val();
//     var box4 = $("input:radio[name=cell4]:checked").val();
//     var box5 = $("input:radio[name=cell5]:checked").val();
//     var box6 = $("input:radio[name=cell6]:checked").val();
//
//     var boxes = [box1, box2, box3, box4, box5, box6];
//
//     if (turn === 1) {
//       boxes.forEach(function(element) {
//         if (element) {
//           turn1Array.push(element)
//         }
//       });
//       turn +=1;
//     // } else if (turn === 2){
//     //   boxes.forEach(function(element) {
//     //     turn2Array.push(element)
//     //   });
//     // }
//     alert(turn1Array);
//     }
//   });
// });
//
// // if (turn === 1) {//when we click on a cell, push the value into a blank array
// //
// // }



var pair = [];
function compareCards() {

  for(var i=0; i<=1; i++){
    boxes.forEach(function(element) {
      if (element) {
        pair.push(element);
      }
    pair.push("Y");
    })
  }
  if (pair [0] == pair [1]){
    // alert("matched");

  } else {
    // alert("mismatched");
  }

}


$(document).ready(function() {
  $(".table").click(compareCards);
  $("#end-turn").click(function() {
    console.log(pair);
  })

});
