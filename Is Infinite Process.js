function solution(a, b) {
  if (a > b) return true;
  if (a % 2 == 0 && b % 2 == 0) return false;
  if (a % 2 == 1 && b % 2 == 1) return false;
  return true;
}
console.log(solution(2, 6));
