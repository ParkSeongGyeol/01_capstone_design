// 📌 서버 기본 설정
const express = require("express"); // 서버 실행을 위한 Node.js 웹 프레임워크
const cors = require("cors"); // 프론트엔드(Vue)에서 요청을 보낼 수 있도록 허용
const bodyParser = require("body-parser"); // JSON 데이터를 처리하기 위한 미들웨어
const multer = require("multer"); // 파일 업로드를 처리하는 패키지
const fs = require("fs"); // 파일 및 폴더 관리를 위한 Node.js 내장 모듈
require("dotenv").config(); // .env 파일을 활용하여 환경변수를 저장할 수 있도록 설정

const app = express(); // Express 앱(서버) 생성
const PORT = process.env.PORT || 5000;

// 📌 환경 변수 활용 (업로드 폴더 지정)
const uploadDir = process.env.UPLOAD_DIR || "uploads";

// 📌 CORS 설정 (배포된 프론트엔드만 허용)
const allowedOrigins = [
  "https://signcare-vue.vercel.app/", // 도메인
  "https://signcare-ags6f7jgl-john-parks-projects-b98b1c70.vercel.app", // 배포된 프론트엔드 URL(임시)
  "http://localhost:5173", // 로컬 개발 환경
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS 정책에 의해 차단됨"));
      }
    },
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  })
);

// 📌 미들웨어 설정
app.use(bodyParser.json()); // JSON 데이터 처리

// 📌 uploads 폴더 자동 생성 (없으면 생성)
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log(`📂 '${uploadDir}' 폴더 생성 완료!`);
}

// 📌 기본 API 엔드포인트 (홈 페이지)
app.get("/", (req, res) => {
  res.send("Express 서버 실행 중...");
});

// 📌 챗봇 API (프론트엔드에서 메시지를 보내면 응답)
app.post("/api/chatbot", (req, res) => {
  const { message } = req.body;
  console.log("사용자 입력:", message);

  // 기본적인 챗봇 응답 (AI 연동 없이 간단한 응답)
  let responseText = "🤖 챗봇 응답: " + message;
  res.json({ response: responseText });
});

// 📌 파일 업로드 설정 (음식 사진)
const storage = multer.diskStorage({
  destination: uploadDir, // 업로드된 파일이 저장될 폴더
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // 파일명: 현재시간-원래파일명
  },
});
const upload = multer({ storage });

// 📌 음식 사진 업로드 API
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "파일이 업로드되지 않았습니다." });
  }

  console.log("✅ 파일 업로드 성공:", req.file.filename);
  res.json({ message: "파일 업로드 성공!", filename: req.file.filename });
});

// 📌 업로드된 파일 제공 (정적 경로 추가)
app.get("/api/uploads/:filename", (req, res) => {
  const filePath = `${uploadDir}/${req.params.filename}`;
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath, { root: "." });
  } else {
    res.status(404).json({ error: "파일을 찾을 수 없습니다." });
  }
});

// 📌 서버 실행
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT} (PORT: ${PORT})`);
});
