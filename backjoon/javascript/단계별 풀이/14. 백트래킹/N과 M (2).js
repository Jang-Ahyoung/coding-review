/*
    문제 : 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 오름차순 수열
    접근 방식 : DFS(깊이 우선 탐색) 방식의 백트래킹 기법 이용
    DFS는 한지점에서 간선을 타고 도착 지점까지 탐색 후 다시 복귀해 다른 지점에서 탐색하는 방식
    -> 장점 : 한방향으로 진행하다 가능성이 없다고 판단되는 즉시 후보를 포기하고 왔던 길을 되돌아와 다른 선택지를 탐색한다
    -> 백트래킹 : 보통 재귀로 구현하며 안되는 조건을 없애가며 탐색의 시간복잡도를 줄일 수 있다.
    결론 ㅣ 모든 경우를 탐색하는 백트래킹 알고리즘 ->  DFS(Depth First Search) 

    백트래킹을 위해 가능성 확인을 위한 true/false 값을 담는 배열 생성 후 값의 비교를 통해 가능성 결정해야하므로 값을 저장해놓을 수 있는 배열을 만든다.
    -> 그렇게 재귀 함수를 통해 숫자를 +1 씩 증가시키며 조건 충족 시 출력한다.
*/

let input = require('fs').readFileSync('/dev/stdin').toString();
let [maxLen, len] = input.split(' ');
let result = [];

function recur(index, deps) {
  if (deps == len) {
    console.log(result.join(' '));
    return;
  }
  for (let i = index; i <= maxLen; i++) {
    result[deps] = i;
    recur(i + 1, deps + 1);
  }
}

recur(1, 0);

// dfs visited 이용

let input = require('fs').readFileSync('/dev/stdin').toString();
let [maxLen, len] = input.split(' '); //[4,2]

let visited = new Array(maxLen).fill(false);
let stack = [];
let result = '';

function dfs(count, deps) {
  if (deps == len) {
    // 원하는 조합의 수
    console.log(stack.join(' '));
    return;
  }

  for (let i = count; i <= maxLen; i++) {
    if (!visited[i]) {
      visited[i] = true;
      stack.push(i); // 스택에 담는 조합
      dfs(i, deps + 1);
      stack.pop();
      visited[i] = false;
    }
  }
}
dfs(1, 0); // count 변수 추가해 반복을 없앤다
