import sys
input = sys.stdin.readline

N = int(input())
metting = []
cnt = 1
for i in range(N):
  metting.append(list(map(int,input().split())))
# metting =[(*map(int, input().split()),) for i in range(N)]


metting.sort(key = lambda x : (x[1],x[0]))  # 끝나는 시간이 같은 경우 시작시간을 빠른순으로 정렬해야되는 경우를 놓쳤었음
min_end = metting[0][1]
for i in range(len(metting)-1):
  if metting[i+1][0] >=min_end:
    cnt +=1
    min_end = metting[i+1][1]

print(cnt)
