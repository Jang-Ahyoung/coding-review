// 내풀이

function solution(absolutes, signs) {
    let a = signs.map(a => a == true ? 1 : -1)
    a = absolutes.map((num, i) => num * a[i])

    return a.reduce((acc, cur) => { return acc + cur }, 0);
}

// 풀이1.
function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, index) => acc += (cur * (signs[index] ? 1 : -1)), 0);
}

function solution(absolutes, signs) {
    absolutes = absolutes.map((num, index) => signs[index] ? num : - num);
    const result = absolutes.reduce((acc, cur) => acc += cur, 0);
    return result;
}
