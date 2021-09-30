num = int(input())
a = [0]*(num+1)

for i in range(1,num+1):
    if i == 1:
        a[i] = 1
    elif i == 2:
        a[i] = 2 
    else:
        a[i] = a[i-1] + a[i-2]
    
print(a[num]%10007)




# 아래 방식으로 하면 런타임에러가 떠
num = int(input())
a = [0]*(num+1)
a[1] = 1
a[2] = 2
for i in range(3,num+1):
        a[i] = a[i-1] + a[i-2]
    
print(a[num]%10007)