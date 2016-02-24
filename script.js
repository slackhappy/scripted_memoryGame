var userPoint = 0;
var faceUp = [];
var assignments = 1;
var divIds = [];
var matches = 0;

function fillBoard() {
  //TODO: randomly assign positions to the tiles on the screen call
  // addTileToBoard here
  // Hint: You can use a forEach or a for loop
  var tiles = [
    "lays",
    "doritos",
    "cheetos",
    "fritos",
    "tostitos",
    "ruffles",
    "smartfood",
    "sunchips",
  ];
  var doubleTiles = [];
  for (var i = 0; i < tiles.length; i++) {
    doubleTiles.push(tiles[i]);
    doubleTiles.push(tiles[i]);
  }
  var shuffled = shuffle(doubleTiles);
  for (var i = 0; i < shuffled.length; i++) {
    addTileToBoard(shuffled[i]);
  }
};

function shuffle(array) {
  //TODO: use this method to shuffle the array
  var newArray = [];
  var length = array.length;

  for(i = 0; i < length; i++) {
    var arrLen = array.length;
    var randomPick = Math.floor(Math.random() * arrLen);
    var element = array[randomPick];
    newArray.push(element);
    array.splice(array.indexOf(element), 1);
    arrLen --;
  }

  return newArray;
};

function addTileToBoard(element) {
  //TODO: randomly assign ids to the divs
  var div = '<div class="tile ' + element + ' hidden"></div>';
  $(".game").append(div);
};

function clearBoard() {
  $(".game").empty();
};

function checkTilesMatch(array) {
  //TODO: check to see if the value of the 2 face up tile match

};

function setPoint() {
    $('#userPoint').text(userPoint);
};

function evaluate( evt ) {
    var tileType = evt.target.getAttribute('class');
    var divID = evt.target.getAttribute("id");
    //TODO: If this is first tile clicked store the card if it is the second tile
    // clicked check to see if it is the same as the first.
};


$(document).ready(function() {
  fillBoard();

  $('.tile').click( function(e) {
      var target = $(e.target);
      if (target.hasClass("hidden")) {
        target.toggleClass("hidden");
      }
  });


});
