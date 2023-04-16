const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
let arr = input[1].split(" ").map(Number);
const max = Math.max(...arr);
arr = arr.map((el) => {
  return (el / max) * 100;
});
const sum = arr.reduce((a, b) => {
  return a + b;
});
console.log(sum / arr.length);