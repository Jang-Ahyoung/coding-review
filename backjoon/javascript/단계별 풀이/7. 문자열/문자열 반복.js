// 문자열 속 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력

// 내 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let len = Number(input.shift());
for (let i = 0; i < len; i++) {
    let answer = '';
    let [repeat, str] = input[i].split(' '); // 변수 나눠서 넣는다
    str.split("").forEach((value) => answer += value.repeat(repeat));
    console.log(answer);
}
