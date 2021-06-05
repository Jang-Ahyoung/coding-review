// 단순히 string 값을 split("")함수 이용해 배열로 변환한 다음
// array 메소드로 풀경우 굉장히 비효율적 -> stack 으로 접근해야해! 
// 스택 비어있거나, 마지막 char가 현재 index와 같지 않다면 스택에 현재 index의 char를 push,
// stack 비어있지 않은데 스택의 마지막 char가 현재 index와 같다면 pop()!

function solution(s) {
    const result = [];
    for (let chr of s) {
        if (!result.length || result[result.length - 1] !== chr) result.push(chr); // reult 비어 있거나, 스택 값과 그다음 배열값 다를경우 push
        else if (result[result.length - 1] == chr) result.pop(); // 스택 값과 같을경우 pop()!
    }
    return result.length == 0 ? 1 : 0
}


function solution(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
        else stack.pop();
    }
    return stack.length ? 0 : 1;
}