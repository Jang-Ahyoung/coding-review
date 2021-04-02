n,m = map(int, input().split())
MAX = 10**5
dist = [0]*(MAX+1)

from collections import deque
def bfs():
  q = deque()
  q.append(n) # 내 위치 추가
  while q:    # q가 정수일 때 계속 반복
    x = q.popleft()
    if x ==m:
      print(dist[x]) # 얼마의 시간 걸렸는지 출력!
      break
    for nx in(x-1,x+1,x*2): # 4,6,10
      if 0 <= nx <= MAX and not dist[nx]:
        dist[nx]=dist[x]+1 # dic[4,6,10] = dict[5]+1 = 0+1 = 1 모두1의값 갖게되고 deque에 들어가게되
        q.append(nx) # q=deque([4,6,10])

bfs()