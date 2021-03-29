# 시간초과뜸
import sys
input = sys.stdin.readline

score = []
select = []

case = int(input())
choice = 0
for _ in range(case):
  newpeople=int(input())
  for _ in range(newpeople):
    score.append(list(map(int,(input().split()))))
  score.sort(reverse=True)
  a = score[0][1]
  for i in score:
    if i[1]<=a:
      choice+=1
      a = i[1]
  select.append(choice)
  choice = 0


for i in select:
  print(i)


# 다른 풀이
import sys
input = sys.stdin.readline
def solution():
    case = int(input()) # 테스트 갯수 입력받아
    answers = []
    for _ in range(case):
        n = int(input()) # 각 테스트 입력받을 성적 수
        scores = [0]*(n+1) # 입력할 성적 0으로 채워줘야 및에서 대입이 가능
        for _ in range(n):
            s1, s2 = map(int, input().split())
            scores[s1] = s2
        answer = 1      # 뽑힐 신입사원 수
        min = scores[1]
        for score in scores[2:]: # 2번째 리스트 값부터 비교
            if(score<min):
                answer += 1
                min = score
        answers.append(str(answer)) #str로 바꿔줘야 join함수 사용이 가능!
    print('\n'.join(answers))
solution()

