function solution(before, after) {
  const a = [...before].sort().join();
  const b = [...after].sort().join();
  return a === b ? 1 : 0;
}