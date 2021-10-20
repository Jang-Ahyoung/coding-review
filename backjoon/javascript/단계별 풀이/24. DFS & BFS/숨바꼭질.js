// 1초마다 자신의 위치 X에서 X-1, X+1, 2*X로 이동할 수 있고, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간을 찾는 프로그램
// bfs를 활용해 처음 큐에 [수빈이의 위치]을 삽입하고, 큐(Queue)가 비기 전까지 다음 과정을 반복

const [start, end] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((num) => + num);
const queue = [start]; // 수빈이 위치 큐에 넣어주기
let position = Array(100001).fill(0);
let cnt = 0;

function solution() {
    if (start === end) return 0;
    while (queue.length) {
        const x = queue[cnt++]; // queue.shift() 보다 훨씬 빨라, 큐 순서대로 돌고 head 숫자 키워줘
        for (let nx of [x + 1, x - 1, x * 2]) { // 현재 위치의 -1, +1, *2 해당하는 위치를 반복문으로 돌아줘
            if (0 <= nx < 100001 && position[nx] === 0) { // 다음 nx가 정상 범위에 속하고 처음 접근하는 경우(배열 값 = 0)이면
                position[nx] = position[x] + 1;
                if (nx === end) return position[nx];
                else queue.push(nx);
            }
        }
    }
}
console.log(solution());

// for(let i in arr) 일때 i는 배열의 인덱스를 가져와 arr[i]를 통해 요소에 접근해야되고 // 0, 1, 2 .. 
// for(let i of arr) 는 i를 통해 바로 요소에 접근이 가능하다. // 10, 20, 30 ..