function solution(my_string) {
  const answer = my_string
    .split("")
    .map(Number)
    .join("")
    .split(NaN)
    .filter((el) => !el == " ")
    .map(Number);

  if (answer.length === 0) return 0;
  else return answer.reduce((a, b) => a + b);
}