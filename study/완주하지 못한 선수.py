def solution(participant, completion):
    participant.sort()
    completion.sort()
    while(True):
        if len(completion)==0:
            answer = par.pop()
            break
        origin = participant.pop()
        compare = completion.pop()
        if origin != compare:
            answer = origin
            break
    return answer