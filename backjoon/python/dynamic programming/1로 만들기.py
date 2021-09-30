import sys
input = sys.stdin.readline

x = int(input())

d = [0] * (x+1)

for i in range(2,x+1):
  d[i] = d[i-1]+1
  if i % 2 == 0 :
    d[i] = min(d[i], d[i//2]+1)
  if i % 3 == 0:
    d[i] = min(d[i], d[i//3]+1)

print(d[x])


# 짧은 풀이 - 60ms
info = {1: 0, 2: 1}

def find(n):
    if n in info:
        return info[n]
    
    m = 1 + min(find(n // 2) + n % 2, find(n // 3) + n % 3)
    info[n] = m
    return m

N = int(input())
print(find(N))




# 길게 풀이

import sys
input = sys.stdin.readline

x = int(input())

d = [0] * (x+1) # 최소 연산 횟수를 저장을 할거야     d[2] = 1   d[19]+1  이 작냐, d[10]+1 이 값이 작냐 ???  -> d[20]   d[40] 최솟값  -> d[20] + 1

for i in range(2,x+1):

    # 현재의 수에서 1을 뺴는 방법
    d[i]=d[i-1]+1

    # 현재의 수가 2로 나누어 떨어지는 경우
    if i%2==0:
        d[i]=min(d[i],d[i//2]+1)

    # 현재의 수가 3로 나누어 떨어지는 경우
    if i % 3 == 0:
        d[i] = min(d[i], d[i // 3] + 1)
    # 현재의 수가 5로 나누어 떨어지는 경우
    if i % 5 == 0:
         d[i] = min(d[i], d[i // 5] + 1)