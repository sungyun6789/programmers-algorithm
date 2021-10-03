export function solution(phone_number: string) {
  const length = phone_number.length - 4;
  return '*'.repeat(length) + phone_number.substr(length);
}

// https://programmers.co.kr/learn/courses/30/lessons/12948
