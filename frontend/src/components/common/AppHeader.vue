<template>
  <div class="app-header">
    <button v-if="showBackButton" class="back-button" @click="goBack">
      <img src="@/assets/images/back-icon.svg" alt="뒤로가기" />
    </button>
    <h1 class="header-title">{{ title }}</h1>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  showBackButton: {
    type: Boolean,
    default: false
  }
});

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #3CB489;
  color: white;
}

.back-button {
  background: none;
  border: none;
  padding: 8px;
  margin-right: 8px;
  cursor: pointer;
}

.back-button img {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
}

.header-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}
</style>
