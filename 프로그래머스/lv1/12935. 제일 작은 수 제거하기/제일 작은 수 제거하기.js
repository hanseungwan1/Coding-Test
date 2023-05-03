function solution(arr) {
  let minIndex = arr.indexOf(Math.min(...arr));
  arr = arr.filter((el, i) => (i === minIndex ? false : true));
  return arr.length === 0 ? [-1] : arr;
}