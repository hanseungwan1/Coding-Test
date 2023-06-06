function solution(a, b) {
  return a.map((el, i) => a[i] * b[i]).reduce((a, b) => a + b);
}