function solution(score) {
  let avr = score.map((el) => {
    return (el[0] + el[1]) / 2;
  });

  return avr.map((el) => {
    let mincount = 1;
    for (let i = 0; i < avr.length; i++) {
      if (avr[i] > el) mincount++;
    }
    return mincount;
  });
}