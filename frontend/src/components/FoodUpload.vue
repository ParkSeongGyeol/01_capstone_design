<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadImage">업로드</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedFile = ref(null)

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0]
}

const uploadImage = () => {
  if (!selectedFile.value) {
    alert('파일을 선택하세요!')
    return
  }
  alert(selectedFile.value.name + ' 파일이 업로드되었습니다.')
}
</script>
