n = input()
a=list(map(int,input().split()))

a.sort()
wait,total = 0,0

for i in a:
  wait += i
  total +=wait
print(total)