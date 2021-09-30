n = int(input())
graph = []
visited = [[0]*n for _ in range(n)]

for i in range(n):
  graph.append(list(map(int,input())))
dx = [-1, 1, 0, 0]
dy = [0, 0, 1, -1]

def dfs(x, y, c):
    visited[x][y] = 1 
    global nums
    if graph[x][y] == 1:
        nums += 1
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0 <= ny < n:
            if visited[nx][ny] == 0 and graph[nx][ny] == 1:
                dfs(nx,ny, c)

cnt = 1 
numlist = []
nums=0
for a in range(n):
    for b in range(n):
        if graph[a][b] == 1 and visited[a][b] == 0:
            dfs(a,b,cnt)
            numlist.append(nums)
            nums = 0
print(len(numlist))
for n in sorted(numlist):
    print(n)