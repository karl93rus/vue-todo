<template>
  <div class="main">
    <sign-up v-if="signUpVisibility"></sign-up>
    <add-item v-if="addVisibility"></add-item>
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
import AddItem from '@/components/AddItem.vue';
import axios from 'axios';

export default {
  components: {
    SignUp,
    ContentNav,
    Active,
    AddItem,
  },
  async created() {
    await this.loadItems();
  },
  computed: {
    allItems() {
      return this.$store.getters['Items/getAllItems'];
    },
    signUpVisibility() {
      return this.$store.getters['UiState/getSignUpVisibility'];
    },
    addVisibility() {
      return this.$store.getters['UiState/getAddItemVisibility'];
    }
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
