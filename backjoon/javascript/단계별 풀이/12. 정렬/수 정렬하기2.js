// O(n log n)를 갖는 퀵 정렬


// sort() 사용 방안 1
let [len, ...numArr] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(v => Number(v));
numArr.sort((a, b) => a - b);
console.log(numArr.join("\n"));

// sort() 사용 방안 2
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = input.split("\n").map(Number);

arr.shift();
arr.sort((a, b) => a - b);
console.log(arr.join("\n"));


// 3)
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => parseInt(x));

const len = input.shift();
let arr = new Array(2000001).fill(0);
let result = '';

for (let i = 0; i < len; i++) { // input 받은 숫자들을 돌며 배열값 +1 한다.
    arr[input[i] + 1000000]++;
}

for (let i = 0; i < arr.length; i++) { // arr를 돌며 1이 된 값을 확인하며 
    if (arr[i] === 1) {
        result += `${i - 1000000}\n`; // 맞을 경우 result에 해당 값을 index 활용해 얻어내 줄바꿈과 함께 저장!
    }
}

console.log(result);