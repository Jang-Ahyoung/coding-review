// 내 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let len = input[0] * 1;
let score = input[1].split(" ").map((num) => Number(num));

let maxScore = Math.max(...score);
let newScore = score.map((num) => (num / maxScore) * 100);
let average = (newScore.reduce((acc, cur) => (acc += cur), 0)) / len;

console.log(average);

