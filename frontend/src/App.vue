<template>
  <div>
    <nav>
      <router-link to="/">홈</router-link> | <router-link to="/chatbot">챗봇</router-link> |
      <router-link to="/food">음식 업로드</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>

<style>
nav {
  background: #42b983;
  padding: 10px;
  text-align: center;
}
nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}
</style>
