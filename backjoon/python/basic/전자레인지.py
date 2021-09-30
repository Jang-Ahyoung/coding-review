import sys
input = sys.stdin.readline
btn = [300,60,10]
select = []
T = int(input())
if T%10!=0 : print('-1')
else:
  for i in btn:
    select.append(str(T//i))
    T%=i
  print(' '.join(select))


  # 다른 풀이
  t = int(input())
if t % 10 != 0:
    print(-1)
else:
    a = t / 300
    t %= 300
    b = t / 60
    t %= 60
    c = t / 10
    t %= 10
    print(int(a),int(b),int(c))