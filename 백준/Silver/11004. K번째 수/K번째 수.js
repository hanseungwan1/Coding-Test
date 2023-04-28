let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let data = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const k = Number(input[0].split(" ")[1]) - 1;
console.log(data[k]);
