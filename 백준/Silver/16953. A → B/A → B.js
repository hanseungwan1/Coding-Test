const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let [a, b] = input[0].split(" ").map(Number);

let count = 0;
let flag = false;
while (b >= a) {
  if (b === a) {
    flag = true;
    count++;
    break;
  }
  if (b % 10 === 1) {
    b = parseInt(b / 10);
    count++;
    continue;
  }
  if (b % 2) {
    break;
  }
  b = b / 2;
  count++;
}

if (!flag) {
  console.log(-1);
} else console.log(count);
