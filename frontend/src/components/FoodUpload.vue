<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadImage">업로드</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const selectedFile = ref(null)

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
    const response = await axios.post('http://localhost:5000/api/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    alert(response.data.message)
  } catch (error) {
    console.error('업로드 오류:', error)
  }
}
</script>
