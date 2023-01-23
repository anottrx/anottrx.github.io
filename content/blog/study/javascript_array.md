---
title: '자바스크립트 배열'
date: 2023-01-15 13:00:00
category: 'study'
draft: false
description: '자바스크립트 배열을 정리합니다'
---

### Array.prototype.forEach()

> 함수를 배열 요소 각각에 대해 실행 (break 불가능)

```js
words.forEach((word, index, array) => console.log(word));
```

### Array.prototype.filter()

> 해당 조건에 맞는 요소만 모아 새로운 배열로 반환

```js
const result = words.filter((word, index, array) => word.length > 6);
```

### Array.prototype.every()

> 모든 요소가 해당 조건을 만족하면 true를 반환하고, 아닌 요소를 발견하면 false를 반환하고 종료

```js
const isLengthOver = words.every((word, index, array) => word.length > 6);
```

### Array.prototype.some()

> 해당 조건에 맞는 요소가 하나라도 있으면 true 반환하고 끝내고, 없다면 false를 반환

```js
const isLengthOver = words.some((word, index, array) => word.length > 6);
```

### Array.prototype.includes()

> 특정 요소를 포함하는지 확인  
> 두번째 인자: 해당 인덱스부터 검색하며, 기본값은 0

```js
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // true
console.log(pets.includes('at')); // false
console.log(pets.includes('cat', 1)); // false
```

### Array.prototype.indexOf()

> 특정 요소가 있다면 해당 위치를 찾는 즉시 반환하고 종료하고, 없다면 -1을 반환  
> 두번째 인자: 해당 인덱스부터 검색하며, 기본값은 0

```js
const beasts = ['ant', 'bison', 'camel', 'bison'];

console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('bison', 2)); // 3
console.log(beasts.indexOf('giraffe')); // -1
```

### Array.prototype.find()

> 해당 조건을 만족하는 첫 번째 요소를 반환하고 종료. 없다면 undefined 반환

```js
const found = arr.find((element, index, array) => element > 10);
```

### Array.prototype.findIndex()

> 해당 조건을 만족하는 첫 번째 요소의 인덱스를 반환하고 종료. 배열 길이가 0이거나 조건에 만족하는 요소가 없다면 -1 반환

```js
const found = arr.findIndex((element, index, array) => element > 10);
```

<br />
<br />
