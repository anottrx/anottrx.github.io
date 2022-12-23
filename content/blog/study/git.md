---
title: 'GIT'
date: 2022-12-22 17:00:00
category: 'study'
draft: false
description: 'GIT 관련 내용을 정리합니다'
---

## 브랜치

### 브랜치 생성 및 이동

```bash
git branch feat/login # 브랜치 생성
git checkout feat/login # 브랜치 이동

git checkout -b feat/login # 브랜치 생성 후 이동
```

### 브랜치명 변경

```bash
git branch -m old-branch new-branch
```

### 브랜치 목록 확인

```bash
git branch
```

<br />

## 커밋

### 로컬에서 커밋한 메시지 1개 수정

```bash
git commit --amend
```

<br />

## 머지

### 완성된 `feat/login` 브랜치를 `dev` 브랜치에 머지하기

```bash
git checkout dev
git pull origin dev

# 충돌이 났다면 수정하고 저장한 후
git add . 

git merge feature/login -m "feat: login"
git push
```

<br />
<br />
