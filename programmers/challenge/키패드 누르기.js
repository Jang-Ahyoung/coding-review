// 각 번호를 누른 손가락을 연속된 문자열 형태로 return 하도록 solution 함수 작성

function solution(numbers, hand) {
    const pos = { // 키패드 좌표화한 객체 생성
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    let location = { left: '*', right: '#' };
    let result = '';

    for (let i = 0; i < numbers.length; i++) { // for (let num of numbers){
        let num = numbers[i];
        if (num == 1 || num == 4 || num == 7) { // 1,4,7 경우 => num % 3 === 1
            result += 'L';
            location.left = num;
        }
        else if (num == 3 || num == 6 || num == 9) { // 3,6,9인 경우 => num !==0 && num % 3 === 0
            result += 'R';
            location.right = num;
        }
        else { // 그 외 값이라면 함수 호출
            result += dis(num, location, pos, hand);
            // return된 결과가 L이라면 location.left를 현 위치로 갱신하고, R이라면 location.right를 현 위치로 갱신한다.
            result[result.length - 1] === 'L' ? location.left = num : location.right = num;
        }
    }

    function dis(num, location, pos, hand) {
        let end = pos[num]; // 목적지
        let leftStart = pos[location.left];
        let rightStart = pos[location.right];
        // 절대값 활용해 좌표간 거리 계산!
        const leftDistance = Math.abs(leftStart[0] - end[0]) + Math.abs(leftStart[1] - end[1]); // 왼손 현 위치에서 목표점까지의 x축과 y축의 거리
        const rightDistance = Math.abs(rightStart[0] - end[0]) + Math.abs(rightStart[1] - end[1]); // 오른손 현 위치에서 목표점까지의 x축과 y축의 거리
        if (leftDistance === rightDistance) return (hand === 'left') ? 'L' : 'R'; // 거리가 같다면 확인
        else return (leftDistance < rightDistance) ? 'L' : 'R';
    }
    return result;
}

// 테스트
let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
solution(numbers, hand);