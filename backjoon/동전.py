coinKind,money = input().split()
coin = list(map(int, input().split()))

cnt = 0
while(money!=0):
  choose = coin.pop()
  cnt += money//choose
  money %= choose

print(cnt)