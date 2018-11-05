<template>
  <div class="main">
    <sign-up v-if="signUpVisibility"></sign-up>
    <div class="main-content">
      <content-nav></content-nav>
      <active :data="allItems"></active>
    </div>
  </div>
</template>

<script>
import SignUp from '@/components/SignUp.vue';
import ContentNav from '@/components/ContentNav.vue';
import Active from './Active.vue';
import axios from 'axios';

export default {
  components: {
    SignUp,
    ContentNav,
    Active,
  },
  async created() {
    await this.loadItems();
    console.log('Items getter on created()', this.allItems);
  },
  computed: {
    allItems() {
      return this.$store.getters['Items/getAllItems'];
    },
    signUpVisibility() {
      return this.$store.getters['UiState/getSignUpVisibility'];
    },
  },
  methods: {
    loadItems() {
      this.$store.dispatch('Items/loadAllItems');
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
