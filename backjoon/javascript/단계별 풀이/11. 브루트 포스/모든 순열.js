const n = +require("fs").readFileSync("/dev/stdin").toString().trim();
const n = 3;
let answer = [];

function solution(nums, permutation) {// 숫자와 순열 전달
    // nums가 비어 있게 되면 모든 숫자를 한 번씩 활용하여 permutation을 만든 것이므로, 이 때의 수열을 answer에 저장한다.
    if (nums === "") answer.push(permutation.split("").join(" "));
    else {
        // 반복문으로 nums를 순회하면서 하나씩 순열을 채우고
        for (let i = 0; i < nums.length; i++) {
            // nums에서는 해당 숫자를 제거하고 난 후 재귀호출하여 이 과정을 반복
            solution(nums.slice(0, i) + nums.slice(i + 1), permutation + nums[i]);
        }
    }
}

let nums = "";
for (let i = 1; i <= n; i++) nums += i; // n=3, nums = 123
solution(nums, "");  // 1 ~ n이 나열된 문자열과 빈문자열을 전달
console.log(answer.join("\n"));