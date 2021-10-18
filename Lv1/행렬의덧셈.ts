export const solution = (arr1: number[][], arr2: number[][]) =>
  arr1.map((_, i) => arr2[i].map((_, j) => arr1[i][j] + arr2[i][j]));

// https://programmers.co.kr/learn/courses/30/lessons/12950
