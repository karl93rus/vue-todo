<template>
  <div @click.self="close" class="sup-wrapper">
    <div class="sup-wrapper-content">
      <div class="sup-header">
        <p>Sign up to use all awesome features</p>
      </div>
      <div class="sup-enter-data">
        <p>Enter e-mail:</p>
        <input type="text">
        <p>Enter password:</p>
        <input type="password">
        <p>Confirm password:</p>
        <input type="password">
      </div>
      <div class="sup-buttons">
        <button @click="close">Cancel</button>
        <button>Regiser</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    visibilityStatus() {
      return this.$store.getters['UiState/getSignUpVisibility'];
    }
  },
  methods: {
    close() {
      this.$store.dispatch('UiState/closeSignUp');
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

.sup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  z-index: 100;
  &-content {
    position: relative;
    width: 50%;
    height: 55%;
    min-height: 355px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $dark-bcg;
    border: 1px solid $main-color;
    border-radius: 15px;
    box-shadow: 0 0 12px $main-color * .8;
    .sup-header {
      font-size: $text-size;
      color: $text-color-light;
      text-align: center;
      p {
        margin: 10px;
        padding: 0;
      }
    }
    .sup-enter-data {
      text-align: center;
      font-size: $text-size-small;
      color: $text-color-light;
      p {
        margin: 0;
        margin-top: 15px;
      }
      input {
        height: 28px;
        padding: 3px;
        border: none;
        border-bottom: 1px solid $main-color;
        width: 50%;
        font-size: $text-size-small;
        color: $main-color;
        outline: none;
        background-color: transparent;
      }
    }
    .sup-buttons {
      text-align: center;
      button {
        height: 35px;
        width: 25%;
        margin: 25px;
        background-color: transparent;
        border: 1px solid $main-color;
        border-radius: 3px;
        color: $text-color-light;
        cursor: pointer;
        transition: .3s;
        outline: none;
        &:hover {
          background-color: $main-color;
          color: $text-color-dark;
        }
      }
    }
  }
}
</style>
