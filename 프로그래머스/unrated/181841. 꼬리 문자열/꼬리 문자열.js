function solution(str_list, ex) {
  str_list = str_list.filter((el) => {
    if (!el.includes(ex)) return true;
  });
  if (str_list.length === 0) return "";
  else return str_list.reduce((acc, cur) => acc + cur);
}