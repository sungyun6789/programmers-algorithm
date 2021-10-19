export function solution(x: number, n: number) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12954
