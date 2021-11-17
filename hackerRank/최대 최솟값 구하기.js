// 5개 숫자 든 배열 입력받아 4가지 수를 활용해 최소& 최대값을 각각 출력하는 프로그램 작성

function miniMaxSum(arr) {
    arr = arr.sort((a, b) => a - b);

    // reduce 활용 풀이
    let min = arr.reduce((acc, cur, index) => {
        if (index < 4) return acc += cur
        else return acc;
    }, 0);

    let max = arr.reduce((acc, cur, index) => {
        if (index > 0) return acc += cur
        else return acc;
    }, 0);


    // 반복 이용한 풀이
    let min = 0;
    let max = 0;
    for (let i = 0; i < 5; i++) {
        if (i == 0) min += arr[i];
        else if (i == 4) max += arr[i];
        else {
            min += arr[i];
            max += arr[i];
        }
    }

    // forEach
    arr.forEach((num, index) => {
        if (index == 0) min += num;
        else if (index == 4) max += num;
        else {
            min += num;
            max += num;
        }
    })

    console.log(min, max);

}