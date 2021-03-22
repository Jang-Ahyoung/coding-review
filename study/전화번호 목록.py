from collections import deque
def solution(phone_book):
    phone_book.sort(key=lambda i:len(i))
    phone_book = deque(phone_book)
    answer = True
    while(len(phone_book)!=0):
        compare = phone_book.popleft()
        for i in phone_book:
                if compare == (i[0:len(compare)]):
                    answer = False
                    break
    return answer