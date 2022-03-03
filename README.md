![이미지](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-hero2.svg)

# LINKBOOK

사람들과 자유롭게 일상을 공유하는 공간

## Introduction

페이스북에서 영감을 받아 제작한 SNS플랫폼 입니다. 자유롭게 다른 사용자들을 팔로우하며 서로의 일상을 자유롭게 공유할 수 있는 공간입니다. MERN 스택을 사용하여 구현하였습니다.

## Key Features

- **게시물 공유** - 사용자는 게시물을 작성하고 공유할 수 있습니다. 사진을 업로드해서 공유하는 것도 가능합니다.
- **게시물 삭제** - 사용자는 본인이 작성한 게시물을 삭제할 수 있습니다.
- **좋아요** - 본인 또는 다른 사용자의 게시물을 좋아요 할 수 있습니다.
- **팔로우** - 사용자는 다른 사용자를 팔로우 할 수 있습니다. 팔로우하면 홈화면의 피드에 팔로우한 사용자의 게시물이 보입니다.
- **언팔로우** - 사용자는 팔로우하고있는 사용자를 언팔로우 할 수 있습니다.
- **회원가입** - 새로운 계정은 회원가입을 통해 생성 가능합니다.
- **로그인** - 회원가입을 통해 계정을 가지고 있는 사용자는 본인 계정에 로그인 할 수 있습니다.

## Tech Stack

- Language: `JavaScript`
- Frontend: `React`, `styled-components`, `day.js`, `react-icons`
- Backend: `Node.js`, `express`, `mongoose`, `multer`, `dotenv`, `bcrypt`
- Database: `MongoDB`
- Cloud Storage: `AWS S3`
- [백엔드 Repository](https://github.com/pauljeonn/linkbook-server)

## Contribution

@pauljeonn (개인 프로젝트)

## What I Learned

- Context API와 리듀서를 사용하여 불변성을 지키면서 전역 상태 관리
- Context API를 사용하여 REST API 비동기 호출 및 결과 처리
- React Router 6의 userNavigate 및 useParams 사용법
- Day.js 라이브러리 사용해서 현재 시간을 기점으로 지난 시간 표시
- 자바스크립트 객체를 활용해 styled-components에서 CSS variable처럼 사용하는 방식
- 리액트에서 직접 커스텀 모달을 만들어서 사용해보기
- Mongoose 라이브러리를 사용하여 NoSQL 스키마 정의 및 모델 생성
- Mongoose Query를 사용하여 MongoDB와 연동된 데이터 조작
- bcrypt 라이브러리 통해 암호 해시화 및 보안 강화
- multer 미들웨어 사용해서 HTTP 프로토콜에서 multipart/form-data를 업로드하여 AWS S3 서버로 전송
- AWS S3 버켓 퍼블릭 권한 설정 및 이미지 업로드 후 S3에 저장된 이미지 주소 반환하기
- Postman 사용해서 REST API 테스트 진행

## Demo

### 1. 메인 피드 화면

![메인](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-home2.gif)

### 2. 프로필 페이지

![프로필](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-profile1.gif)

### 3. 게시물 작성

![게시물](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-post.gif)

### 4. 게시물 삭제

![삭제](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-delete.gif)

### 5. 좋아요 & 좋아요 취소

![좋아요](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-like.gif)

### 6. 팔로우 & 언팔로우

![팔로우](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-follow.gif)

### 7. 회원가입

![회원가입](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-register.gif)

### 8. 로그인

![로그인](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-login3.gif)

### 9. 로그아웃

![로그아웃](https://pauljeon.s3.ap-northeast-2.amazonaws.com/linkbook-logout.gif)
