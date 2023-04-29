const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
let s = Number(input[0]);
let count = 0;
let add = 0;
for (let i = 1; ; i++) {
  add += i;
  if (add > s) {
    console.log(count);
    return;
  }
  count++;
}
