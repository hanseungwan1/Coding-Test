function solution(s) {
  let result = [];

  let answer = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") result.push(s[i]);
    else {
      if (result.length > 0) {
        result.pop();
      } else {
        answer = false;
        break;
      }
    }
  }
  if (result.length) answer = false;
  return answer;
}