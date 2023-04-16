const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (a + b === 0) return;
  console.log(a + b);
}