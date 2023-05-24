function solution(s) {
  let arr = [...s].sort();
  let obj = {};
  let answer = "";

  arr.forEach((el) => {
    let objArr = Object.keys(obj);
    if (objArr.includes(el)) obj[el] += 1;
    else obj[el] = 1;
  });

  for (const keys in obj) {
    if (obj[keys] === 1) answer += keys;
  }
  return answer;
}