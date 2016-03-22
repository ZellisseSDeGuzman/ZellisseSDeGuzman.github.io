$(document).ready(function() {

  var circleOrEx = "o"; // var is the variable, circleOrEx is the class, "o" targets the o's.
  var isGameInProgress = true; // this code targets the the game while playing, not to erase the "x's" and "o's"
  var winningCombos = { // targets the winning game, either "x" or "o"
    0: [ //0 is key, it strats off as zero becuase there is nothing there to start with.
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // When you click the board during the game to make either an X or an O appear.
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// Validating that the game is in progress
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //This code, I believe is who ever wins the game ("x" or "o") the pop up will appear and state who was thw winner of the game.

      if (circleOrEx === "o") {
        circleOrEx = "x";
      } else {
        circleOrEx = "o";
      }
    }

  });

  // When you click the button, a new grid (or game) will appear.
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //locates the div in the HTML to buld a new grid.
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { // filter is finding if the criteria for it to work is met
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { // if firstEmptyMemorySquare is equal to 1 then it proceeds
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //Once the game is finished, and the button is clicked, the div in the HTML will make a new board.
    boardSquares.each(function() { // the grid
      $(this).addClass("empty").empty();// the grid should be empty
    })
    isGameInProgress = true;
  })

  //This function is checking if player has won by looping through winning combos and if it's on a chosen square
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { // this function is the pop when a player wins
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) {// this does not allow the pop u when a player loses.
          playerWon = false;
        }
      }

      if (playerWon) { // deals with the winner or loser of the game.

        for (var j = 0; j < mulitArr[i].length; j++) { // tragetting the varable.
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //To whichever person (the "x" or the "o") wins, the winner's line turns green
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green"); // this chooses the square with the winning letter and turning it green
        alert("Winner is " + circleOrEx.toUpperCase() + "!"); //alert pop up for whichever letter is the winner
        isGameInProgress = false;
        return false; //this exits the loop
      }
    }


  }
});
