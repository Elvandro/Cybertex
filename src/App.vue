<template>
  <router-view></router-view>
  <LoginPage/>
</template>

<script>
import LoginPage from './components/LoginPage.vue'


export default {
  name: 'App',
  components: {
    LoginPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
