function solution(arr, flag) {
  let result = [];
  flag.forEach((el, index) => {
    if (el) {
      for (let i = 0; i < arr[index] * 2; i++) {
        result.push(arr[index]);
      }
    } else {
      for (let i = 0; i < arr[index]; i++) {
        result.pop();
      }
    }
  });
  return result;
}