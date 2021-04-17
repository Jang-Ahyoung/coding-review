import sys 
input = sys.stdin.readline 
arr = [] 
dp = []

l = int(input()) 
for _ in range(l): 
  arr.append(int(input()))

dp.append(arr[0]) # 1올라
dp.append(max(arr[0]+arr[1],arr[1])) # 1,1 올르거나 2오른 가중치
dp.append(max(arr[0]+arr[2],arr[1]+arr[2])) #1,2 오르거나 2,1오른 가중치

for i in range(3,l):
  # i번 째 계단까지의 최대 가중치 합
  dp.append(max(dp[i-2]+arr[i],dp[i-3]+arr[i]+arr[i-1])) 
  # i -2까지의 최대 가중치 합 + 현재 계단의 가중 치  VS i-3까지의 최대 가중치 합 + i-1의 가중치 + 현재 계단의 가중 치
print(dp.pop())