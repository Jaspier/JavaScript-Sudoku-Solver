function checkBox(i, number) {
  var x = (i % 9);
  var y = floor(i / 9);

  i = i - (x % 3);
  i = i - (y % 3)*9;

  for (var j = i; j < i + 3; j++) {
    if (square[j].number == number) {
      return 1;
    }
  }
  for (var j = i+9; j < i + 12; j++) {
    if (square[j].number == number) {
      return 1;
    }
  }
  for (var j = i + 18; j < i+21; j++) {
    if (square[j].number == number) {
      return 1;
    }
  }
  return 0;
}

function checkRow(i, number) {
  i = floor(i/9)*9;

  for (var j = i; j < i+9; j++) {
    if (square[j].number == number) {
      return 1;
    }
  }
  return 0;
}

function checkColumn(i, number) {
  i = (i % 9);
  var temp = i;

  for (var j = i; j < i+9; j++) {
    if (square[temp].number == number) {
      return 1;
    }
    temp = temp + 9;
  }
  return 0;
}
