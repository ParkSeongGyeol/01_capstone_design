<template>
  <div>
    <input v-model="message" placeholder="메시지를 입력하세요" @keyup.enter="sendMessage" />
    <button @click="sendMessage">보내기</button>
    <ul>
      <li v-for="msg in chatHistory" :key="msg">{{ msg }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('') // 사용자가 입력한 메시지
const chatHistory = ref([]) // 대화 기록을 저장하는 배열

const sendMessage = () => {
  if (!message.value) return // 메시지가 비어 있으면 실행 안 함
  chatHistory.value.push('나: ' + message.value) // 사용자의 메시지를 기록
  chatHistory.value.push('챗봇: ' + message.value + '에 대한 답변입니다.') // 간단한 챗봇 응답 추가
  message.value = '' // 입력 필드 초기화
}
</script>
