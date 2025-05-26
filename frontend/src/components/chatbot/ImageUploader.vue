<template>
  <div class="image-uploader">
    <div class="uploader-overlay" @click="closeUploader"></div>
    <div class="uploader-container">
      <h2 class="uploader-title">식단 이미지 업로드</h2>
      
      <div class="uploader-content">
        <!-- 이미지 미리보기 -->
        <div v-if="previewUrl" class="image-preview">
          <img :src="previewUrl" alt="미리보기" />
          <button class="remove-button" @click="removeImage">
            <span>×</span>
          </button>
        </div>
        
        <!-- 파일 선택 영역 -->
        <div v-else class="file-select-area" @click="triggerFileInput">
          <img src="@/assets/images/upload-icon.svg" alt="업로드" class="upload-icon" />
          <p>이미지를 선택하거나 드래그하세요</p>
        </div>
        
        <!-- 숨겨진 파일 입력 -->
        <input 
          type="file" 
          ref="fileInput" 
          accept="image/*" 
          @change="handleFileChange" 
          class="hidden-file-input"
        />
      </div>
      
      <div class="uploader-actions">
        <button class="cancel-button" @click="closeUploader">취소</button>
        <button 
          class="upload-button" 
          :disabled="!selectedFile" 
          @click="uploadImage"
        >
          업로드
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['close', 'upload']);

const fileInput = ref(null);
const selectedFile = ref(null);
const previewUrl = ref(null);

// 파일 입력 트리거
const triggerFileInput = () => {
  fileInput.value.click();
};

// 파일 변경 처리
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    selectedFile.value = file;
    previewUrl.value = URL.createObjectURL(file);
  }
};

// 이미지 제거
const removeImage = () => {
  selectedFile.value = null;
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
    previewUrl.value = null;
  }
  fileInput.value.value = '';
};

// 업로더 닫기
const closeUploader = () => {
  removeImage();
  emit('close');
};

// 이미지 업로드
const uploadImage = () => {
  if (selectedFile.value) {
    emit('upload', selectedFile.value);
  }
};
</script>

<style scoped>
.image-uploader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.uploader-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.uploader-container {
  position: relative;
  width: 90%;
  max-width: 500px;
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;
}

.uploader-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #3CB489;
}

.uploader-content {
  margin-bottom: 24px;
}

.file-select-area {
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.file-select-area:hover {
  border-color: #3CB489;
}

.upload-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
}

.image-preview {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: auto;
  display: block;
}

.remove-button {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
}

.hidden-file-input {
  display: none;
}

.uploader-actions {
  display: flex;
  justify-content: space-between;
}

.cancel-button,
.upload-button {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
}

.cancel-button {
  background-color: #f1f1f1;
  color: #666;
}

.upload-button {
  background-color: #3CB489;
  color: white;
}

.upload-button:disabled {
  background-color: #a0d8c5;
  cursor: not-allowed;
}
</style>
