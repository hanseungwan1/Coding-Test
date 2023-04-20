function solution(a, b) {
  const sum = 2 * a * b;
  let string_sum = [a, b].map((el) => el.toString());
  string_sum = Number(string_sum[0] + string_sum[1]);
  if (sum > string_sum) return sum;
  else return string_sum;
}