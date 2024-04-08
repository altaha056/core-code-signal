function solution(n, firstNumber) {
  return (firstNumber + n / 2) % n;
}
let n = 12;
let firstNumber = 10;
console.log(solution(n, firstNumber));

// (firstnumber + n / 2) % n
// (10 + 12 / 2) % 10
// 16 % 10
//
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//              a                 f

// [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3];
//  a                 f
