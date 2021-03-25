# 1. 런타임 에러
v = input().split('-')
answer = int(v[0])*2
for i in v:
  i = eval(i)
  answer -= i
print(answer)

# 2. 런타임 에러
import sys
input = sys.stdin.readline
v = input().split('-')
answer = int(v[0])*2

for i in v:
  if '+' in i:
    i = map(int,i.split('+'))
    answer-=sum(i)
  else:
    answer-=int(i)

print(answer)

# 2번 성공시킨 코드
import sys
input = sys.stdin.readline
v = input().split('-')
answer = int(sum(map(int, v[0].split('+'))))

for i in v[1:]:
  i = map(int,i.split('+'))
  answer-=sum(i)
  
print(answer)


# 3. 성공 코드
s = input().split('-')
v = int(sum(map(int, s[0].split('+'))))
for x in s[1:]:
    v -= sum(map(int, x.split('+')))
print(v)