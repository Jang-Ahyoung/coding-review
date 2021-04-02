import sys
input = sys.stdin.readline
## 내 풀이
from collections import deque

# 노드 수, 간선 수
n = int(input())
m = int(input())
graph=[[] for _ in range(n+1)]
cnt = 0
for _ in range(m):
  start,end = map(int,input().split())
  graph[start].append(end)
  graph[end].append(start)
visited=[False]*(n+1)

# print(graph)
def bfs(graph,v,visited):
  queue = deque()
  queue.append(v)
  visited[v] = True

  while queue:
    global cnt
    node = queue.popleft()
    for i in graph[node]:
      if not visited[i]:
        visited[i] = True
        queue.append(i)
        cnt+=1
bfs(graph,1,visited)
print(cnt)



# 좋은 풀이
from sys import stdin
input = stdin.readline
dic={}                      # 사전 사용
for i in range(int(input())): 
    dic[i+1] = set()        # 노드 수 +1 만큼 set
for j in range(int(input())): # 연결 간선 수만큼
    a, b = map(int,input().split())
    dic[a].add(b)           # 받아와 graph->dic 생성
    dic[b].add(a)

def dfs(start, dic):
    for i in dic[start]:    # 출발 노드안의 노드 돌며
        if i not in visited:# 첫 방문일경우
            visited.append(i) # 방문처리해주고
            dfs(i, dic)     # 시작 노드로 다시 시작
visited = []
dfs(1, dic)
print(len(visited)-1)