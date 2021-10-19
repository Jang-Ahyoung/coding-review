// 올바른 괄호 문자열(VPS) 판단해 결과 YES 와 NO로 리턴

// 1. replace 사용
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let len = input.shift();
let result = '';

for (let i = 0; i < len; i++) {
    let inputStr = input[i];
    while (inputStr.indexOf("()") >= 0) { // 조건 충족 시 수행
        inputStr = inputStr.replace("()", "");
    }

    console.log(inputStr === '' ? 'YES' : 'NO');
}