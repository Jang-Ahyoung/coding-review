/*
    각 도시에 있는 주유소의 기름 가격과, 각 도시를 연결하는 도로의 길이를 입력으로 받아 제일 왼쪽 도시에서 제일 오른쪽 도시로 이동하는 최소의 비용을 계산하는 프로그램
    도시까지의 거리는 1이상 1,000,000,000 이하의 자연수, 터당 가격은 1 이상 1,000,000,000 이하의 자연수 이므로 
    일단 n의 최댓값이 105, 거리와 가격은 109로 매우 크므로, BigInt를 사용하였다.
    
    BigInt는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형으로
    정수 리터럴 끝에 n 붙이거나 BigInt를 호출 시 BigInt 타입의 값을 만들 수 있다.
    BigInt는 임의의 정밀도로 정수를 나타낼 수있는 JavaScript의 새로운 숫자 데이터형으로
    큰 정수 ID와 고정밀 타임 스탬프는 JavaScript에서 숫자로 표시할 수 없었기 때문에 실제 버그가 생겨 문자열로 변환해서 표현합니다.
    BigInt를 사용하면 오버플로없이 정수 연산을 올바르게 수행 할 수 있으며 데이터를 숫자 값으로 나타낼 수 있게 된다.
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = + input[0];
const distance = input[1].split(" ").map(v => BigInt(v));
const price = input[2].split(" ").map(v => BigInt(v));

let curPrice = price[0]; // 현 도시의 오일 가격 담는 변수
let cost = 0n; // 가격 데이터 변수 +n로 BigInt타입화

for (let i = 0; i < n - 1; i++) { // 주어진 길이만큼 반복문 돌면서
    cost += curPrice * distance[i];
    if (curPrice > price[i + 1]) curPrice = price[i + 1]; // 항상 가장 작은 값을 기름값으로 설정하면 모든 계산을 최저가격으로 맞출 수 있어
}

console.log(String(cost));