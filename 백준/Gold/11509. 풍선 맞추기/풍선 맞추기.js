const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const n = Number(input[0]);
let data = input[1].split(" ").map(Number);
let arr = new Array(1000001).fill(0);

for (let i = 0; i < n; i++) {
  if (arr[data[i]] !== 0) arr[data[i]] -= 1;
  arr[data[i] - 1] += 1;
}
console.log(arr.reduce((a, b) => a + b));
