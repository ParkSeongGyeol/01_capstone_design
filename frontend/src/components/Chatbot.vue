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
import axios from 'axios'

const message = ref('')
const chatHistory = ref([])

const sendMessage = async () => {
  if (!message.value) return
  chatHistory.value.push('나: ' + message.value)

  try {
    const response = await axios.post('http://localhost:5000/api/chatbot', {
      message: message.value,
    })
    chatHistory.value.push('챗봇: ' + response.data.response)
  } catch (error) {
    console.error('API 호출 오류:', error)
  }

  message.value = ''
}
</script>
