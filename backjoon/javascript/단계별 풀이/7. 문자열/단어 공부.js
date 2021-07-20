// 단어에서 가장 많이 사용된 알파벳 알아내는 프로그램을 작성 ->  toUpperCase() 와 toLowerCase()
// 내 코드 -> 런타임 에러
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let str = input.toUpperCase();
let arr = [...new Set(str.split(''))];
let answer = [];
arr.forEach((value) => {
    let a = str.split(value).length - 1;
    answer.push(a);
});

let max = Math.max(...answer);
let num = answer.join("").split(max).length - 1;
console.log(num == 1 ? str[answer.indexOf(max)] : "?");


// for 문을 여러 개 사용하면 시간 초과 날 수 있어 최대한 줄이는 방향
// charCodeAt -> 해당 인덱스에 대한 UTF-16 코드 반환, 이를 이용해 a-z까지의 배열을 만들어 0을 채우고
// 반환된 코드에서 a = 최솟값(97)빼 배열 인덱스를 잡아주고 해당 배열의 값을 1 증가시켜 입력값의 길이만큼을 반복

let input = require('fs').readFileSync('/dev/stdin').toString().toLowerCase();
const result = new Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
    result[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);
let isSame = false;

for (let j = 0; j < 26; j++) {
    if (result[j] === max && index != j) {
        isSame = true;
        break;
    }
}
console.log(isSame ? "?" : String.fromCharCode(index + 65));