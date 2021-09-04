// 종말의 숫자란 어떤 수에 6이 적어도 3개이상 연속으로 들어가는 수
// N번째 영화의 제목은 세상의 종말 (*N번째로 작은 종말의 숫자 - 이 부분이 중요!)

const n = +require("fs").readFileSync("/dev/stdin").toString(); // 숫자를 입력받고
let num = 666; // 필수로 포함해야할 숫자
let count = 1; // count 넘버
while (count !== n) { // 입력받은 숫자만큼 카운트
    num++;
    if (String(num).includes("666")) count++;
}
console.log(num);