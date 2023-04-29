const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = Number(input[0]);
const data = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let a = 0;
let b = 0;
for (let i = 0; i < n; i++) {
  a = a + data[i];
  b += a;
}
console.log(b);
