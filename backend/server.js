const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

// 기본 API 엔드포인트
app.get("/", (req, res) => {
  res.send("Express 서버 실행 중...");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중`);
});

app.post("/api/chatbot", (req, res) => {
  const { message } = req.body;
  console.log("사용자 입력:", message);

  // 간단한 응답 로직 (AI 연동 없이 기본 응답)
  let responseText = "챗봇 응답: " + message;

  res.json({ response: responseText });
});

const multer = require("multer");

// 파일 업로드 설정 (업로드 폴더: uploads/)
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// 음식 사진 업로드 API
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "파일이 업로드되지 않았습니다." });
  }

  console.log("파일 업로드:", req.file.filename);
  res.json({ message: "파일 업로드 성공!", filename: req.file.filename });
});
