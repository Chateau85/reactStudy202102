# 일정 관리

React와 Vite로 만든 간단한 일정 관리 애플리케이션입니다. 일정을 추가하고, 완료 상태를 전환하고, 삭제할 수 있습니다.

## 요구 사항

- Node.js 22.22.2 이상
- npm 10 이상

## 실행

```bash
npm ci
npm run dev
```

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

## 검증

```bash
npm test
npm run build
npm audit
```

테스트는 일정 추가, Enter 키 입력, 완료 상태 전환, 삭제 및 빈 일정 방지를 검증합니다.
