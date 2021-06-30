function solution(A, B) {
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0);
    // for (var i = 0; i < A.length; i++) {
    //     answer = answer + A[i] * B[i];
    // }
    // return answer;
}

function solution(A, B) {
    let min = 0;
    recur(0, 0);

    function recur(count, sum) {
        // !min && min == sum;
        // min > sum && min == sum;
        if (count == A.length) {
            if (!min || min > sum) {
                min = sum;
            }
            return min;
        }

        for (let i = 0; i < A.length; i++) {
            recur(count + 1, sum + A[count] * B[i]);
        }
    }
}

