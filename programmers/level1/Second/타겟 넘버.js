// 모든 숫자에 + , - 부호를 붙여서 누적해 -> 누적 값이 타겟 넘버와 같으면 answer를 1씩 증가시켜준다,

function solution(numbers, target) {
    let answer = 0;
    recur(0, 0);
    return answer;

    // 재귀함수 형태의 DFS 구현
    function recur(count, sum) {
        if (count == numbers.length) { // numbers의 모든 수를 연산하고
            if (sum == target) answer += 1; // target과 같은 합이 나오면 answer증가
            return;
        }
        // + , - 연산 모두 수행
        recur(count + 1, sum + numbers[count]);
        recur(count + 1, sum - numbers[count]); // right child 는 -일 경우
    }
}