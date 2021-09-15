// 백트래킹 : 모든 경우를 탐색하는 백트래킹 알고리즘 ->  DFS(Depth First Search) 
// 자연수 N과 M이 주어졌을 때, ex) n = 4, m = 2
// 1부터 N까지 자연수 중에서 중복 없이 M개를 만족하는 길이가 M인 수열을 모두 구하는 프로그램

const [maxNum, len] = require('fs').readFileSync('dev/stdin').toString().split(' ').map(x => +x);

let result = "";
let visited = new Array(9).fill(false);
let stack = [];

function dfs(deps) {
    if (deps >= len) { // dfs의 깊이가 2이상이 되면
        result += stack.join(' ') + '\n';
        return;
    }
    for (let i = 1; i <= maxNum; i++) { // 1,2,3,4
        if (!visited[i]) { // visited[1] false일 경우
            visited[i] = true; // 1 방문 처리하고
            stack.push(i); // 스택에 1을 넣어준다
            dfs(deps + 1); // dfs(1)을 돈다
            stack.pop(); // 스택에서 빼내고
            visited[i] = false; // 방문 처리 false한다.
        }
    }
}
dfs(0);

console.log(result);