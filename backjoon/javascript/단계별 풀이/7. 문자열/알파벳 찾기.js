// 알파벳 소문자로만 이루어진 단어에 대해 알파벳이 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성
// 아스키코드 알파벳을 해당 'a'는  97번이고, 'z'는 122번이기 때문에 97-122까지 반복 실행
// String.fromCharCode 메서드 사용해 알파벳 생성, indexOf -> 값이 있다면 그 값의 index를 없다면 -1을 출력한 값을 출력

const input = require("fs").readFileSync("/dev/stdin").toString(); // 문자열 s 받아오고
const result = []; // 결과 담을 배열 생성

for (let i = 97; i <= 122; i++) {
    result.push(
        input.indexOf(String.fromCharCode(i))
    )
}
console.log(result.join(" "))
