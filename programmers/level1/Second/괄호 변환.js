// 괄호 문자열 -> 올바름과 균형잡힌 괄호 문자열로 나누어진다.
// 

function reverse(str) {
    return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
}

function solution(p) {
    if (p.length < 1) return ""; // p가 빈문자열일 경우 빈문자열 반환

    let balance = 0;
    let pivot = 0;
    do {
        balance += p[pivot++] === "(" ? 1 : -1; // pivot 값 하나씩 증가시키면서 문자가 '('이면 balance에 +1, ')'이면 -1을 해준다
    } while (balance !== 0); // balance가 다시 0이 될때까지 해당 과정을 반복한다.

    const u = p.slice(0, pivot); // 처음 균형잡힌 문자열이 분리되면 그값을 u에 넣고
    const v = solution(p.slice(pivot, p.length)); // 나머지 문자열을 v에 넣는다.

    if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
    else return "(" + v + ")" + reverse(u); // u가 올바른 문자열이 아닐경우
}