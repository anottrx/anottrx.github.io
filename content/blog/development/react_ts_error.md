---
title: '리액트 에러'
date: 2022-11-11 11:00:00
category: 'development'
draft: false
introduce: '리액트 관련 에러 해결법을 정리합니다'
---

## 리액트 화면이 2번 랜더링되는 현상

> Warning: Encountered two children with the same key, `0`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

- 화면이 2번씩 랜더링되어 배열의 키값이 중복된다는 경고가 떴다.
- Next.js로 프로젝트를 생성하면 자동으로 `next.config.js` 파일이 생성되고, 아래처럼 설정된다.

  ```js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
  };

  module.exports = nextConfig;
  ```

- 여기서 `reactStrictMode`를 `false`로 해주면 된다.

    ```js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: false,
  };

  module.exports = nextConfig;
  ```

- 그러나 [리액트 공식 문서](https://ko.reactjs.org/docs/strict-mode.html)에서는 `StrictMode`가 아래와 같은 문제를 찾아준다고 적혀있으며, `StrictMode`는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드 때는 문제가 없다고 한다. 

  - 안전하지 않은 생명주기를 사용하는 컴포넌트 발견
  - 레거시 문자열 ref 사용에 대한 경고
  - 권장되지 않는 findDOMNode 사용에 대한 경고
  - 예상치 못한 부작용 검사
  - 레거시 context API 검사

- 이 문제는 내가 배열에 값을 `push`를 통해 입력했기 때문에 발생했던 문제였다. 그래서 `push` 대신에 마지막 `index + 1` 위치에 값을 넣는 방식으로 해결했다.
