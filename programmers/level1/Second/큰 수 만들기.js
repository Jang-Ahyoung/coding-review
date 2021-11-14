/*
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자 구하는 프로그램
- 입력 배열의 첫번째 요소를 스택에 삽입한다.
- 입력 문자열을 돌아가며 스택에 값이 담겨있다면 마지막 값과 다음 요소의 대소를 비교한다.
- 요소의 값이 더 크다면 스택의 값을 빼고(pop) k값을 감소시킨다. 스택에 남이있는 값이 있는지 확인하고 없다면 스택에 삽입한다.
*/
function solution(number, k) {
    const stack = [];
    const arr = number.split('');
    const strLen = number.length - k;

    arr.forEach((char) => {
        while (k > 0 && stack[stack.length - 1] < char) {
            stack.pop();
            k--;
        }
        // stack.push(char); // 2. 다른 풀이
        if (stack.length == strLen) k--; // stack 값이 요구 문자열 길이보다 길어지면 k-- 예외처리해줘야해!!
        else stack.push(char);
    })

    // stack.splice(stack.length-k,k)
    return stack.join('');
}