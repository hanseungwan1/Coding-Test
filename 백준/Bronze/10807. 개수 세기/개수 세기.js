const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
const x = Number(input[2]);
let arr = input[1].split(" ").map(Number);
let count = 0;
arr.forEach((el) => {
  if (el === x) count++;
});
console.log(count);