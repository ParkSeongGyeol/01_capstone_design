<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadImage">업로드</button>
    <p v-if="uploadMessage">{{ uploadMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const selectedFile = ref(null)
const uploadMessage = ref('')

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0]
}

const uploadImage = async () => {
  if (!selectedFile.value) {
    alert('파일을 선택하세요!')
    return
  }

  const formData = new FormData()
  formData.append('file', selectedFile.value)

  try {
    const response = await axios.post(
      'https://signcare-ags6f7jgl-john-parks-projects-b98b1c70.vercel.app',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    )
    uploadMessage.value = response.data.message
    alert(response.data.message)
  } catch (error) {
    console.error('업로드 오류:', error)
  }
}
</script>
