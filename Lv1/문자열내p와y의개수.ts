export const solution = (s: string) => {
  let p = 0;
  let y = 0;
  s.toLowerCase()
    .split('')
    .map((lhs) => {
      lhs === 'p' && p++;
      lhs === 'y' && y++;
    });
  return p === y ? true : false;
};

// https://programmers.co.kr/learn/courses/30/lessons/12916
