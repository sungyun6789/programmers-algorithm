export const solution = (s: string) =>
  s
    .split(' ')
    .map((value) => {
      let answer = '';
      for (let i = 0; i < value.length; i++) {
        if (i % 2 === 0) {
          answer += value[i].toUpperCase();
        } else {
          answer += value[i].toLowerCase();
        }
      }
      return answer;
    })
    .join(' ');

// https://programmers.co.kr/learn/courses/30/lessons/12930
