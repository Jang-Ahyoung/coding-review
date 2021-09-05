// O(n^2)인 정렬 알고리즘 -> sort() 방식 사용
// parseInt 가 아닌 Number 메소드 사용 시 오류가 발생하게된다 
// Number의 경우 문자열에 문자 섞여있으면 NaN 반환, parseInt의 경우 시작만 숫자로 시작하는 문자열이면 숫자만 정확히 돌려준다. (하지만 Number와 달리 소수점이하 출력못함)

// 입력 방식 1 > shift() 사용 -> 시간적으로 조금 더 빠르지만 코드 리딩하기 복잡함
const numArr = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(num => parseInt(num));
const len = numArr.shift();

// 입력 방식 2 > 따로 받아와
const [len, ...numArr] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(num => parseInt(num));
numArr.sort((a, b) => a - b);
for (let i = 0; i < len; i++) {
    console.log(numArr[i]);
}