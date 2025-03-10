<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>

    <div>
      <nav>
        <router-link to="/">홈</router-link> | <router-link to="/chatbot">챗봇</router-link> |
        <router-link to="/food">음식 업로드</router-link>
      </nav>
      <router-view />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
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

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
