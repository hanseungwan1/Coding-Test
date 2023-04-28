const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const data = input[0].split("").map(Number);
data.sort((a, b) => b - a);
console.log(data.join(""));
