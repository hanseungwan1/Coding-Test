function solution(box, n) {
  return box.map((el) => parseInt(el / n)).reduce((a, b) => a * b);
}