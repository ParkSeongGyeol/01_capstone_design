<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "메시지를 불러오는 중...",
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/message")
      .then((response) => response.json())
      .then((data) => {
        this.message = data.message;
      })
      .catch((error) => {
        console.error("API 호출 에러:", error);
        this.message = "메시지를 불러오는데 실패했습니다.";
      });
  },
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
</style>
