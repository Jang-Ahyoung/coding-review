// find 메서드는 해당 조건에 만족하는 첫 번째 요소의 값을 반환
// findIndex 메서드는 해당 조건에 만족하는 첫 번째 요소의 인덱스를 반환 함수 => completion.findIndex((name) => name == "stanko")
// indexOf => completion.indexOf("stanko")

// 1차 풀이 -> 효율성 테스트 실패
function solution(participant, completion) {
    completion.forEach((name) => {
        let index = participant.indexOf(name);
        participant[index] = '';
    })

    return participant.join('');
}

// sort 정렬을 선 수행한 풀이
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) return participant[i];
    }
}