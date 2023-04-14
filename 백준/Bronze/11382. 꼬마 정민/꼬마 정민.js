const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split(" ");
const data = input.map(Number);
console.log(data[0] + data[1] + data[2]);