---
title: '정규 표현식 (Regular Expression)'
date: 2022-11-10 21:00:00
category: 'study'
draft: false
---

## 정규 표현식

### 정규 표현식 생성하기

```js
const reg = /\w+/;
const reg2 = new RegExp('\\w+');
const reg3 = new RegExp(/\w+/, 'i'); // 리터럴
const reg4 = new RegExp('\\w+', 'i'); // 생성자
```

### 플래그

- `i` : 대소문자 구분 없이 검색
- `g` : 패턴과 일치하면 모두 검색 (없을 경우 첫번째 일치하는 것만 반환)

<br />

## 특수문자

### 문자 클래스 (Character classes)

- `.` : 자리 포함
- `\d` : 숫자 (`/[0-9]/`와 동일)
- `\w` : 알파벳, 숫자, `_` (`/[A-Za-z0-9_]/`와 동일)
- `\s` : 모든 띄어쓰기

### Assertions

- `^` : 시작
- `$` : 끝

### 그룹과 범위

```js
/x|y/ // x 또는 y
/[a-c]/ // a부터 c까지 ([abc])
/(foo)/ // 정확히 foo가 일치해야 검색
```

### 수량자 (Quantifiers)

```js
/x*/ // x가 0번 또는 1번 이상
/x+/ // x가 1번 이상
/x?/ // x가 0번 또는 1번

/a{2}/ // caandy처럼 2개의 a
/a{2,}/ // caaaandy처럼 2개 이상의 a
/a{1,3}/ // candy처럼 1개-3개의 a
```

<br />
<br />
