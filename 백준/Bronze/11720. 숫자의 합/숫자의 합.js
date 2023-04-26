const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const result = input[1]
  .split("")
  .map(Number)
  .reduce((prev, cur) => {
    return prev + cur;
  });
console.log(result);
