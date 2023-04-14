const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let data = input[0].split(" ").map(Number);
let add = 1;
const arr = new Array(data[0]).fill(1).map(() => add++);

for (let i = 1; i <= data[1]; i++) {
  const a = input[i].split(" ").map(Number);
  let temp = arr[a[0] - 1];
  arr[a[0] - 1] = arr[a[1] - 1];
  arr[a[1] - 1] = temp;
}
console.log(arr.join(" "));