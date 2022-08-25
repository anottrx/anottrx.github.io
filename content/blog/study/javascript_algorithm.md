---
title: 'JavaScript 코딩테스트 대비'
date: 2022-8-25 21:00:00
category: 'study'
draft: false
---

# 문자, 문자열

### Ascii (A~Z: 65~90) (a~z: 97~122)

```js
'a'.charCodeAt(0) // 아스키코드 출력
String.fromCharCode(65, 66)
```

### 일치

```js
str.includes('e') // 문자열을 포함하고 있는지
console.log(('str1,str2,str3,str4'.match(/,/g) || []).length) // 일치하는 문자열이 몇 개인지
```

### 대소문자

```js
let str = str.toLowerCase()
str = str.toUpperCase()
```

### 시작과 끝

```js
if (str.startsWith('start')) {
}
if (str.endsWith('end')) {
}
```

# 배열

### 일차원 배열

```js
const arr = Array.from(Array(10).keys()) // 0부터 9까지 채우기
const arr = new Array(10).fill(false) // 10개를 false로 채우기
```

### 이차원 배열

```js
// N*M 크기의 이차원 배열 만들고 false로 채우기
const visited = Array.from(Array(N), () => Array(M).fill(false))
const visited = [...Array(N)].map(e => Array(M).fill(false))
```

### 배열 초기화

```js
arr = []
arr.length = 0
arr = arr.splice(0, arr.length)
```

### String, Array

```js
// Array -> String
const arr = ['h', 'e', 'l', 'l', 'o']
arr.toString() // h,e,l,l,o
arr.join('') // hello
arr.join('+') // h+e+l+l+o
```

### 정렬

```js
arr.sort(function(a, b) {
  if (a.city === b.city) {
    return b.price - a.price
  }
  return a.city > b.city ? 1 : -1
})
```

### reduce로 배열 값 빼서 저장하기

```js
const result = arr.reduce((prev, cur) => [...prev, cur.cost], [])
```

# Set, Map

### Set

`[1, 2] === [1, 2]`는 false이므로 Set을 통해 object를 저장하면 object가 duplicated될 수 있다

```js
const nums = [3, 1, 2, 3]
const mySet = [...new Set(nums)] // array -> set
const myArr = [...mySet] // set -> array

const mySet = new Set()
mySet.add(1) // Set { 1 }
mySet.has(1) // true
mySet.size
mySet.delete(1)
```

### Map

```js
const myMap = new Map()
myMap.set('id', 0)
myMap.get('id')
myMap.delete('id')
myMap.clear()
console.log(myMap.size)
if (myMap.has('id')) {
}

for (const [key, value] of myMap) {
  console.log(key, value)
}

myMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`)
})
```

# Stack, Queue

```js
const stack = []
stack.push(1)
stack.pop()

const queue = []
queue.push(1)
queue.shift()
```

# 숫자

### 숫자 정렬

```js
numberArr.sort(function(a, b) {
  return a - b
})
numberArr.sort((a, b) => a - b)
```

### 이진법

```js
num.toString(2)
```

### 숫자인지 판단

```js
isNaN(num) // number면 false 리턴
isNaN('1e10000') // false (This translates to Infinity, which is a number)
isNaN('') // false
isNaN(' ') // false
isNaN(false) // false

Number.isInteger(Number(1))
```

### 최댓값, 최솟값

```js
Math.max(1, 3, 4) // 여러 개 가능
Math.min(1, 3, 4)

const arr = [1, 3, 2] // array인 경우는 아래처럼 구하기
console.log(Math.max(...arr))

Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
```

### 나눗셈, 제곱, 절대값

```js
3 / 2 // 1.5
Math.floor(3 / 2) // 버림
Math.ceil(3 / 2) // 올림
Math.round(3 / 2) // 반올림

Math.pow(2, 3) // 2의 3제곱

Math.abs() // 절대값
```
