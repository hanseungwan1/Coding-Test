function solution(myString, pat) {
  let patLength = pat.length;
  let count = 0;
  for (let i = 0; i < myString.length; i++) {
    let a = myString.slice(i, patLength);
    if (a === pat) count++;
    if (a.length !== pat.length) break;
    patLength++;
  }
  return count;
}