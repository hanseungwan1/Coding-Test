function solution(sides) {
  let max = Math.max(...sides);
  let min = Math.min(...sides);
  let count = 0;
  let long = max + 1;

  for (let i = max - min + 1; i <= max; i++) count++;

  while (long < max + min) {
    count++;
    long++;
  }
  return count;
}