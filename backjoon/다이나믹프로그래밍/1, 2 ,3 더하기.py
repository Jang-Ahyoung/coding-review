N = int(input())

def sol(n):
  if n == 1:
    return 1
  elif n ==2:
    return 2
  elif n == 3:
    return 4
  else:
    return sol(n-1)+sol(n-2)+sol(n-3)

for i in range(N):
  print(sol(int(input())))

# 문제 조건을 더 잘 활용한 풀이
N = int(input())
arr=[1,2,4] # array 배열에 초기값 설정해주고 계산된 값들도 담아줄거야
for i in range(4,11): # n은 양수이며 11보다 작으니
    arr.append(sum(arr[-3:])) # 반복되는 점화식 뒤에서 3개만 더해줘서 값을 구해
for _ in range(N):
    T = int(input())
    print(arr[T-1])