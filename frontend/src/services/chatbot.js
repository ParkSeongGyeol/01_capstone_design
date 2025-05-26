// src/services/chatbot.js
import apiClient from './api';

// 챗봇 메시지 전송
export const sendChatMessage = (message) => {
  return apiClient.post('/api/chatbot', {
    message,
    userId: 'user-123' // 실제 구현에서는 사용자 식별자 추가
  });
};

// 식단 이미지 업로드
export const uploadFoodImage = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  return apiClient.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
