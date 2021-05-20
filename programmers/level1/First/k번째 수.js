// 내풀이 - 테캐 1개 통과 x
function solution(array, commands) {
    let answer = [];
    for (let i of commands) {
        i[0] == i[1] ? answer.push(array[i[2] - 1])
            : answer.push(array.slice(i[0] - 1, i[1]).sort()[i[2] - 1])
    }
    return answer;
}


function solution(array, commands) {
    let answer = [];
    answer = commands.map(a => array.slice(a[0] - 1, a[1]).sort((b, c) => b - c)[a[2] - 1])  // 대괄호에서 return 없으면 오류나

    return answer;
}