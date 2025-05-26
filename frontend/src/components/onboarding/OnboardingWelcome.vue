<template>
  <div class="onboarding-slide welcome-slide">
    <h1 class="title">어서오세요!</h1>
    <h2 class="subtitle">SignCare와 함께<br />간편하게 건강해져봐요.</h2>

    <div class="illustration-container">
      <img
        src="/images/welcome-illustration.svg"
        alt="환영 일러스트레이션"
        class="welcome-illustration"
      />
    </div>

    <p class="description">당신의 건강한 하루를 함께 만들어가요!</p>
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
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #3cb489;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.illustration-container {
  width: 100%;
  max-width: 300px;
  margin-bottom: 2rem;
}

.welcome-illustration {
  width: 100%;
  height: auto;
}

.description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}
</style>
