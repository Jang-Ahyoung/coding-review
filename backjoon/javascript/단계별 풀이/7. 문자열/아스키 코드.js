// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램
// 아스키코드란? _ 미국 표준 정보교환 코드, 컴퓨터 내부에서 문자 표현에 사용
// 문자열.charCodeAt() : 문자열 -> 아스키코드 번호로 변환해주는 함수,
// 아스키.fromCharCode() : 아스키코드번호를 받아 문자열을 구성해주는 함수이다.

// 내풀이
let input = require('fs').readFileSync('/dev/stdin').toString();
console.log(input.charCodeAt());

console.log(require('fs').readFileSync('/dev/stdin').toString().trim() // trim() 메서드는 문자열 양 끝의 공백을 제거
    .charCodeAt());