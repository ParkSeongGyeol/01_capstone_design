<template>
  <div class="onboarding-slide personal-slide">
    <h1 class="title">나에게 꼭 맞는 맞춤형 관리</h1>

    <div class="illustration-container">
      <img
        :src="personalIllustration"
        alt="맞춤형 관리 일러스트레이션"
        class="personal-illustration"
      />
    </div>

    <p class="description">
      연령, 체중, 키 등과 같은 데이터를 바탕으로 개인화된 헬스케어를 제공합니다. 이를 통해 건강 개선
      방향을 설정하고 피드백을 제공합니다.
    </p>
  </div>
</template>

<script setup>
import personalIllustration from '@/assets/images/personal-illustration.svg'
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
  color: #3cb489;
  line-height: 1.3;
}

.illustration-container {
  width: 100%;
  max-width: 300px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.personal-illustration {
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
