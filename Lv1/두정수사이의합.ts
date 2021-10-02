export function solution(a: number, b: number) {
  let result = 0;
  const start = a < b ? a : b;
  const end = a < b ? b : a;

  for (let i = start; i <= end; i++) {
    result = result + i;
  }

  return result;
}

// https://programmers.co.kr/learn/courses/30/lessons/12912
