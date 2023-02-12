---
title: 'Python 코딩테스트 대비'
date: 2023-2-9 16:00:00
category: 'study'
draft: false
description: '코딩테스트 대비 파이썬 문법을 간단하게 정리합니다'
---

### 문법

```py
# 숫자와 문자열 변환
str(1)
int('1')

# split
texts = text.split()

# 조건문(if, else if, else), True, False
if '사과' in arr:
  print(True)
elif a == 1:
  print('else if')
else:
  print(False)

# for문
for i, v in enumerate(arr):
  print(i, v)
for i in range(5):
  print(i)

# while문
while i < 10:
  print(i++)
```

### 배열

```py
# 리스트
list1 = list()
list2 = []

arr = [[0] * m for _ in range(n)]

arr1.append(1)
arr1.remove(1) # 값이 1인 데이터 삭제
arr1.reverse()

# 정렬
arr1.sort()
arr1.sort(reverse = True)
```

### dict, set

```py
# dict
data = dict()
data['사과'] = 'apple'
for key in data.keys():
  print(data[key])

# set
mySet = set([1, 2, 2])
mySet.add(3)
mySet.remove(3)
```

### 함수

```py
def add(a, b):
  return a + b
```

### deque

```py
from collections import deque

q = deque()
q.append(1)
q.appendleft(1)
q.pop()
q.popleft()
```

<br />
<br />
