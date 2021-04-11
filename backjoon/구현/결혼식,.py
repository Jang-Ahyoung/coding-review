import sys
input = sys.stdin.readline

college = int(input()) # 동기 수
length = int(input()) # 리스트 수
LIST,f,ff = [],[],[]

for _ in range(length):
  n,m = map(int, input().split())
  LIST.append([n,m])
LIST.sort()
for i in LIST:
  if i[0]==1:
    f.append(i[1])
  elif i[1]==1:
    f.append(m)
  elif i[0] in f:
    ff.append(i[1])
  elif i[1] in f:
    ff.append(i[0])
print(len(list(set(f)|set(ff)))) # 리스트의 합집합을 set통해 만들 수 있다