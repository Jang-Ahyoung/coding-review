// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수

function solution(nums) {
    let answer = 0;

    function IsPrime(num) {
        for (let i = 2; i < num / 2; i++) { // 자신을 나누기 2 한 값보다 작은 수에 대해 나머지 계산해서 소수 인지 판별
            if (num % i == 0) return false;
        }
        return true;
    }

    for (let x = 0; x < nums.length; x++) { // 반복문 3개 -> 3가지 숫자에 대해 더해준값
        for (let y = x + 1; y < nums.length; y++) {
            for (let z = y + 1; z < nums.length; z++) {
                if (IsPrime(nums[x] + nums[y] + nums[z])) answer++; // 소수가 맞다면 answer에 더해줘
            }
        }
    }

    return answer;
}