function solution(lottos, win_nums) {
    const answer = [];
    const min = lottos.filter(n => win_nums.includes(n)).length;    // 정확히 맞춘 갯수 = 최솟값
    const max = lottos.filter(n => n === 0).length + min;           // 정확히 맞춘 갯수 + 0인 갯수 = 최댓값

    max > 1 ? answer.push(7 - max) : answer.push(6);
    min > 1 ? answer.push(7 - min) : answer.push(6);

    return answer; // 최고, 최저 순위가 담긴 배열 출력
}



function solution(lottos, win_nums) {
    const min = lottos.filter(n => win_nums.includes(n)).length;
    const max = lottos.filter(n => n === 0).length + min;
    let arr = [max, min].map((num) => num > 1 ? 7 - num : 6); // arr = arr.map((num) => num > 1 ? 7 - num : 6);

    return arr;
}