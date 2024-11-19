const express = require('express');
const app = express();
const port = 3000;

// JSON 파싱을 위한 미들웨어 설정
app.use(express.json());

// 간단한 API 엔드포인트 설정
app.get('/api/message', (req, res) => {
  res.json({ message: '안녕하세요! 헬스케어 챗봇입니다.' });
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
