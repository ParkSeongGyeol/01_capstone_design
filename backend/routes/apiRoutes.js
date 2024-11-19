const express = require('express');
const router = express.Router();

// 기본 경로
router.get('/', (req, res) => {
    res.send('API is working!');
});

module.exports = router;
