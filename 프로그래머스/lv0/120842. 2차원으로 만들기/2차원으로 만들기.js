function solution(num_list, n) {
  let answer = [];
  while (num_list.length !== 0) {
    let a = [];
    for (let i = 0; i < n; i++) {
      a.push(num_list.shift());
    }
    answer.push(a);
  }
  return answer;
}