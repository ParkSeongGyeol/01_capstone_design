<template>
  <div>
    <input v-model="message" placeholder="메시지를 입력하세요" @keyup.enter="sendMessage" />
    <button @click="sendMessage" :disabled="loading">
      {{ loading ? '전송 중...' : '보내기' }}
    </button>
    <ul>
      <li v-for="msg in chatHistory" :key="msg">{{ msg }}</li>
    </ul>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const message = ref('')
const chatHistory = ref([])
const loading = ref(false)
const errorMessage = ref('')

const sendMessage = async () => {
  if (!message.value) return
  chatHistory.value.push('나: ' + message.value)
  loading.value = true
  errorMessage.value = ''

  try {
    // 백엔드 API 호출
    const response = await axios.post('https://01capstonedesign-production.up.railway.app/', {
      message: message.value,
    })

    chatHistory.value.push('챗봇: ' + response.data.response)
  } catch (error) {
    console.error('API 호출 오류:', error)
    errorMessage.value = '서버 연결 오류 발생!'
    chatHistory.value.push('⚠️ 오류 발생! 서버 상태를 확인하세요.')
  } finally {
    loading.value = false
  }

  message.value = ''
}
</script>

<style>
.error {
  color: red;
  font-weight: bold;
}
</style>
