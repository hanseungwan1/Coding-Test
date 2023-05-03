function solution(n) {
  let a = n.toString(2);
  let b = n + 1;
  let result = 0;
  while (1) {
    let bBin = b.toString(2);
    let bcount = 0;
    let acount = 0;
    for (let i = 0; i < bBin.length; i++) {
      if (bBin[i] === "1") bcount++;
      if (a[i] === "1") acount++;
    }
    if (acount === bcount) {
      result = b;
      break;
    }
    b++;
  }
  return result;
}