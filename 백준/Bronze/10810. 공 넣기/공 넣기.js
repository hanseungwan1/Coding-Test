const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let arr = new Array(n).fill(0);

for (let i = 1; i <= m; i++) {
  const [start, end, index] = input[i].split(" ").map(Number);
  arr = arr.map((el, ind) => {
    if (ind + 1 >= start && ind + 1 <= end) {
      return index;
    }
    return el;
  });
}
console.log(...arr);