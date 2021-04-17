import sys
input = sys.stdin.readline

N = int(input())
dp = [0 for _ in range(N+3)]
arr = [0 for _ in range(N+3)]
for k in range(1,N+1):
    arr[k] = int(input())


dp [1] = arr[1]
dp [2] = arr[1] + arr[2]
dp [3] = max(arr[1] + arr[3] ,arr[2] + arr[3])


for i in range(4, N+1):
    dp[i] = max( dp[i-3] + arr[i-1] + arr[i] ,  dp[i-2] + arr[i] ) 
print(dp[N])


import sys
input = sys.stdin.readline
n=int(input())
stairs=[0]*300  # 변수 n 입력시 런타임 에러떠

for i in range(n):
  stairs[i]=int(input())

d=[0]*300
d[0]=stairs[0]
d[1]=stairs[0]+stairs[1]
d[2]=max(stairs[2]+stairs[0], stairs[2]+stairs[1])

for i in range(3,n):
  d[i]=max(stairs[i]+d[i-2], stairs[i]+stairs[i-1]+d[i-3])
print(d[n-1])


from sys import stdin

a,b,c = 0,0,0

n = int(stdin.readline())
for _ in range(n):
    stair = int(stdin.readline())
    d_0,d_1,d_2 = max(b,c), a+stair, b+stair
    a,b,c = d_0,d_1,d_2

print(max(d_2,d_1))
