function solution(s1, s2) {
  let count = 0;
  s1.forEach((el) => {
    s2.forEach((ell) => {
      if (el === ell) {
        count++;
      }
    });
  });
  return count;
}