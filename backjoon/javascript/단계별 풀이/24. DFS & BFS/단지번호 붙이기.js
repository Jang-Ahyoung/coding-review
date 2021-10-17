// 집이 있는 곳 - 1이 연결된 블록이 모여 단지를 이룬다.
// 총 단지 수와 단지내 집의 수를 오름차순으로 정렬해 출력하는 프로그램

// 풀이 1.
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let graph = [];
let n = + input.shift(); // 배열 수
let home = 0; // 단지별 아파트 갯수
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
for (let i = 0; i < n; i++) { // 2차원 배열 그래프에 담아줌
    graph[i] = input[i].split('').map((num) => Number(num));
}

const solution = () => {
    let homeCnt = []; //단지별 아파트 개수를 담는 배열
    //이중그래프 전체 탐색
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (graph[i][j] == 1) { // 방문한 적 없다면 dfs호출
                dfs(i, j); // 한번 수행 시 하나의 단지 전체 방문처리 완료
                // 전역변수 home을 배열에 넣고 초기화
                homeCnt.push(home);
                home = 0;
            }
        }
    }
    console.log(homeCnt.length); // 단지 갯수 출력
    homeCnt.sort((a, b) => a - b);
    console.log(homeCnt.join('\n'));
}

const dfs = (i, j) => {
    // 범위 안에 속하고 방문처리가 되지 않았을때
    if (i >= 0 && i < n && j >= 0 && j < n && graph[i][j] === 1) { // RangeCheck(i, j) 함수 사용시 시간 훨씬 많이 소요돼
        graph[i][j] = 0; // 방문 처리
        home += 1;
        for (let k = 0; k < dx.length; k++) {
            dfs(i + dx[k], j + dy[k]);  // 재귀 호출
        }
    }
}

// 그래프 범위 검증
function RangeCheck(i, j) {
    if (i >= 0 && i < n && j >= 0 && j < n) {
        return true;
    }
    else return false;
}
solution();