const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const n = Number(input[0]);
let arr = new Array(45);
arr[0] = 0;
arr[1] = 1;
for (let i = 2; i < arr.length; i++) {
  arr[i] = arr[i - 2] + arr[i - 1];
}
arr = arr.slice(2).sort((a, b) => b - a);

for (let j = 1; j <= n; j++) {
  let count = "";
  let data = Number(input[j]);
  for (let x of arr) {
    if (x <= data) {
      data -= x;
      count = count + " " + x.toString();
    }
    if (data === 0) {
      break;
    }
  }
  count = count.trim().split(" ").reverse().join(" ");
  console.log(count);
}
