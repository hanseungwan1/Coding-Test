const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split(" ");
const data = input[0] / input[1];
console.log(data);