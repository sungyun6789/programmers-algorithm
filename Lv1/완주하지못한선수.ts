export function solution(participant: string[], completion: string[]) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// https://programmers.co.kr/learn/courses/30/lessons/42576
