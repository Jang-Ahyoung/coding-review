function solution(s) {
    const len = s.length
    if (len == 4 || len == 6) {
        return s.split("").every((c) => !isNaN(c)) // 한 문자씩 돌지 않을 경우 소수점 "0.01" 이나 "1e22" 같은 지수 표현에서 문자로 인식할 수 있다!
    }
    return false;
}

// 지수 표현