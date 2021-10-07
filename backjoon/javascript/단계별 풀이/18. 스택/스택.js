//  스택 구현한 다음 5가지 명령(push , pop, size, empty, top) 수행하는 프로그램

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCnt = + input.shift();
const commandList = input;

const stack = [];
let result = '';
for (let i = 0; i < testCnt; i++) {
    switch (commandList[i]) {
        case 'top':
            result += stack[stack.length - 1] || -1;
            result += '\n';
            break;
        case 'size':
            result += stack.length;
            result += '\n';
            break;
        case 'empty':
            result += stack.length === 0 ? 1 : 0;
            result += '\n';
            break;
        case 'pop':
            result += stack.pop() || -1;
            result += '\n';
            break;
        default:
            const [command, value] = commandList[i].split(' ');
            stack.push(value);
            break;
    }
}
console.log(result.slice(0, result.length - 1)); // 마지막 /n을 없애주어야해! -> slice의 경우 배열이면 한요소를, 문자열의 경우 한글자씩 선택된다.

// 2. class 이용
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.head === null ? 1 : 0;
    }
    push(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
    pop() {
        if (this.isEmpty()) return -1;
        let node = this.head;
        this.head = node.next;
        this.size--;
        return node.data;
    }
    getSize() {
        return this.size;
    }
    top() {
        return this.isEmpty() ? -1 : this.head.data;
    }
}

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = +input.shift(); // 첫 줄 명령의 총 수
let s = new Stack();
let str = '';
for (let i = 0; i < n; ++i) {
    command = input[i];
    switch (command) {
        case 'pop':
            str += s.pop() + '\n';
            break;
        case 'size':
            str += s.getSize() + '\n';
            break;
        case 'empty':
            str += s.isEmpty() + '\n';
            break;
        case 'top':
            str += s.top() + '\n';
            break;
        default:    // push
            s.push(+command.substring(5));
    }
}
console.log(str);