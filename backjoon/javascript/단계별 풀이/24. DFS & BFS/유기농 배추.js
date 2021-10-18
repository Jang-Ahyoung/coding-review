// 아파트 단지와 비슷한 문제, 배추가 몇군데에 퍼져있는지 구하는 프로그램
// 테스트 개수 T, 배추밭의 가로길이 M, 세로길이 N, 배추가 심어져 있는 위치의 개수 K

// 1. 내 풀이
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = + input.shift();
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let result = 0;
for (let i = 0; i < testCase; i++) {
    const [m, n, k] = input.shift().split(' ').map((num) => + num);
    let graph = new Array(m).fill(null).map((element) => new Array(n).fill(0));
    for (let i = 0; i < k; i++) {
        const [a, b] = input.shift().split(' ');
        graph[a][b] = 1;
    }
    solution(m, n, graph);
}

function solution(m, n, graph) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (graph[i][j] == 1) {
                dfs(i, j, m, n, graph);
                result++;
            }
        }
    }
    console.log(result);
    result = 0;
}

function dfs(i, j, m, n, graph) {
    if (i >= 0 && i < m && j >= 0 && j < n) {
        if (graph[i][j] == 1) {
            graph[i][j] = 0;
            for (let l = 0; l < 4; l++) {
                dfs(i + dx[l], j + dy[l], m, n, graph);
            }
        }
    }
}