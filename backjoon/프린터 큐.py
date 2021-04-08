# 1. list 사용 - 68ms
import sys
from collections import deque

for _ in range(int(input())):   # 테스트 케이스 개수
    N, M = map(int, sys.stdin.readline().split())   #문서 갯수, 찾는 문서 인덱스
    q = deque(list(map(int, sys.stdin.readline().split()))) # 중요도

    s = 0    #순서
    ans = max(q)

    while(True):
        M -= 1      # 인덱스 개수 감소
        tmp = q.popleft()
        if tmp != ans:   #최대값아닐경우 마지막위치에 넣어줘
            q.append(tmp)
            if M == -1:     # M이 첫번째 인덱스이면서 최대값이 아닐경우
               M = len(q)-1 # 마지막 인덱스번호로 갱신해줘

        else:
            s += 1       #뽑은 게 최대값일경우 - 하나 뽑았으니 순서 +1 해주고
            if M == -1:  #뽑힌게 M이라면! 종료하고, 아니라면
                break
            ans = max(q) # 최대값 다시 갱신해줘!

    print("%d"%s)


## 2. deque 사용 - 92ms
import sys
from collections import deque

for _ in range(int(input())):
    N, M = map(int, sys.stdin.readline().split())
    q = deque(list(map(int, sys.stdin.readline().split())))

    s = 0
    ans = max(q)

    while(True):
        M -= 1
        tmp = q.popleft()
        if tmp != ans:
            q.append(tmp)
            if M == -1:
               M = len(q)-1

        else:
            s += 1
            if M == -1:
                break
            ans = max(q)

    print("%d"%s)


# 3. deque
from collections import deque

t = int(input())

for _ in range(t):
    n, m = map(int, input().split())
    count = 0

    priority = list(map(int,input().split()))
    queue = deque()
    for i in range(len(priority)):
        queue.append((priority[i],i))
    priority.sort(reverse=True)
    max_index = 0


    while True:
        x,index = queue.popleft()

        if x == priority[max_index]:
            count += 1
            max_index += 1
            if index == m:
                print(count)
                break

        else:
            queue.append((x,index))