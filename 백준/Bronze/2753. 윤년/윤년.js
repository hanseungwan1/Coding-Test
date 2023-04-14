const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
let data = Number(input);

if ((data % 4 === 0 && data % 100 !== 0) || data % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
