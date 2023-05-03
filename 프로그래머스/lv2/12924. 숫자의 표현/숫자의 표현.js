function solution(n) {
  let count = 0;
  for (let i = 1; i <= Math.floor(n); i++) {
    let add = 0;
    let add2 = i;
    while (1) {
      add += add2;
      if (add == n) {
        count++;
        break;
      } else if (add > n) {
        break;
      }
      add2++;
    }
  }
  return count;
}