// 0 입력되면 이전 입력 숫자 삭제하는 프로그램

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let len = input.shift();
let stack = [];

for (let i = 0; i < len; i++) {
    switch (input[i]) {
        case '0':
            stack.pop();
            break;
        default:
            stack.push(+ input[i]);
    }
    // switch 문 이용이 더 빨라!
    // if (input[i] == '0') stack.pop();
    // else stack.push(+ input[i])
}
let result = stack.reduce((acc, cur) => acc += cur, 0);

console.log(result);