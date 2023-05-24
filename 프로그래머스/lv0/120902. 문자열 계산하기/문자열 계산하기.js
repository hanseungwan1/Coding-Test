function solution(my_string) {
  const arr = my_string.split(" ").map((el) => {
    const trans = Number(el);
    if (!isNaN(trans)) return trans;
    else return el;
  });
  let result = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === "+") result += arr[i + 1];
    else if (arr[i] === "-") result -= arr[i + 1];
  }
  return result;
}