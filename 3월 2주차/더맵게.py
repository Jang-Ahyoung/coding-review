from collections import deque
def solution(scoville, K):
    scoville.sort()
    scoville = deque(scoville)
    returnValue = 0

    while(True):
        if scoville[0] < K:
            if len(scoville) == 1:
                returnValue = -1
                break
            else:
                first = scoville.popleft()
                second = scoville.popleft()
                scoville.append(first + (second * 2))
                returnValue += 1
                scoville = list(scoville)
                scoville.sort()
                scoville = deque(scoville)
                
        else: break
    return returnValue