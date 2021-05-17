// 내풀이

function solution(absolutes, signs) {
    let a = signs.map(a => a == true ? 1 : -1)
    a = absolutes.map((num, i) => num * a[i])

    return a.reduce((acc, cur) => { return acc + cur }, 0);
}

// 풀이1.
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
    //return absolutes.reduce((acc, val, i) =>{return acc + (val * (signs[i] ? 1 : -1))},0);
}

