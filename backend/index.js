const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 루트 경로에 대한 처리 추가
app.get('/', (req, res) => {
  res.send('헬스케어 챗봇 서버에 오신 것을 환영합니다!');
});

// 라우터 설정
app.get('/api/message', (req, res) => {
  res.json({ message: '안녕하세요! 헬스케어 챗봇입니다.' });
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
