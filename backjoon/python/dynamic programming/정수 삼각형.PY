# 각 리스트 속에서 0, 중간값, 마지막 값으로 나누어 경우의 수를 구한다.

import sys
input = sys.stdin.readline

N = int(input())  # 삼각형 크기 (배열 수)

arr = []
for i in range(N):
  arr.append(list(map(int,input().split())))

for i in range(1,len(arr)): # 1,2,3,4 ~ N 크기
  for j in range(len(arr[i])): # [배열 크기]
    if j == 0:
      arr[i][j] += arr[i-1][j]
    elif j == i:
      arr[i][j] += arr[i-1][j-1]
    else:
      arr[i][j] += max(arr[i-1][j],arr[i-1][j-1])
print(max(arr[-1])) # 마지막 리스트 값 중 최대값을 출력