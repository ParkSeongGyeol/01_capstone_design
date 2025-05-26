<template>
  <div class="home-view">
    <!-- 헤더 -->
    <div class="home-header">
      <h1>SignCare</h1>
    </div>

    <!-- 메인 콘텐츠 -->
    <div class="home-content">
      <div class="card">
        <h2>오늘의 건강 상태</h2>
        <p>식단 기록: {{ todayStats.foodRecorded ? '완료' : '미완료' }}</p>
        <p>혈당 측정: {{ todayStats.glucoseRecorded ? '완료' : '미완료' }}</p>
        <p>운동 기록: {{ todayStats.exerciseRecorded ? '완료' : '미완료' }}</p>
      </div>

      <div class="card">
        <h2>빠른 액세스</h2>
        <div class="quick-actions">
          <button @click="router.push('/chatbot')" class="action-button">
            <img :src="chatIcon" alt="챗봇" class="action-icon" />
            챗봇 대화
          </button>
          <button @click="router.push('/food')" class="action-button">
            <img :src="foodIcon" alt="식단" class="action-icon" />
            식단 기록
          </button>
        </div>
      </div>
    </div>

    <!-- 푸터 (탭 네비게이션) -->
    <AppFooter :activeTab="'home'" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppFooter from '../components/common/AppFooter.vue'
import chatIcon from '@/assets/images/chat-icon.svg'
import foodIcon from '@/assets/images/food-icon.svg'

const router = useRouter()
const todayStats = ref({
  foodRecorded: false,
  glucoseRecorded: false,
  exerciseRecorded: false,
})

// 컴포넌트 마운트 시 온보딩 체크
onMounted(() => {
  const onboardingCompleted = localStorage.getItem('onboardingCompleted')
  if (!onboardingCompleted) {
    router.push('/onboarding')
  }

  // 실제 구현에서는 API에서 오늘의 상태 데이터 로드
  // 프로토타입에서는 더미 데이터 사용
  todayStats.value = {
    foodRecorded: true,
    glucoseRecorded: false,
    exerciseRecorded: true,
  }
})
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.home-header {
  background-color: #3cb489;
  color: white;
  padding: 16px;
  text-align: center;
}

.home-header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.home-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.card {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
}

.card p {
  margin: 8px 0;
  color: #666;
}

.quick-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-button {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #e8e8e8;
}

.action-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}
</style>
