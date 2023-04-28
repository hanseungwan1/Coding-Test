const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const data = input[1].split(" ").map(Number); // 중복 제거 전
const dataSet = [...new Set(data)]; // 중복제거
dataSet.sort((a, b) => a - b);
let a = {};
for (let i = 0; i < dataSet.length; i++) {
  a[dataSet[i]] = i;
}
const result = data.map((el) => {
  return a[el];
});
console.log(...result);
