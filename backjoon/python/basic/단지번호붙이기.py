from sys import stdin

n = int(input())
cnt = 1 # 아파트 단지 세기 위한
nums=0 # 아파트 수
numlist = [] # 아파트 단지별 숫자
graph = [] # 데이터 저장용 공간 graph
visited = [[0]*n for _ in range(n)] # 방문 내역 저장용 visited

for _ in range(n):
  graph.append(list(map(int, input()))) # graph에 0과 1 저장

# 방향 확인용 좌표 dx와 dy -> 중앙을 기준으로 좌/우/위/아래
dx = [-1, 1, 0, 0]
dy = [0, 0, 1, -1]

# DFS 함수 정의
def dfs(x, y, c):
    visited[x][y] = 1   # 방문 여부 표시
    global nums            # 아파트 단지 수를 세기위한 변수
    # 아파트가 있으면 숫자를 세어줍니다.
    if graph[x][y] == 1:
        nums += 1
    # 해당 위치에서 좌/우/위/아래 방향의 좌표를 확인해서 dfs 적용
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0 <= ny < n:
            if visited[nx][ny] == 0 and graph[nx][ny] == 1:
                dfs(nx,ny, c)

for a in range(n):
    for b in range(n):
        if graph[a][b] == 1 and visited[a][b] == 0:
            dfs(a,b,cnt)
            numlist.append(nums)
            nums = 0

print(len(numlist))
for n in sorted(numlist):
    print(n)