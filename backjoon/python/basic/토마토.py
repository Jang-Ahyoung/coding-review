import sys
from collections import deque
input = sys.stdin.readline

M, N = map(int, input().split()) #가로, 세로
box, tomato = [], deque()
# 좌우상하
dx = [0, 0, 1, -1]
dy = [-1, 1, 0, 0]

for i in range(N):
    row = list(map(int, input().split()))
    for j in range(M):
        if row[j] == 1:
            tomato.append([i, j])
    box.append(row)


def bfs(M, N, box):
    days = -1
    while tomato:
        days += 1
        for _ in range(len(tomato)):
            x, y = tomato.popleft()

            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]

                if (0 <= nx < N) and (0 <= ny < M) and (box[nx][ny] == 0):
                    box[nx][ny] = box[x][y] + 1
                    tomato.append([nx, ny])

    for b in box:
        if 0 in b:
            return -1
    return days

print(bfs(M, N, box))