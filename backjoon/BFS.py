graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

#BFS
from collections import deque
visited = [False]*len(graph)
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

bfs(graph,1,visited)