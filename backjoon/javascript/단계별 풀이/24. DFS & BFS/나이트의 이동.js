// 각 테스트 케이스마다 나이트가 최소 몇 번만에 이동하는지 나타내는 프로그램 작성

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

//나이트의 이동 방향
const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
const dy = [-2, -1, 1, 2, 2, 1, -1, -2];
const testCase = + input[0];

for (let i = 1; i <= testCase * 3; i += 3) {
    let size = + input[i];
    let start = input[i + 1].split(' ').map((x) => +x);
    let end = input[i + 2].split(' ').map((x) => +x);
    let visited = new Array(size).fill(null).map(() => new Array(size).fill(0));
    let queue = [start];

    while (queue.length) {
        let [x, y] = queue.shift();
        if (x === end[0] && y === end[1]) {
            console.log(visited[x][y]);
            break;
        }
        for (let i = 0; i < 8; i++) { // 상하좌우 이동방향 반복문으로 돌며
            const xPos = x + dx[i];
            const yPos = y + dy[i];
            if (xPos >= 0 && xPos < size && yPos >= 0 && yPos < size) { // 다음 노드가 정상범위에 속하는지 확인
                if (visited[xPos][yPos] == 0) { // 처음 방문하는 것이라면 경로 비용 더해줘!
                    visited[xPos][yPos] = visited[x][y] + 1;
                    queue.push([xPos, yPos]); // queue.push({ h: nh, w: nw);
                }
            }
        }
    }
}