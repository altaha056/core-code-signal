function solution(score1, score2) {
  if (score2 > score1) [score1, score2] = [score2, score1];
  if ((score1 == 6 && score2 < 5) || (score1 == 7 && score2 < 7 && score2 >= 5))
    return true;
  return false;
}
console.log(solution(3, 5));
