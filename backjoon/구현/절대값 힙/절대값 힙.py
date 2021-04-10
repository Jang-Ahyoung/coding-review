import sys
import heapq

numbers = int(input()) # 테스트 횟수
heap = []              # 힙 선언

for _ in range(numbers):
    num = int(sys.stdin.readline())
    if num != 0:
        heapq.heappush(heap, (abs(num), num)) # 앞은 abs(절대값)함수 & 두 번째는 원래 수 써 -> 절댓값 정렬 가능
    else:
        try:
            print(heapq.heappop(heap)[1])
        except:
            print(0)