const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'healthuser',
  password: 'healthpassword',
  database: 'healthcare',
});

// 데이터베이스 연결
db.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 실패:', err);
    return;
  }
  console.log('데이터베이스 연결 성공');
});

// 루트 경로에 대한 처리 추가
app.get('/', (req, res) => {
  res.send('헬스케어 챗봇 서버에 오신 것을 환영합니다!');
});

// 간단한 API 엔드포인트 설정
app.get('/api/message', (req, res) => {
  // 데이터베이스에서 메시지 가져오기
  db.query('SELECT message FROM messages LIMIT 1', (err, result) => {
    if (err) {
      console.error('쿼리 오류', err);
      res.status(500).json({ error: '데이터베이스 오류' });
    } else {
      res.json({ message: result[0]?.message || '메시지가 없습니다.' });
    }
  });
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
