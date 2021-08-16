// 모든 경우의 수를 검사하는 브루트 포스 알고리즘
// 제한된 시간 안에 N장의 카드 중에서 3장의 카드 골라 합이 M을 넘지 않으면서 M과 최대한 가깝게 만드는 프로그램.

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [len, maxNum] = input[0].split(' ').map(num => +num);
const arr = input[1].split(' ').map(num => +num);
let answer = 0;

for (let i = 0; i < len; i++) { // 총 카드 갯수 만큼 돌며 ex) 1,2,3,4,5
    for (let j = i + 1; j < len; j++) { // 2,3,4,5
        for (let k = j + 1; k < len; k++) { // 3,4,5
            const sum = arr[i] + arr[j] + arr[k]; // 123,124,125
            if (maxNum - sum >= 0 && answer < sum) { // 최댓값과 차이가 가장 적은 값을 answer값으로 대입
                answer = sum;
            }
        }
    }
}

console.log(answer);