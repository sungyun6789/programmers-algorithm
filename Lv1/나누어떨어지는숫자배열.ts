export function solution(arr: number[], divisor: number) {
  const filterArr = arr.filter((value) => value % divisor === 0);
  return filterArr.length === 0 ? [-1] : filterArr.sort((lhs, rhs) => (lhs > rhs ? 1 : -1));
}

// https://programmers.co.kr/learn/courses/30/lessons/12910
