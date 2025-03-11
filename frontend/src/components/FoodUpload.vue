<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadImage">업로드</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedFile = ref(null) // 사용자가 선택한 파일 저장

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0] // 선택한 파일 저장
}

const uploadImage = () => {
  if (!selectedFile.value) {
    alert('파일을 선택하세요!') // 파일이 없으면 경고창 표시
    return
  }
  alert(selectedFile.value.name + ' 파일이 업로드되었습니다.') // 파일 업로드 알림
}
</script>
