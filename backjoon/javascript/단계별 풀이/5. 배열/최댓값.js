// 내 풀이 -> 반복문 이용하는 방법 : 더 빠른 속도
let num = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x));
let max = num[0];
num.forEach((x) => {
    if (x > max) {
        max = x;
    }
})

console.log(max)
console.log(num.indexOf(max) + 1)


// Math.max 함수 사용방법
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x));
let max = Math.max(...input)

console.log(max)
console.log(input.indexOf(max) + 1)