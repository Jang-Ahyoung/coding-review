// 소수 : 1과 자기 자신만으로 나누어 떨어지는, 1보다 큰 양의 정수
// 2 ~ '자기자신-1' 까지 돌면서 나누어지는 값이 있다면 count를 올릴 것
let inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let len = +inputs[0];
let numArr = inputs[1].split(' ').map((num) => + num);
let answer = 0;

for (let i = 0; i < len; i++) { // 배열 값 돌면서
    if (numArr[i] === 1) continue; // 1은 소수이니 넘어가고
    else {
        let count = 0;
        for (let j = 2; j < numArr[i]; j++) { // 2~자기자신 전까지 돌면서 
            if (numArr[i] % j === 0) {  // 나누어 떨어지는 값이 있다면 소수 x
                count++;
                break;
            }
        }
        if (count === 0) answer++; // 나누어지는 값이 없을경우 answer 값이 1 증가시킨다.
    }
}
console.log(answer);