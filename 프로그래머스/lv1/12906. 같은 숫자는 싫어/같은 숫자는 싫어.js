function solution(s) {
  let answer = [];
  s.forEach((el) => {
    if (answer[answer.length - 1] !== el) answer.push(el);
  });
  return answer;
}