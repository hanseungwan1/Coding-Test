function solution(my_string, letter) {
  return my_string
    .split("")
    .filter(el => {if (letter !== el) return true})
    .join("");
}