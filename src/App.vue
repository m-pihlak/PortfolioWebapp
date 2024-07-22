<template>
  <div id="app">
    <AppHeader></AppHeader>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import '@/assets/css/main.css'
import AppHeader from './components/Header/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
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
