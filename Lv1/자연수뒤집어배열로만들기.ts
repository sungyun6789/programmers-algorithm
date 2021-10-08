export const solution = (n: number) =>
  n
    .toString()
    .split('')
    .map((str) => Number(str))
    .reverse();

// https://programmers.co.kr/learn/courses/30/lessons/12932
