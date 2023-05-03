function solution(s) {
  let result = s.toLowerCase().split(" ");
  result = result.map((el) => {
    let newStr = el.charAt(0).toUpperCase() + el.slice(1);
    return newStr;
  });
  result = result.reduce((acc, cul) => {
    return acc + " " + cul;
  });
  return result;
}