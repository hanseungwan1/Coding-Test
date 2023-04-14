const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();
input = Number(input);
let result = "";
for (let i = 0; i < input; i++) {
  result += " ";
}
for (let i = 0; i < input; i++) {
  result += "*";
  result = result.substring(1);
  console.log(result);
}