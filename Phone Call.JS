function solution(min1, min2_10, min11, s) {
  let ans = 0;
  if (s - min1 >= 0) {
    s -= min1;
    ans += 1;
  } else return ans;

  let min2 = 9;
  while (s - min2_10 >= 0 && min2 > 0) {
    s -= min2_10;
    min2--;
    ans++;
  }

  if (s - min11 < 0 || min2>0) return ans;

  while (s - min11 >= 0) {
    s -= min11;
    ans++;
  }
  return ans;
}
let min1 = 1;
let min2_10 = 2;
let min11 = 1;
let s = 6;
console.log(solution(min1, min2_10, min11, s));
