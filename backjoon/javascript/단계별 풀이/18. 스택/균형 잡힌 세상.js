// 문자열 순회하며 여는 괄호 ( '[','(' ) 나오면 stack에 push, 닫는 괄호가 나오면 pop하여 나온 반환값이 짝이 맞는 여는 괄호가 아니면 no를 출력
// 이 과정 끝난 후 stack이 비어 있으면 yes를 출력, 비어 있지 않으면 no를 출력한다.


// 1.
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] == ".") break;
    const stack = [];
    let breakPoint = false;
    for (const char of input[i]) {
        if (char == "(" || char == "[") stack.push(char);
        if (char == ")" || char == "]") { // 스택 내부에 없는데 닫는 괄호 나온 경우 no 처리
            if (stack.length < 0) {
                breakPoint = true;
                break;
            }
            let topChar = stack[stack.length - 1]; // 스택 최상단 문자 조합 일치한다면
            if ((topChar == "(" && char == ")") || (topChar == "[" && char == "]")) stack.pop();
            else stack.push(char);
        }
    }
    result.push(breakPoint || stack.length ? "no" : "yes");
}
console.log(result.join("\n"));


// 2. 함수 이용 풀이
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let answer = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === '.') break; // 맨 마지막 알림
    answer.push(balance(input[i]));
}

function balance(str) { // 문장별 돌게되는 함수
    const stack = [];
    for (let i = 0; i < str.length; i++) { // 문장 각 문자를 돌아가며
        const temp = str[i];
        if (temp === '(' || temp === '[') { // 여는 괄호 일 경우 continue 부분 종료와 함께 stack에 담아준다.
            stack.push(temp);
            continue;
        }
        if (temp === ')' || temp === ']') { // 닫는 괄호 일경우 
            if (temp === ')' && stack[stack.length - 1] === '(') { // 스택 확인 후 양식 옳바르면 stack 최상단 저장 꺼내온다
                stack.pop();
            }
            else if (temp === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            }
            else return 'no';
        }
    }
    if (!stack.length) return 'yes'; // 최종 수행 후 length 0 이면 성공!
    return 'no'; // 아니면 에러
}

console.log(answer.join('\n'));

const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const open = ["(", "["];
const close = [")", "]"];
let stack;
const yesno = [];