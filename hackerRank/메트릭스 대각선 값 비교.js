// 주어진 매트릭스 값의 오른쪽 대각선과 왼쪽 대각선 차이의 절대값을 구하는 프로그램

function diagonalDifference(arr) {
    let len = arr.length - 1;
    let letfToRight = 0;
    let rightToLeft = 0;
    for (let i = 0; i <= len; i++) {
        letfToRight += arr[len - i][i];
        rightToLeft += arr[i][i];
    }
    return Math.abs(rightToLeft - letfToRight);
}


// 다른 풀이 -> 코드 길이도 짧고 훨씬 더 직관적이다.
function diagonalDifference(arr) {
    const first = arr.reduce((acc, cur, i) => acc + cur[i], 0); // 각 배열의 인덱스 번호를 더해 arr[0][0]+arr[1][1]+..
    const second = arr.reduce((acc, cur, i) => acc + cur[cur.length - 1 - i], 0);
    return Math.abs(first - second)
}

function diagonalDifference(arr) {
    let result = arr.reduce((acc, current, index) => {
        acc += (current[index] - current[arr.length - 1 - index]); // reduce로 한번 만 돌면서 바로 값의 차 구하는 방법
        return acc;
    }, 0)
    return Math.abs(result);
}