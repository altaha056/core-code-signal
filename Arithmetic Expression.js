function solution(a, b, c) {
  if (a + b == c) return true;
  if (a - b == c) return true;
  if (a * b == c) return true;
  if (a / b == c) return true;
  return false;
}
let a = 2;
let b = 3;
let c = 5;
console.log(solution(a, b, c));
