function solution(s) {
  let arr = s.split(" ");
  let before;
  let result = 0;

  arr.forEach((el) => {
    if (el === "Z") result -= Number(before);
     else  {
      result += Number(el);
      before = el;
    }
  });
  return result;
}