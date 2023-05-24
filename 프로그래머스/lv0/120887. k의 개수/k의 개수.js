function solution(i, j, k) {
  let count = 0;
  for (let z = i; z <= j; z++) {
    let arr = z.toString().split("");
    arr.forEach((el) => {
      if (el == k) count++;
    });
  }
  return count;
}