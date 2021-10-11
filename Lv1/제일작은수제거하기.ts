export function solution(arr: number[]) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}

// https://programmers.co.kr/learn/courses/30/lessons/12935
