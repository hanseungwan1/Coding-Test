function solution(my_string, num1, num2) {
  const array = my_string.split("");
  const arrNum1 = array[num1];
  const arrNum2 = array[num2];
  array[num1] = arrNum2;
  array[num2] = arrNum1;
  return array.join("");
}