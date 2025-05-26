// src/utils/date.js
// 날짜 포맷팅 함수
export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  
  return `${year}.${month}.${day}`;
};

// 요일 반환 함수
export const getDayOfWeek = (date) => {
  const d = new Date(date);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return days[d.getDay()];
};

// 시간 포맷팅 함수
export const formatTime = (date) => {
  const d = new Date(date);
  const hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  
  return `${hours < 12 ? '오전' : '오후'} ${hours % 12 || 12}:${minutes}`;
};
