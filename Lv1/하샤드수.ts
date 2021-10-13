export const solution = (x: number) =>
  x %
    x
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, cur) => (acc += cur)) ===
  0
    ? true
    : false;

// https://programmers.co.kr/learn/courses/30/lessons/12947
