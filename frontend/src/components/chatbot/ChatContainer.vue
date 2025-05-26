<template>
  <div class="chat-container">
    <div class="messages" ref="messagesContainer">
      <!-- 날짜 구분선 -->
      <div v-for="(dateGroup, date) in groupedMessages" :key="date" class="date-group">
        <div class="date-divider">{{ formatDate(date) }}</div>
        
        <!-- 메시지 목록 -->
        <div v-for="(message, index) in dateGroup" :key="index" class="message-wrapper">
          <!-- 사용자 메시지 -->
          <div v-if="message.type === 'user'" class="message user-message">
            <div class="message-content">{{ message.content }}</div>
            <div class="message-time">{{ formatTime(message.time) }}</div>
            
            <!-- 이미지가 있는 경우 -->
            <div v-if="message.hasImage" class="message-image">
              <img :src="message.imageUrl" alt="업로드된 이미지" />
            </div>
          </div>
          
          <!-- 봇 메시지 -->
          <div v-else-if="message.type === 'bot'" class="message bot-message">
            <div class="message-content">{{ message.content }}</div>
            <div class="message-time">{{ formatTime(message.time) }}</div>
          </div>
          
          <!-- 오류 메시지 -->
          <div v-else-if="message.type === 'error'" class="message error-message">
            <div class="message-content">{{ message.content }}</div>
            <div class="message-time">{{ formatTime(message.time) }}</div>
          </div>
        </div>
      </div>
      
      <!-- 로딩 인디케이터 -->
      <div v-if="loading" class="loading-indicator">
        <div class="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { formatDate, formatTime } from '@/utils/date';

const props = defineProps({
  messages: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const messagesContainer = ref(null);

// 날짜별로 메시지 그룹화
const groupedMessages = computed(() => {
  const groups = {};
  
  props.messages.forEach(message => {
    const date = new Date(message.time).toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
  });
  
  return groups;
});

// 메시지가 추가될 때마다 스크롤 아래로 이동
watch(() => props.messages.length, () => {
  scrollToBottom();
});

// 로딩 상태가 변경될 때도 스크롤 아래로 이동
watch(() => props.loading, () => {
  scrollToBottom();
});

// 컴포넌트 마운트 시 스크롤 아래로 이동
onMounted(() => {
  scrollToBottom();
});

// 스크롤을 맨 아래로 이동하는 함수
const scrollToBottom = () => {
  setTimeout(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  }, 100);
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.date-divider {
  text-align: center;
  margin: 16px 0;
  font-size: 0.9rem;
  color: #888;
  position: relative;
}

.date-divider::before,
.date-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30%;
  height: 1px;
  background-color: #ddd;
}

.date-divider::before {
  left: 0;
}

.date-divider::after {
  right: 0;
}

.message-wrapper {
  margin-bottom: 16px;
}

.message {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 16px;
  position: relative;
  word-break: break-word;
}

.user-message {
  background-color: #3CB489;
  color: white;
  margin-left: auto;
  border-bottom-right-radius: 4px;
}

.bot-message {
  background-color: #f1f1f1;
  color: #333;
  margin-right: auto;
  border-bottom-left-radius: 4px;
}

.error-message {
  background-color: #ffebee;
  color: #d32f2f;
  margin-right: auto;
  border-bottom-left-radius: 4px;
}

.message-content {
  font-size: 1rem;
  line-height: 1.4;
}

.message-time {
  font-size: 0.7rem;
  opacity: 0.7;
  text-align: right;
  margin-top: 4px;
}

.message-image {
  margin-top: 8px;
  border-radius: 8px;
  overflow: hidden;
}

.message-image img {
  width: 100%;
  height: auto;
  display: block;
}

.loading-indicator {
  display: flex;
  justify-content: flex-start;
  margin: 8px 0;
}

.typing-indicator {
  background-color: #f1f1f1;
  padding: 8px 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
}

.typing-indicator span {
  height: 8px;
  width: 8px;
  background-color: #888;
  border-radius: 50%;
  display: inline-block;
  margin: 0 2px;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) {
  animation-delay: 0s;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
