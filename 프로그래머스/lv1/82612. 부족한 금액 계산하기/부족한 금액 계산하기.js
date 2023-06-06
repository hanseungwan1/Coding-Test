function solution(price, money, count) {
  let total = 0;
  let nCost = 0;
  for (let i = 1; i <= count; i++) {
    nCost = price * i;
    total += nCost;
  }
  if (total > money) return total - money;
  else return 0;
}