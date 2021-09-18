// N종류의 동전으로 합을 K로 만드는 프로그램

let coins = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, sum] = coins.shift().split(' ').map(num => parseInt(num));
let count = 0;

coins = coins.map((n) => Number(n)).sort((a, b) => b - a); // coins.reverse();하면 안돼!!
for (let i = 0; i < N; i++) {
    if (sum != 0 && sum >= coins[i]) {
        count += Math.floor(sum / coins[i]);
        sum %= coins[i];
    }
}

console.log(count);


// 비슷한 풀이 
let [first, ...coins] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let [N, K] = first.split(" ").map((n) => Number(n));

coins = coins.map((n) => Number(n)).sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < N; i++) {
    answer += Math.floor(K / coins[i]);
    K %= coins[i];
}

console.log(answer);