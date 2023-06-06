function solution(s) {
  let center = s[parseInt(s.length / 2)];
  if (s.length % 2 === 1) return center;
  else return s[parseInt(s.length / 2 - 1)] + center;
}