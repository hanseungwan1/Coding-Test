function solution(arr, n) {
  if (arr.length % 2) {
    arr = arr.map((el, i) => {
      if (i % 2 === 0) return el + n;
      return el;
    });
  } else {
    arr = arr.map((el, i) => {
      if (i % 2) return el + n;
      return el;
    });
  }
  return arr;
}