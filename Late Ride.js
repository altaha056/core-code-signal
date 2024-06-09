function solution(n) {
  let hour = Math.floor(n / 60).toString();
  let minute = (n % 60).toString();
  hour.split();
  minute.split();
  let ans = 0;
  for (let i = 0; i < hour.length; i++) {
    ans += parseInt(hour[i]);
  }
  for (let i = 0; i < minute.length; i++) {
    ans += parseInt(minute[i]);
  }
  return ans;
}
console.log(solution(808));
