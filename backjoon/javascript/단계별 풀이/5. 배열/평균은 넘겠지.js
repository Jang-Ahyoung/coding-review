// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력하는 문제

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let len = input[0] * 1; // 첫줄 총 테스트 갯수

for (let i = 1; i <= len; i++) { // 제외 나머지 줄 공백 기준 나눠주고
    let score = input[i].split(' ');
    let stuNum = score.shift() * 1; // 배열 맨 첫번째 값 빼서 숫자형으로 변환 (*1)해 학생 수 저장
    let count = 0;
    let avg = score.reduce((acc, v) => acc += v * 1, 0) / stuNum; // 나머지 값 숫자로 변환해 계산 -> 평균구해

    for (let j = 0; j < stuNum; j++) {
        if (score[j] > avg) {
            count++;
        }
    }
    // 대체 반복문 함수 -> for문이 더 빨라
    // score.forEach((value) => { if (value > avg) count++ })

    let result = ((count / stuNum) * 100).toFixed(3); // 백분율 구해 소수점 3째숫자까지 반올림해 저장하는 함수 -> tofied()!
    console.log(result + "%");
}