<template>
  <div class="onboarding-slide food-slide">
    <h1 class="title">건강한 식단 관리</h1>

    <div class="illustration-container">
      <img :src="foodIllustration" alt="식단 관리 일러스트레이션" class="food-illustration" />
    </div>

    <p class="description">
      AI가 업로드한 식사 사진을 자동으로 분석해 영양 정보를 알려주고, 당뇨 관리에 적합한 식단인지
      판단해 드립니다.
    </p>
  </div>
</template>

<script setup>
import foodIllustration from '@/assets/images/food-illustration.svg'
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

.food-illustration {
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
