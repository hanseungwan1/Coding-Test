function solution(n) {
  let answer = new Set();
  let num = n;
  while (num !== 1) {
    for (let i = 2; i <= n; i++) {
      if (num % i === 0) {
        answer.add(i);
        num /= i;
        i = 1;
      }
    }
  }
  return [...answer];
}