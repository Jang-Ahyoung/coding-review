// 나의 풀이
function solution(n) {
    let answer = n.toString(2).split('').filter((num) => num == "1").length;
    // let min = parseInt(1111, 2); // 2진수 -> 10진수
    while (1) {
        n += 1;
        if (n.toString(2).split('').filter((num) => num == "1").length == answer) {
            return n;
        }
    }
}

// 정규식 활용한 방법
function solution(n, a = n + 1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n, a + 1);
}
