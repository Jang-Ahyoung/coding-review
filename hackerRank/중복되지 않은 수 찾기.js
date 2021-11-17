function lonelyinteger(a) {
    // find 함수 사용을 통해 조건을 가장 만족하는 첫번째 요소 반환,
    // indexOf()로 찾게되는 첫번째 값과 마지막index의 값을 비교해 유일 항목 찾을 수 있다
    return a.find(num => a.indexOf(num) === a.lastIndexOf(num));

    // 수학을 이용한 풀이
    // 중복되지 않는 값을 제외하고 전부 중복되는 값이기 때문에
    let setArr = [...new Set(a)].reduce((acc, cur) => acc += cur, 0);
    let sum = a.reduce((acc, cur) => acc += cur, 0);

    // return sum_of_set*2-sum_of_list
}