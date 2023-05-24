function solution(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .filter((el) => {
      if (!isNaN(el)) return true;
    })
    .reduce((a, b) => a + b);
}