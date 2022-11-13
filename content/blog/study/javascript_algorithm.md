---
title: 'JavaScript 코딩테스트 대비'
date: 2022-8-25 21:00:00
category: 'study'
draft: false
description: '자바스크립트로 코딩테스트를 준비하면서 배운 내용을 정리합니다'
---

## 문자, 문자열

### Ascii

- A ~ Z : 65 ~ 90
- a ~ z : 97 ~ 122

```js
'a'.charCodeAt(0) // 아스키코드 출력
String.fromCharCode(65, 66)
```

### 일치

```js
str.includes('dog') // 문자열을 포함하고 있는지

const regex = RegExp('dog', 'g')
if (regex.exec(str) !== null) { // 문자열을 포함하고 있는지
} 

console.log((str.match(/dog/g) || []).length) // 일치하는 문자열이 몇 개인지
```

### 자르기

```js
const str = 'hello';
console.log(str.slice(0, 2)); // 'he'
console.log(str.slice(1)); // 'ello'
```

### 바꾸기

```js
// 문자열 내에 값 찾아서 바꾸기
str = str.replace(/dog/gi, 'cat')
str = str.replaceAll(/dog/gi, 'cat') // ES2021/ES12, Nodejs v15부터 지원
```

### 숫자를 문자열로 바꾸기

```js
10 + '' // number → string
```

### 반복하기

```js
'abc'.repeat(2); // 'abcabc'
'abc'.repeat(0); // ''
```

### 대소문자

```js
let str = str.toLowerCase()
str = str.toUpperCase()
```

### 시작과 끝 확인과 시작과 끝 채우기

```js
if (str.startsWith('start')) { // 시작한다면
} 
if (str.endsWith('end')) { // 끝난다면
} 

// 시작과 끝 채우기
let str = '11'
console.log(str.padStart(4, '0')) // 0011
console.log(str.padEnd(4, '0')) // 1100
```

<br />

## Object

### Object 합치기

```js
const result = Object.assign({id: 1}, {name: 'Lee'});
```

<br />

## 배열

### 값 찾기

```js
const names = ['Lee', 'Kim'];
console.log(names.indexOf('Lee')); // 0
console.log(names.indexOf('Park')); // -1
```

### 값 제거

```js
arr.splice(5, 1) // 5번째 인덱스 값 제거
```

### for문 없이 n번 반복

```js
[...new Array(n)].forEach(() => {
});
```

### 일차원 배열

```js
const arr1 = Array.from(Array(10).keys()) // 0부터 9까지 채우기
const arr2 = new Array(10).fill(false) // 10개를 false로 채우기

const arr3 = Array.from({length: 5}, (_, index) => index); // [0, 1, 2, 3, 4]
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

### 배열 역순

```js
arr.reverse()
```

### 배열 합치기

```js
const arr = arr1.concat(arr2);
```

### 배열 값 포함 여부 확인

```js
if(arr.includes("dog")) {} // true
```

### 배열 내부에서 겹치는 값이 있는지 확인

```js
if(userNumberList.some((number, index, array) => array.indexOf(number) !== index)) {
  // true면 배열 내부에서 겹치는 값이 존재하는 것
}
```

### String, Array

```js
// Array → String
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

// 문자열 정렬
arr.sort((a, b) => a.localeCompare(b));
```

### reduce로 배열 값 빼서 저장하기

```js
const result = arr.reduce((prev, cur) => [...prev, cur.cost], [])
```

<br />

## Set, Map

### Set

`[1, 2] === [1, 2]`는 false이므로 Set을 통해 object를 저장하면 object가 duplicated될 수 있다

```js
const nums = [3, 1, 2, 3]
const mySet = [...new Set(nums)] // array → set
const myArr = [...mySet] // set → array

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

for (const [key, value] of myMap) {}

myMap.forEach((value, key, map) => {})
```

```js
const myMap = new Map()
myMap.set('R', 0).set('T', 0) // 방법1
['R', 'T'].forEach(el => myMap.set(el, 0)) // 방법2
```

<br />

## Stack, Queue

```js
const stack = []
stack.push(1) // 배열 맨 뒤에 값 삽입
stack.pop() // 배열 맨 마지막 값 제거

const queue = []
queue.shift() // 배열 맨 앞 값 제거

arr.unshift(1) // 배열 맨 앞에 값 삽입
```

<br />

## 숫자

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
if (num % 1 === 0) {}
```

### 숫자로 바꾸기

```js
arr.map((el) => +el);
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

### 나눗셈, 제곱, 절대값, 소수점 이하 자리수

```js
3 / 2 // 1.5
Math.floor(3 / 2) // 버림
Math.ceil(3 / 2) // 올림
Math.round(3 / 2) // 반올림

Math.pow(2, 3) // 2의 3제곱
2 ** 3 // 2의 3제곱 (ES7에 도입)

Math.abs() // 절대값

console.log((23.345).toFixed(2)) // "23.34"
```

### 배열 합계

```js
let sum = arr.reduce((prev, cur) => prev + cur, 0);
```

<br />
<br />
