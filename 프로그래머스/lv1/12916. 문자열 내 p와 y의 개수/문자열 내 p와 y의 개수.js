function solution(s) {
  s = s.toLowerCase();
  let pcount = 0;
  let ycount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") pcount++;
    else if (s[i] === "y") ycount++;
  }
  if (pcount === ycount) return true;
  else return false;
}