const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let num = Number(input[0]);
for (let i = 0; i < num; i++) {
  const result = input[i + 1].trim();
  console.log(result[0] + result[result.length - 1]);
}