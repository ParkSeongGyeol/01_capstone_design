<template>
  <div class="chat-input-container">
    <div class="input-wrapper">
      <!-- 메시지 입력 필드 -->
      <input 
        type="text" 
        v-model="inputMessage" 
        placeholder="메시지를 입력하세요..." 
        @keyup.enter="sendMessage"
        :disabled="loading"
        class="message-input"
      />
      
      <!-- 이미지 업로드 버튼 -->
      <button 
        class="upload-button"
        @click="$emit('upload')"
        :disabled="loading"
      >
        <img src="@/assets/images/camera-icon.svg" alt="이미지 업로드" class="camera-icon" />
      </button>
      
      <!-- 전송 버튼 -->
      <button 
        class="send-button"
        @click="sendMessage"
        :disabled="loading || !inputMessage.trim()"
      >
        <img src="@/assets/images/send-icon.svg" alt="전송" class="send-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue', 'send', 'upload']);

// 양방향 바인딩 구현
const inputMessage = ref(props.modelValue);

// 모델 값이 변경될 때 입력 필드 업데이트
watch(() => props.modelValue, (newValue) => {
  inputMessage.value = newValue;
});

// 입력 필드가 변경될 때 모델 값 업데이트
watch(inputMessage, (newValue) => {
  emit('update:modelValue', newValue);
});

// 메시지 전송 함수
const sendMessage = () => {
  if (inputMessage.value.trim() && !props.loading) {
    emit('send');
  }
};
</script>

<style scoped>
.chat-input-container {
  padding: 12px 16px;
  background-color: #fff;
  border-top: 1px solid #eee;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 8px 16px;
}

.message-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 8px 0;
  font-size: 1rem;
  outline: none;
}

.upload-button,
.send-button {
  background: none;
  border: none;
  padding: 8px;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-button:disabled,
.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.camera-icon,
.send-icon {
  width: 24px;
  height: 24px;
}

.send-icon {
  color: #3CB489;
}
</style>
