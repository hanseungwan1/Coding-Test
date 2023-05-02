function solution(spell, dic) {
  spell.forEach((el) => {
    dic = dic.filter((ell) => {
      return ell.includes(el);
    });
  });
  if (dic.length === 0) {
    return 2;
  } else return 1;
}