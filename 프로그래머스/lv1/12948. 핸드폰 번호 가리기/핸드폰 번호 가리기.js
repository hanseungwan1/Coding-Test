function solution(phone_number) {
  let star = "";
  for (let i = 0; i < phone_number.length - 4; i++) star += "*";
  return star + phone_number.slice(-4);
}