# 너무 노력해서 풀었지만..
import sys
input = sys.stdin.readline

TEST = int(input())
for _ in range(TEST):
  func = input()
  length = int(input())
  num = input().strip().strip('[]')
  num =list(map(int,filter(None, num.split(','))))
  func = list(filter(None, func.strip().split('RR')))

  while(len(func)!=0):
    a = func.pop(0)
    start = a[0]
    cnt = a.count('R')
    a = list(filter(None, a.split('R')))
    for i in range (len(a)):
      # print(a)
      if start == 'R':
        if len(num)==0:
          cnt = -1
          break
        if i%2==0:  
          del num[-len(a[i]):]
        else:
          del num[0:len(a[i])]
      
      elif start == 'D':
        if len(num)==0 or len(num)<len(a[i]):
          cnt = -1
          break
        if i%2==0:
          del num[0:len(a[i])]        
        else:
          del num[-len(a[i]):]

  if cnt == -1: print('error')
  elif cnt %2==0:
      print(num)
  elif cnt%2!=0:
      num.reverse()
      print(num)
  