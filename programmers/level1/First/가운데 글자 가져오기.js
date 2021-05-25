function solution(s) {
    let num = Math.ceil(s.length / 2 - 1);

    return s.length % 2 ? s[num] : s[num] + s[num + 1];
}