// 입력으로 주어진 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나는지 출력
// 나의 풀이
let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let arr = [1, 2];
let num = 2;
let count = 1;

while (input >= num) {
    num += count * 6;
    arr.push(num);
    count++;
}

console.log(arr.indexOf(num));

// 다른 풀이
const input = require('fs').readFileSync('/dev/stdin');

let range = 1, block = 1;
while (block < input) {
    block += 6 * range;
    range++;
}

console.log(range);