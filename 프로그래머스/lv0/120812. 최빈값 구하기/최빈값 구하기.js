function solution(array) {
  let obj = {};

  array.forEach((el) => {
    if (!Object.keys(obj).includes(el.toString())) obj[el] = 1;
    else {
      const count = obj[el] + 1;
      obj[el] = count;
    }
  });

  let max = 0;
  let result = -1;

  for (const key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      result = key;
    } else if (obj[key] == max) result = -1;
  }
  return Number(result);
}