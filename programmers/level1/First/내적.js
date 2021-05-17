function solution(a, b) { // a[i]*b[i] 총합 => 누적값 + (현재값 * b)
    return a.reduce((s, v, i) => s + v * b[i], 0); // 이문제의 경우 초깃값 설정안해줄경우 인덱스 1부터 시작해서 답이 틀려진다.
}