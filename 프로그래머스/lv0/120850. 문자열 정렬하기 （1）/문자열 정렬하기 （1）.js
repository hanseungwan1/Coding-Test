function solution(my_string) {
  return my_string
    .split("")
    .map(Number)
    .filter(el => !isNaN(el))
    .sort((a, b) => a - b);
}