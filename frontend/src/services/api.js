// src/services/api.js
import axios from 'axios';

// API 클라이언트 생성
const apiClient = axios.create({
  baseURL: 'https://01capstonedesign-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
