# 1. list 사용 - 68ms
import sys

for _ in range(int(input())): 
    N, M = map(int, sys.stdin.readline().split())
    q =list(map(int, sys.stdin.readline().split()))

    s = 0 
    ans = max(q)

    while(True):
        M -= 1 
        tmp = q.pop(0)
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