// src/services/huggingface.js
import axios from 'axios';

// Hugging Face API 클라이언트 생성
const huggingfaceClient = axios.create({
  baseURL: 'https://api-inference.huggingface.co/models',
  headers: {
    'Content-Type': 'application/json',
    // 실제 구현에서는 환경 변수에서 API 키를 가져옴
    'Authorization': 'Bearer ${process.env.VUE_APP_HUGGINGFACE_API_KEY}'
  }
});

// 텍스트 기반 챗봇 메시지 전송
export const sendChatbotMessage = async (message) => {
  try {
    // Google의 Gemma 3 모델 사용
    const response = await huggingfaceClient.post('/google/gemma-3-27b-it', {
      inputs: message,
      parameters: {
        max_new_tokens: 250,
        temperature: 0.7,
        top_p: 0.9,
        do_sample: true
      }
    });
    return response.data;
  } catch (error) {
    console.error('Hugging Face API 오류:', error);
    throw error;
  }
};

// 이미지 분석 (식단 인식)
export const analyzeFoodImage = async (imageData) => {
  try {
    // YOLOv8 기반 음식 인식 모델 사용
    const response = await huggingfaceClient.post('/keremberke/yolov8m-food', imageData, {
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Hugging Face 이미지 분석 API 오류:', error);
    throw error;
  }
};

export default {
  sendChatbotMessage,
  analyzeFoodImage
};
