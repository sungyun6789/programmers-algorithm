export function solution(a: number, b: number) {
  for (let i = 0; i < b; i++) {
    let str = '';
    for (let j = 0; j < a; j++) {
      str += '*';
    }
    console.log(str);
  }
}
