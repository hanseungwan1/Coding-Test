const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split(" ");
let data = input.map((el) => {
  return Number(el.split("").reverse().join(""));
});

if (data[0] > data[1]) console.log(data[0]);
else console.log(data[1]);