---
title: 'SQL'
date: 2022-11-10 21:00:00
category: 'study'
draft: false
description: 'MySQL 기준으로 배운 내용을 정리합니다'
---

## SELECT

### AND

```sql
SELECT AGE, GENDER
  FROM table1
  WHERE AGE > 12 AND GENDER = 'W';
```

### OR, IN

```sql
SELECT GENDER
  FROM table1
  WHERE GENDER IN ('W', 'M');
-- WHERE GENDER = 'W' OR GENDER = 'M';

SELECT GENDER
  FROM table1
  WHERE NOT GENDER IN ('W', 'M');
-- WHERE GENDER != 'W' AND GENDER != 'M';
```

### 최댓값, 최솟값

```sql
SELECT MAX(age), MIN(age)
  FROM table1;
```

### NULL인 값은 다른 값으로 채우기

```sql
SELECT COALESCE(FREEZER_YN, 'N'), IFNULL(FREEZER_YN, 'N')
  FROM table1;
```

### 날짜

```sql
SELECT DATE_FORMAT(HIRE_YMD, '%Y-%m-%d')
  FROM table1;

SELECT HIRE_YMD
  FROM table1
  WHERE YEAR(HIRE_YMD) = 2022;
```

### COUNT

```sql
SELECT COUNT(*) AS NO_AGE
  FROM table1
  WHERE AGE IS NULL;
```

### 출력 개수

```sql
SELECT AGE, GENDER
  FROM table1
  LIMIT 1;
```

### 날짜와 IF

```sql
SELECT IF(DATEDIFF(END_DATE, START_DATE)+1>=30, '장기 대여', '단기 대여') AS RENT_TYPE
  FROM COMPANY
```

<br />
<br />
