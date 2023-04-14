const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split(" ");
const data = input.map(Number);
const [A, B, C] = data;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);