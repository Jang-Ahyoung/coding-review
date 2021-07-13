// bfs를 활용한 깊이 탐색
// 컴퓨터 연결되 있을경우 1로 표현
// 방문기록이 없는 노드를 기준으로 다시 DFS, BFS를 한다는 생각(반복문 이용)으로 문제에 접근
function solution(n, computers) {
    let answer = 0;
    const queue = [];
    const visited = {}; // undefinded / false : Array(n).fill(false); 
    for (let i = 0; i < n; i++) {
        if (!visited[i]) { // 미방문 노드의 경우 큐에 넣어준 후 방문 처리해준다
            queue.push(i);
            visited[i] = true;
            answer++;
        }
        while (queue.length) {
            let node = queue.shift();
            computers[node].forEach((value, idx) => {
                if (!visited[idx] && value === 1) { // 미방문 && 연결되어있으면
                    visited[idx] = true;
                    queue.push(idx);
                }
            });
        }
    }
    return answer;
}


// dfs 활용 풀이
function solution(n, computers) {
    let answer = 0;
    let visited = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }

    function dfs(start) {
        visited[start] = true;
        for (let i = 0; i < n; i++) {
            if (start !== i && computers[start][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    return answer;
}
