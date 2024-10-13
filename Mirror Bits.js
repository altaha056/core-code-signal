function solution(a) {
  return parseInt(a.toString(2).split("").reverse().join(""), 2);
}
console.log(solution(97));
