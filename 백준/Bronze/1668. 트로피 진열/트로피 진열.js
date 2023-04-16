const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n").map(Number);
const total = input[0];
let left_count = 0;
let max = 0;
for (let i = 1; i <= total; i++) {
  if (input[i] > max) {
    left_count++;
    max = input[i];
  }
}
max = 0;
let right_count = 0;
for (let i = total; i > 0; i--) {
  if (input[i] > max) {
    right_count++;
    max = input[i];
  }
}
console.log(left_count);
console.log(right_count);
