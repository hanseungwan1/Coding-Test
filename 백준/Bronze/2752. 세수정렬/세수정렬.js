const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

console.log(...input);