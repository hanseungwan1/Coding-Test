function solution(my_str, n) {
  my_str = my_str.split("");
  let answer = [];
  while (my_str.length !== 0) {
    let a = "";
    for (let i = 0; i < n; i++) {
      if (my_str.length === 0) break;
      a += my_str.shift();
    }
    answer.push(a);
  }
  return answer;
}