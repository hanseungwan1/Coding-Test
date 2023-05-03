function solution(n) {
  arr = [0, 1];
  for (let i = 0; i < n; i++) {
    arr.push((arr[i] % 1234567) + (arr[i + 1] % 1234567));
  }
  return arr[n] % 1234567;
}