function solution(a, b, c) {
  if (a == c) return b;
  if (b == c) return a;
  return c
}
let a = 2;
let b = 7;
let c = 2;
console.log(solution(a, b, c));
