const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
let data = Number(input);
console.log(data - 543);
