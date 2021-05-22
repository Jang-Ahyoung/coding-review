// 1까지 도착 : 8, 1미통과 : 1 -> 실패률 : 1/8
function solution(N, stages) {
    return Array.from({ length: N }).map((v, i) => {
        let a = stages.length; // a 값에 stages 현재 길이 계산
        stages = stages.filter(v => v > i + 1); // stages에 통과한 길이 계산해 대입
        return { i: i + 1, r: (a - stages.length) / a };
    }).sort((a, b) => a.r == b.r ? a.i - b.i : b.r - a.r).map(v => v.i);
}