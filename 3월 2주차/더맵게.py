def solution(scoville, K):
    scoville.sort()
    returnValue = 0

    while(True):
        if scoville[0] < K:
            if len(scoville) == 1:
                returnValue = -1
                break
            else:
                first = scoville.pop(0)
                second = scoville.pop(0)
                scoville.append(first + (second * 2))
                returnValue += 1
                scoville.sort()
        else: break
    return returnValue