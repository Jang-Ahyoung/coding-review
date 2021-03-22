def solution(clothes):
    cloth = []
    num = []
    answer = 1
    
    for i in range(len(clothes)):
        cloth.append(clothes[i][1])
    setCloth = set(cloth)
    
    for i in setCloth:
        cnt = cloth.count(i)
        num.append(cnt)
    for i in num:
        answer = answer*(i+1)
        
    return answer-1