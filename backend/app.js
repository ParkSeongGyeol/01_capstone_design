const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// 라우터 연결
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
