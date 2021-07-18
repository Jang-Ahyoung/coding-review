// 내 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let len = Number(input[0]);

for (let i = 1; i <= len; i++) { // 첫째줄 제외 반복문으로 돌면서
    let count = 0;
    let sum = 0;

    input[i].split("").forEach((value) => { // 문자열 속 문자들 하나씩 접근 -> o인 경우 계산
        if (value == 'O') count++;
        else count = 0;
        sum += count;
    })
    console.log(sum);
}

// for문 2번 사용한 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    let count = 0;
    let sum = 0;

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === "O") {
            count++;
        } else {
            count = 0;
        }

        sum += count;
    }

    console.log(sum);
}