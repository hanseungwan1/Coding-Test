function solution(rny_string) {
  return rny_string
    .split("")
    .map((el) => {
      if (el === "m") return "rn";
      else return el;
    })
    .join("");
}