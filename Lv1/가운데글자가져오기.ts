export function solution(s: string) {
  const start = Math.ceil(s.length / 2) - 1;
  const end = s.length % 2 === 0 ? 2 : 1;

  return s.substr(start, end);
}

// https://programmers.co.kr/learn/courses/30/lessons/12903
