// N개의 공백 없이 숫자를 모두 합한 결과 출력하는 프로그램

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let num = input[1].split("").map(num => Number(num));
let sum = num.reduce((acc, cur) => acc += cur, 0)
console.log(sum)