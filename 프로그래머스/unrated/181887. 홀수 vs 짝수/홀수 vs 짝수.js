function solution(num_list) {
  let a = num_list.filter((el, i) => {
    if (i % 2 === 1) return true;
    else false;
  });
  let b = num_list.filter((el, i) => {
    if (i % 2 === 0) return true;
    else false;
  });
  a = a.reduce((a, b) => a + b);
  b = b.reduce((a, b) => a + b);
  if (a > b) return a;
  else return b;
}