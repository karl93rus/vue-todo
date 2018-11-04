<template>
  <div class="main">
    <sign-up v-if="signUpVisibility"></sign-up>
    <div class="main-content">
      <content-nav></content-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SignUp from '@/components/SignUp.vue';
import ContentNav from '@/components/ContentNav.vue';

export default {
  components: {
    SignUp,
    ContentNav,
  },
  computed: {
    signUpVisibility() {
      return this.$store.getters['UiState/getSignUpVisibility'];
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

.main {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/main-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  &-content {
    position: relative;
    width: 70%;
    height: 75%;
    top: 125px;
    margin: auto;
    background-color: $main-bcg;
    border-radius: 25px;
    box-shadow: 0 0 25px rgb(41, 10, 0);
  }
}
</style>
