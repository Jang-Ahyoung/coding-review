const input = require("fs").readFileSync(`/dev/stdin`, `utf8`).trim().split(`\n`);

let len = + input.shift();
let stair = input.map((num) => +num);
let max = [];

function maxNum(a, b) {
    return (a > b ? a : b);
}


// 3가지 경우 ( 한/두계단 씩, 연속 3개 밟으면 안되고, 마지막 계단은 꼭 밟아야해 )
max[0] = stair[0]; // 첫계단
max[1] = maxNum(stair[0] + stair[1], stair[1]); // 1+2계단 vs 바로 2번째 계단
max[2] = maxNum(stair[0] + stair[2], stair[1] + stair[2]); // 1+3계단 vs 2+3계단

for (let i = 3; i < len; i++) {
    max[i] = maxNum(stair[i] + stair[i - 1] + max[i - 3], stair[i] + max[i - 2]); // 마지막 계단 경우의 수를 계산
}

console.log(max[len - 1]);