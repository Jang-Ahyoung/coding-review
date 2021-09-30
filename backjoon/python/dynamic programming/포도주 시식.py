N = int(input())
wine = [0]  # 와인 양 담을 리스트
dp = [0]*(N+1) # 누적 최대값 담을 리스트
for i in range(1, N+1):
    wine.append(int(input())) # 와인잔 하나씩 추가하며
    if i < 3:
        dp[i] = sum(wine)     # 1,2잔 일때는 전부 추가해 최대값에 추가
    else:                     # 3째잔 부터는 최대값 무엇인지 계산해야함
        target = []                              # ex) 5잔     
        target.append(dp[i-3]+wine[i-1]+wine[i]) # 누적2 -> 4값-> 5값
        target.append(dp[i-2]+wine[i])           # 누적3 -> 5값
        target.append(dp[i-1])                   # 누적4 -> 5값 x
        dp[i] = max(target)
print(dp[-1])



import sys
input = sys.stdin.readline

N = int(input())  # (입력할 배열 수)

arr =[]
for _ in range(N):
  arr.append(int(input()))

dp = [0]*10000
dp[1] = arr[0]
dp[2] = arr[0] + arr[1]
dp[3] = max(arr[0]+arr[2],arr[1]+arr[2])

for i in range(4,N+1):
  dp[i] = max(dp[i-3]+arr[i-2]+arr[i-1],dp[i-2]+arr[i-1])
print(dp[N])