<template>
  <div class="home">
    <h1>SignCare</h1>
    <p>당뇨 환자를 위한 헬스케어 챗봇</p>
    <router-link to="/chatbot">
      <button>챗봇 시작하기</button>
    </router-link>
  </div>
</template>

<style>
.home {
  text-align: center;
  margin-top: 50px;
}
button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
