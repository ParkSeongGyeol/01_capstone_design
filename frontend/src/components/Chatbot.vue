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

const message = ref('')
const chatHistory = ref([])

const sendMessage = () => {
  if (!message.value) return
  chatHistory.value.push('나: ' + message.value)
  chatHistory.value.push('챗봇: ' + message.value + '에 대한 답변입니다.')
  message.value = ''
}
</script>
