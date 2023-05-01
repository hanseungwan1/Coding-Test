function solution(n) {
  let result = -1;
  for (let i = 1; i <= n; i++) {
    if (i * i === n) {
      return (result = (i + 1) * (i + 1));
    }
  }
  return result;
}