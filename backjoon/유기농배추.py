import sys
sys.setrecursionlimit(50000)
input = sys.stdin.readline

def dfs(x,y):
  if 0<=x<n and 0<=y<m and graph[x][y] ==1:
    graph[x][y] = 0
    dfs(x-1,y)
    dfs(x+1,y)
    dfs(x,y-1)
    dfs(x,y+1)
    return True
  return False

for i in range(int(input())):
  n,m,cabbage = map(int, input().split())
  graph=[[0]*m for _ in range(n)]
  visited = [[0]*m for _ in range(n)]
  for i in range(cabbage):
    ga,se = map(int,input().split())
    graph[ga][se] =1

  count = 0
  counted=[]
  for i in range(n):
    for j in range(m):
      if dfs(i,j) == True:
        count +=1
  counted.append(str(count))
  print(count)
