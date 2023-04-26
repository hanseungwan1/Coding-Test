const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
let data = input[0].trim().split(" ");
if (data[0] === "") console.log(0);
else console.log(data.length);