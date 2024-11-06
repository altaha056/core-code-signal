function solution(experience, threshold, reward) {
  return experience + reward >= threshold ? true : false;
}
let experience = 10;
let threshold = 15;
let reward = 5;
console.log(solution(experience, threshold, reward));
