const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const total = Number(input[0]);
const n = Number(input[1]);
const item = input.slice(2);

let result = 0;
for (let i = 0; i < n; i++) {
  const [cost, num] = item[i].split(" ").map(Number);
  result += cost * num;
}
if (total === result) console.log("Yes");
else console.log("No");