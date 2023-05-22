function solution(myString) {
  let a = myString.split("x");
  a = a.filter((el) => {
    if (el === "") return false;
    else return true;
  });
  return a.sort();
}