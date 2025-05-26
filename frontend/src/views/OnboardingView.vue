<template>
  <div class="onboarding-view">
    <!-- 슬라이드 컨테이너 -->
    <div class="slides-container" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
      <transition-group name="slide">
        <OnboardingWelcome v-if="currentSlide === 0" key="welcome" />
        <OnboardingChat v-if="currentSlide === 1" key="chat" />
        <OnboardingPersonal v-if="currentSlide === 2" key="personal" />
        <OnboardingFood v-if="currentSlide === 3" key="food" />
      </transition-group>
    </div>
    
    <!-- 페이지 인디케이터 -->
    <div class="page-indicator">
      <div 
        v-for="i in 4" 
        :key="i" 
        :class="['indicator-dot', { active: currentSlide === i - 1 }]"
        @click="currentSlide = i - 1"
      ></div>
    </div>
    
    <!-- 건너뛰기/시작하기 버튼 -->
    <button 
      class="action-button"
      @click="finishOnboarding"
    >
      {{ currentSlide === 3 ? '시작하기' : '건너뛰기' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import OnboardingWelcome from '../components/onboarding/OnboardingWelcome.vue';
import OnboardingChat from '../components/onboarding/OnboardingChat.vue';
import OnboardingPersonal from '../components/onboarding/OnboardingPersonal.vue';
import OnboardingFood from '../components/onboarding/OnboardingFood.vue';

const router = useRouter();
const currentSlide = ref(0);
const touchStartX = ref(0);

// 터치 이벤트 핸들러
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX.value - touchEndX;
  
  // 오른쪽에서 왼쪽으로 스와이프 (다음 슬라이드)
  if (diff > 50 && currentSlide.value < 3) {
    currentSlide.value++;
  }
  // 왼쪽에서 오른쪽으로 스와이프 (이전 슬라이드)
  else if (diff < -50 && currentSlide.value > 0) {
    currentSlide.value--;
  }
};

// 온보딩 완료 처리
const finishOnboarding = () => {
  localStorage.setItem('onboardingCompleted', 'true');
  router.push('/home');
};
</script>

<style scoped>
.onboarding-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
}

.slides-container {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.page-indicator {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator-dot.active {
  background-color: #3CB489;
}

.action-button {
  background-color: #3CB489;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 15px 0;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #2a9d74;
}
</style>
