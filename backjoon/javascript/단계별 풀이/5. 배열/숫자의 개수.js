// 나의 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let mul = input.map(x => Number(x));
mul = input.reduce((acc, cur) => {
  return acc *= cur
}, 1
).toString().split('');

let i = 0;
let arr = [];
while (i != 10) {
  let count = 0
  mul.forEach(x => {
    if (x == i) count++;
  })
  arr.push(count)
  i++;
}

console.log(arr.join('\n'))


// split 메서드 방식
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  console.log(num.split(i + '').length - 1);
}


// 반복문 사용 코드
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  let count = 0;
  for (let j = 0; j < num.length; j++) {
    if (Number(num[j]) === i) {
      count++;
    }
  }
  console.log(count);
}