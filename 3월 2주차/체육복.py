def solution(n, lost, reserve):
    lost2 = len(lost)
    r2 = reserve.copy()
    for i in reserve:
        if len(lost)==0:break
        elif i in lost:
            lost.remove(i+1)
        elif i==1 & (i+1 in lost):
            r2.append(i+1)
            lost.remove(i+1)
        elif i==n & (i-1 in lost):
            r2.append(i-1)
            lost.remove(i-1)
        else :
            if i+1 in lost:
                r2.append(i+1)
                lost.remove(i+1)
            elif i-1 in lost:
                r2.append(i-1)
                lost.remove(i-1)
            
    r2 = set(r2)
    answer = n-len(reserve)-lost2+len(r2)
    
    return answer