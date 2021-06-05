// 모든 숫자에 + , - 부호를 붙여서 누적해 -> 누적 값이 타겟 넘버와 같으면 answer를 1씩 증가시켜준다,

function solution(numbers, target) {
    let answer = 0;
    recur(0, 0);
    return answer;

    function recur(count, sum) {
        if (count == numbers.length) { // 리프 노드 도착 시 모드 ㄴnumbers 탐색
            if (sum == target) answer += 1; // 주어진 조건에 만족하면 answer++
            return;
        }
        recur(count + 1, sum + numbers[count]); // 주어진 조건에 만족하면 answer++
        recur(count + 1, sum - numbers[count]); // right child 는 -일 경우
    }
}