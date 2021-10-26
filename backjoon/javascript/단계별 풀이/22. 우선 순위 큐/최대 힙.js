const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const len = input.shift();
const answer = [], heap = [0], root = 1;
let size = -1;

//값 서로 바꾸는 메소드
const swap = (idx1, idx2) => {
    let tmp = heap[idx1];
    heap[idx1] = heap[idx2];
    heap[idx2] = tmp;
}

const parentIndex = (idx) => Math.floor(idx / 2); // 부모 인덱스 구하는 메소드
const leftChild = (idx) => idx * 2; // 왼쪽 자식 인덱스 구하는 메소드
const rightChild = (idx) => idx * 2 + 1; // 오른쪽 자식 인덱스 구하는 메소드

const insert = (value) => {
    heap[++size] = value; // heap의 최하단에 아이템 추가!
    let index = size; // 현재 인덱스 값 대입

    while (index > 0) { // 첫번째 삽입원소가 아니면 이곳으로
        let parentIdx = parentIndex(index);
        if (heap[parentIdx] < heap[index]) {
            swap(parentIdx, index);
            index = parentIdx;
            console.log("parentIdx : ", parentIdx, index, heap);
        }
        else break;
    }
}

const getMax = () => {
    if (size === -1) return 0; // heap에 값이 존재하지 않으면 return 0
    let result = heap[0], index = 0; // 루트 노드 result 값으로 지정, 루트 값 제거
    size--;
    heap[index] = heap.pop(); // 최말단 노드 루트 값으로 지정
    while (index <= size) {
        let childIdx = leftChild(index);
        if (childIdx <= size) {
            if (rightChild(index) <= size) {
                childIdx = heap[leftChild(index)] > heap[rightChild(index)] ? leftChild(index) : rightChild(index);
            }
            if (heap[childIdx] > heap[index]) {
                swap(childIdx, index);
                index = childIdx;
            } else break;
        } else break;
    }
    return result;
}

for (let i = 0; i < len; i++) {
    if (input[i] === 0) answer.push(getMax());
    else insert(input[i]);
}
console.log(answer.join('\n'));