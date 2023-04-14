const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let string = input[0];
let n = Number(input[1]);
console.log(string[n - 1]);