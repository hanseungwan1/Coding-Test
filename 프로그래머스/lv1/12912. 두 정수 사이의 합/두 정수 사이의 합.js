function solution(a, b) {
  let result = 0;
  let temp = 0;
  if (a > b) {
    temp = b;
    b = a;
    a = temp;
  }
  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
}