<template>
  <div class="food-view">
    <!-- 헤더 -->
    <div class="food-header">
      <h1>식단 기록</h1>
    </div>
    
    <!-- 업로드 버튼 -->
    <div class="upload-container">
      <p>오늘의 식단을 업로드 해주세요!</p>
      <button class="upload-button" @click="navigateToUpload">식단 업로드</button>
    </div>
    
    <!-- 식단 캘린더 -->
    <div class="calendar-container">
      <div v-for="(item, index) in foodData" :key="index" class="date-card">
        <div class="date-header">
          <h2>{{ item.date }}</h2>
        </div>
        <div class="meal-list">
          <div class="meal-item" :class="{ recorded: item.meals.breakfast.recorded }">
            <span class="meal-name">아침</span>
            <span class="meal-status">{{ item.meals.breakfast.recorded ? '기록됨' : '미기록' }}</span>
          </div>
          <div class="meal-item" :class="{ recorded: item.meals.lunch.recorded }">
            <span class="meal-name">점심</span>
            <span class="meal-status">{{ item.meals.lunch.recorded ? '기록됨' : '미기록' }}</span>
          </div>
          <div class="meal-item" :class="{ recorded: item.meals.dinner.recorded }">
            <span class="meal-name">저녁</span>
            <span class="meal-status">{{ item.meals.dinner.recorded ? '기록됨' : '미기록' }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 푸터 (탭 네비게이션) -->
    <AppFooter :activeTab="'food'" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AppFooter from '../components/common/AppFooter.vue';

const router = useRouter();
const foodData = ref([
  {
    date: '2025.03.29',
    meals: {
      breakfast: { recorded: true },
      lunch: { recorded: true },
      dinner: { recorded: true }
    }
  },
  {
    date: '2025.03.28',
    meals: {
      breakfast: { recorded: true },
      lunch: { recorded: true },
      dinner: { recorded: true }
    }
  },
  {
    date: '2025.03.27',
    meals: {
      breakfast: { recorded: true },
      lunch: { recorded: false },
      dinner: { recorded: true }
    }
  }
]);

// 식단 업로드 페이지로 이동
const navigateToUpload = () => {
  router.push('/chatbot'); // 실제로는 업로드 페이지로 이동하지만, 프로토타입에서는 챗봇으로 이동
};

// 컴포넌트 마운트 시 데이터 로드
onMounted(() => {
  // 실제 구현에서는 API에서 식단 데이터 로드
});
</script>

<style scoped>
.food-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.food-header {
  background-color: #3CB489;
  color: white;
  padding: 16px;
  text-align: center;
}

.food-header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.upload-container {
  padding: 20px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 12px;
  margin: 16px;
}

.upload-button {
  background-color: #3CB489;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 8px;
}

.upload-button:hover {
  background-color: #2a9d74;
}

.calendar-container {
  flex: 1;
  overflow-y: auto;
  padding: 0 16px 16px;
}

.date-card {
  background-color: white;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.date-header {
  background-color: #f5f5f5;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

.date-header h2 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.meal-list {
  padding: 8px 0;
}

.meal-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #f5f5f5;
}

.meal-item:last-child {
  border-bottom: none;
}

.meal-name {
  font-weight: 500;
  color: #333;
}

.meal-status {
  color: #888;
}

.meal-item.recorded .meal-status {
  color: #3CB489;
}
</style>
