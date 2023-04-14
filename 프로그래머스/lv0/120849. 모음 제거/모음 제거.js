function solution(my_string) {
  const answer = my_string.split("").filter((el) => {
    if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
      return false;
    }
    return true;
  });
  return answer.join("");
}