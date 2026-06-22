# Todo List Assignment

## 프로젝트 소개

Next.js 기반 Todo List CRUD 애플리케이션입니다.  
할 일 추가, 수정, 삭제, 완료 처리 및 이미지 업로드 기능을 포함합니다.

---

## 기술 스택

- Next.js (App Router)
- React
- TypeScript
- CSS Modules
- Fetch API

---

## 주요 기능

### 1. Todo 목록

- 할 일 조회
- 완료 / 미완료 구분
- 상태 토글

### 2. Todo 생성

- 제목 입력 후 추가
- Enter / 버튼 모두 지원
- 중복 요청 방지 처리

### 3. Todo 상세

- 제목 수정
- 메모 수정
- 이미지 업로드
- 완료 상태 변경
- 수정 완료 버튼으로 일괄 저장

### 4. 이미지 업로드

- 파일 선택 후 미리보기
- 서버 업로드 후 URL 저장
- SVG 파일 업로드 제한

### 5. 삭제 기능

- 삭제 전 confirm 확인
- 삭제 후 메인 이동

---

## API

Swagger 기반 Todo API 사용

- 목록 조회
- 상세 조회
- 생성
- 수정
- 삭제
- 이미지 업로드

---

## 실행 방법

```bash
npm install
npm run dev
```

---

## 프로젝트 구조

src/
├─ app/ # 페이지 라우팅 (Next.js App Router)
│ ├─ page.tsx # Todo 리스트
│ ├─ items/[itemId] # Todo 상세
│
├─ components/ # UI 컴포넌트
│ ├─ TodoInput
│ ├─ TodoItem
│ ├─ TodoDetailEditor
│ ├─ MemoTextarea
│
├─ api/ # API 요청 함수
│ └─ todo.ts
│
├─ styles/ # 전역 스타일

---

## 추가 설명

- 모든 데이터는 외부 Todo API 기반으로 처리됩니다.
- 상태 변경은 즉시 API 반영 후 `router.refresh()`로 동기화됩니다.
- 상세 페이지는 제목, 메모, 상태, 이미지 변경을 하나의 저장 버튼으로 처리합니다.
- 입력 컴포넌트는 controlled component 방식으로 상태를 관리합니다.
- 이미지 업로드는 서버 업로드 후 URL을 저장하여 사용합니다.
- SVG 파일은 렌더링 안정성을 위해 업로드 제한 처리했습니다.
