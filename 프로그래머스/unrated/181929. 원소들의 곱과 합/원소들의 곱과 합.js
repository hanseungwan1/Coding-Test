function solution(num_list) {
  const a = num_list.reduce((acc, cul) => acc * cul);
  const b = num_list.reduce((acc, cul) => acc + cul);
  return a < b * b ? 1 : 0;
}