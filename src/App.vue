<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import router from 'vue-router';
import MainHeader from '@/components/header.vue';

export default {
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
