function solution(arr, divisor) {
  const result = arr
    .filter((el) => {
      if (el % divisor === 0) return true;
      else false;
    })
    .sort((a, b) => a - b);

  if (result.length === 0) return [-1];
  else return result;
}