function solution(my_string) {
  return my_string
    .split("")
    .map(el => {
      if (el.toUpperCase() === el) return el.toLowerCase();
      else return el.toUpperCase();
    })
    .join("");
}