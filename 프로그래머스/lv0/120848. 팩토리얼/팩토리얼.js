function solution(n) {
  let result = 1;
  for (let i = 1; i <= 10; i++) {
    if (n === result * i) return i;
    else if (n < result) return i - 2;
    result *= i;
  }
}