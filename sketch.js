var square = [];
var stack = [];
var board = [ 0, 0, 3, 0, 2, 0, 6, 0, 0,
              9, 0, 0, 3, 0, 5, 0, 0, 1,
              0, 0, 1, 8, 0, 6, 4, 0, 0,
              0, 0, 8, 1, 0, 2, 9, 0, 0,
              7, 0, 0, 0, 0, 0, 0, 0, 8,
              0, 0, 6, 7, 0, 8, 2, 0, 0,
              0, 0, 2, 6, 0, 9, 5, 0, 0,
              8, 0, 0, 2, 0, 3, 0, 0, 9,
              0, 0, 5, 0, 1, 0, 3, 0, 0 ];
var current;
var newNum = 1;

function setup() {
  createCanvas(450, 450);
  var x = 0;
  var y = 0;
  for (var index = 0; index < 81; index++) {
    if (index % 9 == 0 && index != 0) { // draws grid
      y = y + 50; // y coord
      x = 0; // resets 'x' coord back to the left-most square
    }
    square[index] = new Square(x, y, index, board[index]);
    x = x + 50; // 50 * 9 = 450 (x coord)
  }
  current = square[0];
}

function draw() {
  background(255, 204, 0);

  for (var i = 0; i < 81; i++) {
    square[i].show(); //  shows each square in grid
  }

  if (current.number == 0) { // if empty square and is valid
    if (!checkColumn(current.index, newNum) && !checkRow(current.index, newNum) && !checkBox(current.index, newNum) && newNum < 10) {
      current.number = newNum; // set square value as new newNum
      stack.push(current); // push the square value to stack to pop if we need to backtrack
      newNum = 0; // 0 because we increment newNum at the bottom (here we set the new newNum back to 1)
      current = square[current.index+1]; // evaluate next square
    } else {
      if (newNum > 8) { // 8 because we increment newNum at the bottom
        current.number = 0; // set square value back to 0
        current = stack.pop(); // pop previous square value from stack to backtrack
        newNum = current.number; // newNum is set as the popped value
        current.number = 0; // if more than 9, set back to 0 and continue to test
      }
    }
  } else { // if square value != 0 *has a set number*
      current = square[current.index+1]; // move to next square
      newNum = 0; // set newNum to 0
  }
  newNum++;
}

function Square(x, y, index, number) {
  this.x = x;
  this.y = y;
  this.index = index;
  this.number = number;

  this.show = function() {
    noFill();
    stroke(255);
    rect(this.x, this.y, 50, 50);
    fill(255);
    textSize(32);
    text(this.number, x+17, y+40); // shifting how newNums are displayed on screen so that they fit into squares properly
  }
}
