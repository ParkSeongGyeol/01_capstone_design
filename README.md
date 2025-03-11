# 🚀 SignCare - 당뇨 환자를 위한 헬스케어 챗봇

## 📌 프로젝트 개요

**SignCare**는 당뇨 환자를 위한 **헬스케어 챗봇 및 음식 분석 서비스**입니다.  
Vue.js 기반 웹 애플리케이션으로, PWA(Progressive Web App)를 지원하여 **앱처럼 설치 가능**합니다.

✅ **주요 기능**

- 🗣 **챗봇 기능**: 사용자와 자연스러운 대화를 통해 건강 정보를 제공
- 🍱 **음식 이미지 분석**: 음식 사진을 업로드하면 AI가 분석하여 영양 정보를 제공
- 📊 **사용자 맞춤형 건강 관리**: 운동량, 식단 기록을 관리

🔗 **배포된 서비스 링크**

- **프론트엔드 (Vue.js)** → [signcare-vue.vercel.app](https://signcare-vue.vercel.app)
- **백엔드 (Express API)** → [my-api.railway.app](https://my-api.railway.app)

---

## 🛠️ 기술 스택

| 역할           | 기술                                       |
| -------------- | ------------------------------------------ |
| **프론트엔드** | Vue.js, Vite, PWA (vite-plugin-pwa), Axios |
| **백엔드**     | Node.js, Express.js, Multer (파일 업로드)  |
| **데이터**     | JSON 기반 API (현재 DB 없음)               |
| **배포**       | Vercel (프론트), Railway (백엔드)          |

---

## 📂 프로젝트 구조

```
signcare/
├── backend/ # Express.js 백엔드
│ ├── server.js # API 서버 (챗봇 & 파일 업로드)
│ ├── uploads/ # 업로드된 이미지 저장
│ ├── package.json # Node.js 설정
├── frontend/ # Vue.js 프론트엔드
│ ├── src/
│ │ ├── components/
│ │ │ ├── Chatbot.vue # 챗봇 UI
│ │ │ ├── FoodUpload.vue # 음식 업로드 UI
│ │ ├── views/
│ │ │ ├── HomeView.vue # 홈 화면
│ │ │ ├── ChatbotView.vue # 챗봇 페이지
│ │ │ ├── FoodView.vue # 음식 업로드 페이지
│ ├── App.vue # 메인 앱
│ ├── main.js # Vue 초기화
│ ├── package.json # 프론트엔드 설정
│ ├── vite.config.js # PWA 설정 포함
```

---

## 🏃 실행 방법 (로컬 개발 환경)
### 1️⃣ **백엔드 실행**
```sh
cd backend
npm install
node server.js
````

➡ 서버가 `http://localhost:5000` 에서 실행됨.

### 2️⃣ **프론트엔드 실행**

```sh
cd frontend
npm install
npm run dev
```

➡ 개발 서버 `http://localhost:5173` 에서 실행됨.

---

## 🌍 배포 방법

### **1️⃣ 프론트엔드 배포 (Vercel)**

```sh
cd frontend
vercel
```

### **2️⃣ 백엔드 배포 (Railway)**

- Railway에서 GitHub 연결 후 **배포 진행**
- CORS 설정 필요 (`server.js` 수정)

```javascript
app.use(cors({ origin: "*" }));
```

---

## ✅ API 문서

### **1️⃣ 챗봇 API**

```
POST /api/chatbot
{
  "message": "안녕하세요"
}
```

✅ **응답**

```json
{
  "response": "챗봇 응답: 안녕하세요"
}
```

### **2️⃣ 음식 이미지 업로드 API**

```
POST /api/upload
(FormData 사용, "file" 필드 포함)
```

✅ **응답**

```json
{
  "message": "파일 업로드 성공!",
  "filename": "1700000000-image.jpg"
}
```

---

## 📌 TODO (향후 개선)

- ✅ PWA 설치 및 푸시 알림 기능 추가
- ✅ 데이터 저장 기능 추가 (MySQL 또는 Firebase)
- ✅ 챗봇 AI 강화 (Rasa, Llama 3.1 연동)
- ✅ UI/UX 개선

---

## 🙋‍♂️ 팀원 정보

- **팀장**: 박성결 (백엔드 개발 & 기획)
- **프론트엔드 개발**: 김혜진
- **데이터 수집**: 이하은
- **기획 & 모델 학습**: 황수지

🎯 **이 프로젝트는 캡스톤디자인 졸업 작품으로 개발되었습니다!**
