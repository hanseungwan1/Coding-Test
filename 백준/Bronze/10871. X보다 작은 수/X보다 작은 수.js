const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const data = Number(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(Number);

console.log(
  ...arr.filter((el) => {
    if (el < data) {
      return true;
    }
    return false;
  })
);