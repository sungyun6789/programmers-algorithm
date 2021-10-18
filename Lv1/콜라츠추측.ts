export function solution(num: number) {
  let answer = 0;
  while (num !== 1) {
    if (answer > 500) {
      return -1;
    } else {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      answer++;
    }
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12943
