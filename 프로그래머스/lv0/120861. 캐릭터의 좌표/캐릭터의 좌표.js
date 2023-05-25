function solution(keyinput, board) {
  let heigth = 0;
  let width = 0;
  let [boardWidth, boardHeigth] = board.map((el) => parseInt(el / 2));
  keyinput.forEach((el) => {
    if (el === "left") width -= 1;
    else if (el === "right") width += 1;
    else if (el === "up") heigth += 1;
    else heigth -= 1;
    if (boardWidth < Math.abs(width)) {
      if (width < 0) width = boardWidth * -1;
      else width = boardWidth;
    }
    if (boardHeigth < Math.abs(heigth)) {
      if (heigth < 0) heigth = boardHeigth * -1;
      else heigth = boardHeigth;
    }
  });

  return [width, heigth];
}