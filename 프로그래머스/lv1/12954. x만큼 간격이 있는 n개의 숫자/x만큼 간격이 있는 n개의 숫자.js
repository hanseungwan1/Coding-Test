function solution(x, n) {
  let arr = [];
  let b = 0;
  for (let i = 0; i < n; i++) {
    b += x;
    arr.push(b);
  }
  return arr;
}