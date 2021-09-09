let inputArr = require('fs').readFileSync('/dev/stdin').toString().split('\n');
inputArr.shift();

let input = new Array(...new Set(inputArr)); // 반복되는 단어 제거

let arr = input.filter((str) => isNaN(str));
arr.sort(); // 사전순 정렬
arr.sort((a, b) => a.length - b.length); // 기타 수 관련 정렬

console.log(arr.join('\n'));


// 사전순 + 기타 수 정렬
arr.sort(function (a, b) {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});