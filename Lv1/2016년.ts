export function solution(a: number, b: number) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const answer = new Date(`2016, ${a}, ${b}`).getDay();

  return week[answer];
}

// https://programmers.co.kr/learn/courses/30/lessons/12901
