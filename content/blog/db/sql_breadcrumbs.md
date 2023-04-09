---
title: 'SQL 관련 breadcrumbs'
date: 2023-4-9 22:00:00
category: 'db'
draft: false
description: 'SQL 관련 이것저것을 정리합니다'
---

## SQL 키워드는 대문자로 작성하는 것이 좋을까?

대문자가 필수는 아니지만 보통 대문자로 작성하는 것 같아서 이유가 궁금했다.
[stackoverflow의 유사한 질문에 대한 답변](https://stackoverflow.com/questions/292026/is-there-a-good-reason-to-use-upper-case-for-sql-keywords)에 의하면 한때는 에디터가 대문자만 키워드로 인식해 하이라이트하던 때가 있었다고 한다. 이제는 소문자도 인식하니 그런 걱정은 안해도 될 것이다.
다만 [오라클은 주의할 점](http://www.gurubee.net/article/61534)이 있는데, 쿼리 자체는 같아도 대소문자가 다르면 서로 다른 쿼리로 인식하니 한 번 정한 방식대로 이어나가는 것이 중요할 것 같다.

대문자 외에도 들여쓰기 등 [컨벤션을 찾아봤는데 다들 다양하게 사용하는 것](https://stackoverflow.com/questions/519876/sql-formatting-standards) 같았다. 쉼표(`,`) 위치가 뒤로 가는지 앞으로 가는지 등 정말 다양했다.

<br />

## `WHERE 1=1`의 역할은 무엇일까?

`WHERE 1=1`을 입력하는 경우가 종종 있었다. 그런데 `1=1`은 어차피 참이라 불필요한 입력인 것 같아서 사용하는 이유가 궁금해졌다.
ChatGPT에게 물어보았더니 코드 수정을 용이하게 하기 위함이라는 답변을 받었다. `AND`를 이용해서 쉽게 코드를 추가하거나 삭제할 수 있기 때문이라고 하면서 아래처럼 예시를 주었다.

```sql
/**** 1=1이 없는 경우 ****/
-- 수정하려면 WHERE 절 뒷부분을 수정해야한다
SELECT *
FROM orders
WHERE order_status = 'shipped'

/**** 1=1이 있는 경우 ****/
-- 수정하려면 줄마다 추가/삭제/주석처리 등 편하게 할 수 있다
SELECT *
FROM orders
WHERE 1 = 1
  AND order_status = 'shipped'
  AND order_date BETWEEN '2022-01-01' AND '2022-03-31'
  AND customer_id = 1234
```

다만 [주의할 점](https://okky.kr/questions/250963)으로는 SELECT문이 아닌 DML에서 실수로 `WHERE 1=1`만 존재하는 상태로 실행해서 오류가 나는 경우도 있으니 주의해야한다고 한다.

<br />
<br />
