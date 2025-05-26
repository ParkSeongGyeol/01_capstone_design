<template>
  <div class="app-footer">
    <div class="tab-container">
      <router-link to="/home" class="tab-item" :class="{ active: activeTab === 'home' }">
        <img :src="homeIcon" alt="홈" class="tab-icon" />
        <span class="tab-label">홈</span>
      </router-link>

      <router-link to="/chatbot" class="tab-item" :class="{ active: activeTab === 'chatbot' }">
        <img :src="chatIcon" alt="챗봇" class="tab-icon" />
        <span class="tab-label">챗봇</span>
      </router-link>

      <router-link to="/food" class="tab-item" :class="{ active: activeTab === 'food' }">
        <img :src="foodIcon" alt="식단 기록" class="tab-icon" />
        <span class="tab-label">식단 기록</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import homeIcon from '@/assets/images/home-icon.svg'
import chatIcon from '@/assets/images/chat-icon.svg'
import foodIcon from '@/assets/images/food-icon.svg'

defineProps({
  activeTab: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.app-footer {
  background-color: #ffffff;
  border-top: 1px solid #eee;
  padding: 8px 0;
}

.tab-container {
  display: flex;
  justify-content: space-around;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  text-decoration: none;
  color: #888;
  transition: color 0.3s ease;
}

.tab-item.active {
  color: #3cb489;
}

.tab-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.tab-item.active .tab-icon {
  filter: invert(59%) sepia(83%) saturate(409%) hue-rotate(116deg) brightness(92%) contrast(88%);
}

.tab-label {
  font-size: 0.8rem;
}
</style>
