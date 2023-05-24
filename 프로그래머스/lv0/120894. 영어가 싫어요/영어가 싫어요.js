function solution(numbers) {
  let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
  let result = "";
    
  while (numbers.length !== 0) {
    num.forEach((el, i) => {
      if (numbers.slice(0, el.length) === el) {
        numbers = numbers.slice(el.length);
        result += i.toString();
      }
    });
  }
  return Number(result);
}