import sys
input = sys.stdin.readline

N = int(input())
weight = []
for _ in range(N):
  weight.append(int(input()))

weight.sort(reverse=True)
for i in range(N):
  weight[i]*=(i+1)
print(max(weight))

# 더 빠르고 짧은 다른 풀이
n,*l=map(int,open(0))
l.sort()
print(max(l[i]*(n-i) for i in range(n)))
n,*l=map(int,open(0))
l.sort()
print(max(l[i]*(n-i) for i in range(n)))