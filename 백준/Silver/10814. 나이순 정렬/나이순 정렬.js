const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = Number(input[0]);
const data = [];
for (let i = 1; i <= n; i++) {
  data.push(input[i].split(" "));
}
data.sort((a, b) => {
  return a[0] - b[0];
});

for (x of data) {
  console.log(...x);
}
