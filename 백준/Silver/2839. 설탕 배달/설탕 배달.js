const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n").map(Number)[0];
let count = 0;
let flag = false;

while (input >= 0) {
  if (input === 0 || input % 5 == 0) {
    count += parseInt(input / 5);
    console.log(count);
    flag = true;
    break;
  }
  input -= 3;
  count++;
}

if (!flag) {
  console.log(-1);
}
