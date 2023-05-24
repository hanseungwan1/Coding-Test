function solution(n, numlist) {
  return numlist.filter((el) => {
    if (el % n === 0) return true;
  });
}