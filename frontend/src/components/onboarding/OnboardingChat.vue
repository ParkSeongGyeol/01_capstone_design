<template>
  <div class="onboarding-slide chat-slide">
    <h1 class="title">자연스러운 대화로 건강관리</h1>
    
    <div class="illustration-container">
      <img src="@/assets/images/chat-illustration.svg" alt="챗봇 일러스트레이션" class="chat-illustration" />
    </div>
    
    <p class="description">
      기존의 헬스케어 앱과 달리, 자연스러운 대화 맥락에 맞는 맞춤형 피드백을 제공해요.
    </p>
  </div>
</template>

<script setup>
// 컴포넌트 로직
</script>

<style scoped>
.onboarding-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #3CB489;
  line-height: 1.3;
}

.illustration-container {
  width: 100%;
  max-width: 300px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.chat-illustration {
  width: 100%;
  height: auto;
}

.description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.5;
}
</style>
