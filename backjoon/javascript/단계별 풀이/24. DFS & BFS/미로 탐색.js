// N x M 크기 미로를 빠져나오는 최소의 칸 수를 출력하는 프로그램
// dfs는 깊이 우선 탐색으로 결국 모든 경로를 탐색을 마친 후 종료하기 때문에 시간복잡도가 엄청나
// 최단거리 구하는 문제에는 bfs가 맞다.

// 풀이 1.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [yMax, xMax] = input.shift().split(" "); // N x M 배열 크기 담기
const map = input.map(v => v.split("").map(x => +x)); // 배열 맵 숫자로 담기
const queue = [[0, 0, 1]];
const dir = [ // 방향
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];

while (queue.length) {
    const [x, y, dis] = queue.shift();
    for (let i = 0; i < 4; i++) { // 상하좌우를 돌며
        const xPos = x + dir[i][0];
        const yPos = y + dir[i][1];
        if (0 <= xPos && 0 <= yPos && xPos < xMax && yPos < yMax) { // 범위가 맞고
            if (map[yPos][xPos] === 1) { // 아직 방문하지 않은 갈 수 있는 길이라면
                map[yPos][xPos] = dis + 1; // 경로 비용 올려주고
                queue.push([xPos, yPos, dis + 1]); // 다음 큐에 넣어준다.
            }
        }
    }
}

console.log(map[yMax - 1][xMax - 1]);


// 풀이 2.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = inputs.shift().split(' ').map((num) => + num);
let map = inputs.map((element) => element.split('').map((num) => + num));

let queue = [[0, 0]];
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
        let nextX = x + dx[i];
        let nextY = y + dy[i];
        if (0 <= nextX && nextX < N && 0 <= nextY && nextY < M) {
            if (map[nextX][nextY] === 1) {
                queue.push([nextX, nextY]);
                map[nextX][nextY] = map[x][y] + 1;
            }
        }
    }
}

console.log(map[N - 1][M - 1]);