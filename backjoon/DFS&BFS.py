n,m,v = map(int,input().split())
graph = [[] for _ in range(n+1)]
for _ in range(m):
  _from,_to = map(int,input().split())
  graph[_from].append(_to)
  graph[_to].append(_from)

#DFS
visited = [False]*(n+1)
def dfs(graph,v,visited):
  visited[v]=True
  print(v,end=" ")
  for i in graph[v]:
    if not visited[i]:
      dfs(graph,i,visited)
dfs(graph,v,visited)
print()

#BFS
from collections import deque
visited = [False]*(n+1)
def bfs(graph,v,visited):
  queue = deque()
  queue.append(v)
  visited[v] = True
  while queue:
    vertex = queue.popleft()
    print(vertex,end=" ")

    for i in graph[vertex]:
      if not visited[i]:
        queue.append(i)
        visited[i] = True

bfs(graph,v,visited)