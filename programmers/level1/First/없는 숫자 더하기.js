function solution(numbers) {
    let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numArr = numArr.filter((num) => !numbers.includes(num));

    // 반복문 활용하는 방법
    // for(let i = 0; i <= 9; i++) { if(!numbers.includes(i)) answer += i }

    return numArr.reduce((acc, cur) => acc += cur, 0);
}

return 45 - numbers.reduce((cur, acc) => cur + acc, 0); // 0-9의 총합이 45