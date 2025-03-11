// 📌 서버 기본 설정
const express = require("express"); // 서버 실행을 위한 Node.js 웹 프레임워크
const cors = require("cors"); // 프론트엔드(Vue)에서 요청을 보낼 수 있도록 허용
const bodyParser = require("body-parser"); // JSON 데이터를 처리하기 위한 미들웨어
const multer = require("multer"); // 파일 업로드를 처리하는 패키지
require("dotenv").config(); // .env 파일을 활용하여 환경변수를 저장할 수 있도록 설정

const app = express(); // Express 앱(서버) 생성
const PORT = process.env.PORT || 5000;

// 📌 미들웨어 설정
app.use(cors()); // Vue에서 요청을 허용
app.use(bodyParser.json()); // JSON 데이터 처리
app.use(express.static("uploads")); // 업로드된 파일을 정적 폴더에서 제공

// 📌 기본 API 엔드포인트 (홈 페이지)
app.get("/", (req, res) => {
  res.send("Express 서버 실행 중...");
});

// 📌 챗봇 API (프론트엔드에서 메시지를 보내면 응답)
app.post("/api/chatbot", (req, res) => {
  const { message } = req.body;
  console.log("사용자 입력:", message);

  // 기본적인 챗봇 응답 (AI 연동 없이 간단한 응답)
  let responseText = "챗봇 응답: " + message;
  res.json({ response: responseText });
});

// 📌 파일 업로드 설정 (음식 사진)
const storage = multer.diskStorage({
  destination: "uploads/", // 업로드된 파일이 저장될 폴더
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

  console.log("파일 업로드 성공:", req.file.filename);
  res.json({ message: "파일 업로드 성공!", filename: req.file.filename });
});

// 📌 서버 실행 (포트: 5000)
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중`);
});
