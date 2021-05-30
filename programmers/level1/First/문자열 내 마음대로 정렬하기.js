function solution(strings, n) {
    return strings.sort((s1, s2) =>
        s1[n] === s2[n]
            ? s1.localeCompare(s2)
            : s1[n].localeCompare(s2[n]
            ));
}



function solution(strings, n) {
    let answer = strings.sort((a, b) => {
        if (a[n] > b[n]) return 1; // 오름차순 정렬
        if (a[n] < b[n]) return -1;
        if (a[n] === b[n]) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        }
    });

    return answer;
}


// sort() 함수는 명칭 그대로 배열 안의 원소를 정렬하며, ASCII 문자 순서로 정렬되며 생략시 오름차순으로 정렬된다!
// sortFunction 인수에 함수를 지정하면 아래의 값 중 하나가 반환된다.
// 첫 번째 인수가 두 번째 인수보다 작을 경우 '-' 
// 두 인수가 같을 경우 '0'
// 첫 번째 인수가 두 번째 인수보다 클 경우 '+'

// ------------ 0. 객체 정렬 ----------------
var student = [
    { name: "재석", age: 21 },
    { name: "광희", age: 25 },
    { name: "형돈", age: 13 },
    { name: "명수", age: 44 }
]

/* 이름순으로 정렬 */
student.sort(function (a, b) { // 오름차순
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    // 광희, 명수, 재석, 형돈
});

student.sort(function (a, b) { // 내림차순
    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
    // 형돈, 재석, 명수, 광희
});

/* 나이순으로 정렬 */
var sortingField = "age";

student.sort(function (a, b) { // 오름차순
    return a[sortingField] - b[sortingField];
    // 13, 21, 25, 44
});

student.sort(function (a, b) { // 내림차순
    return b[sortingField] - a[sortingField];
    // 44, 25, 21, 13
});


//  ------------ 1. 문자 정렬  ------------ 

var fruit = ['orange', 'apple', 'banana'];

/* 일반적인 방법 */
fruit.sort(); // apple, banana, orange


//  ------------ 2. 숫자 정렬  ------------ 
var score = [4, 11, 2, 10, 3, 1];

/* 오류 */
score.sort(); // 1, 10, 11, 2, 3, 4  ->  ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음

/* 정상 동작 */
score.sort(function (a, b) { // 오름차순
    return a - b;
    // 1, 2, 3, 4, 10, 11
});

score.sort(function (a, b) { // 내림차순
    return b - a;
    // 11, 10, 4, 3, 2, 1
});