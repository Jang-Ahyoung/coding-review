// 내 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input = input.map(num => Number(num) % 42);

inputset = new Set(input) // 배열 자체를 중복 존재하지 않은 SET객체로 만들어 
console.log(inputset.size) // Set 객체를 다시 배열로 변환

// indexOf 활용한
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const userNum = [];

input.forEach(x => {
    const num = x % 42;
    if (userNum.indexOf(num) === -1) { // 존재하지 않는 값이면
        userNum.push(num); // push 해준다!
    }
});
console.log(userNum.length);