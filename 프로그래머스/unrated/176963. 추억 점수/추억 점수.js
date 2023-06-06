function solution(name, yearning, photo) {
  let obj = {};
  let answer = [];
  name.forEach((el, i) => (obj[el] = yearning[i]));

  photo.forEach((el) => {
    let sum = el.reduce((acc, cur) => {
      if (Object.keys(obj).includes(cur)) acc += obj[cur];
      return acc;
    }, 0);
    answer.push(sum);
  });
  return answer;
}