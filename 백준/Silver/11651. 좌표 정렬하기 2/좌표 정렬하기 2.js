const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i][0] + " " + arr[i][1] + "\n";
}
console.log(result);
