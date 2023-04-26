const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const iter = Number(input[0]);
for (let i = 1; i <= iter; i++) {
  let data = input[i].split(" ");
  let iter_2 = Number(data[0]);
  let data_2 = data[1];
  let result = "";
  for (let j = 0; j < data_2.length; j++) {
    for (let x = 0; x < iter_2; x++) {
      result += data_2[j];
    }
  }
  console.log(result);
}