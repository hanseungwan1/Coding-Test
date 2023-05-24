function solution(str1, str2) {
  let str1Array = [...str1];
  let str1Compare = "";
  let result = 2;
  str1Array.forEach((el, j) => {
    for (let i = 0; i < str2.length; i++) {
      str1Compare += str1Array[i + j];
    }
    if (str1Compare === str2) result = 1;
    str1Compare = "";
  });
  return result;
}