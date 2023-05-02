function solution(numbers, k) {
  k = (k - 1) * 2;
  return numbers[k % numbers.length];
}