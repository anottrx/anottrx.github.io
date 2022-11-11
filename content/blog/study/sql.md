---
title: 'SQL'
date: 2022-11-10 21:00:00
category: 'study'
draft: false
---

> MySQL 기준입니다

<br />

## SELECT

### AND

```sql
SELECT AGE, GENDER
  FROM table
  WHERE AGE > 12 AND GENDER = 'W';
```

### OR, IN

```sql
SELECT GENDER
  FROM table
  WHERE GENDER IN ('W', 'M');
-- WHERE GENDER = 'W' OR GENDER = 'M';

SELECT GENDER
  FROM table
  WHERE NOT GENDER IN ('W', 'M');
-- WHERE GENDER != 'W' AND GENDER != 'M';
```

### 최댓값, 최솟값

```sql
SELECT MAX(age), MIN(age)
  FROM table;
```

### NULL인 값은 다른 값으로 채우기

```sql
SELECT COALESCE(FREEZER_YN, 'N'), IFNULL(FREEZER_YN, 'N')
  FROM table;
```

### 날짜

```sql
SELECT DATE_FORMAT(HIRE_YMD, '%Y-%m-%d')
  FROM table;

SELECT HIRE_YMD
  FROM table
  WHERE YEAR(HIRE_YMD) = 2022;
```

### COUNT

```sql
SELECT COUNT(*) AS NO_AGE
  FROM table
  WHERE AGE IS NULL;
```

### 출력 개수

```sql
SELECT AGE, GENDER
  FROM table
  LIMIT 1;
```

<br />
<br />
