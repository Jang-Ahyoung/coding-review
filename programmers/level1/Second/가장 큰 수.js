function solution(numbers) {

    let answer = numbers.map(c => c + '').   // 각 숫자들을 문자로 변환
        sort((a, b) => (b + a) - (a + b)).join(''); //문자로 변환된 숫자를 연결하여 비교정렬 후 문자열로 합쳐줘
    // let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');

    return answer[0] === '0' ? '0' : answer;
}


// [sort 함수 정리]
//     .sort() // 원본 배열 정렬 -> 파라 미터 생략시 유니코드 오름차순 정렬! & 원본 배열 리턴 -> 수정 적용 시 함께 수정되 = 원본을 변경하는 함수이므로 주의하자

// // 숫자의 경우 [1, 10, 2, 3] 순으로 정렬 되기 때문에 유니코드 아닌 숫자 순서 정렬을 위해서는 파라미터를 활용해야해
// // -> 반환 값이 0보다 클 경우 매개변수 a가 먼저
// // -> 반환 값이 0일 경우 a,b 그대로
// // -> 반환 값이 0보다 작을 경우 b가 먼저 들어와 [b,a]가 되게 된다

// arr.sort(function (a, b) {
//     return a - b; // 두 숫자의 차가 양수값이냐, 음수값이냐를 이용하여 숫자를 오름차순으로 정렬
//     return b - a; // 숫자 내림차순 정렬
// });

// // 객체 정렬하기
// arr.sort(function (a, b) {
//     return a.price - b.price;
// });