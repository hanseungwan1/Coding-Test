function solution(numbers) {
  let a = [];
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) a.push(i);
  }
  return a.reduce((a, b) => a + b);
}