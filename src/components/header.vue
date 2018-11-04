<template>
  <div class="main-header">
    <p>ToDo App</p>
    <ul>
      <li @click="showSignUp"><p>Sign Up</p></li>
      <li><p>Sign In</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    showSignUp() {
      this.$store.dispatch('UiState/showSignUp');
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

.main-header {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  height: 50px;
  background-color: $main-color;
  z-index: 50;
  color: $text-color-light;
  p {
    height: 50px;
    margin: 0;
    // margin-left: 35px;
    line-height: 50px;
    padding: 0;
    font-size: $heading-big;
    grid-column: 2 / 3;
  }
  ul {
    position: absolute;
    right: 0px;
    margin: 0;
    padding: 0;
    list-style: none;
    grid-column: 3 / 4;
    li {
      display: inline-block;
      height: inherit;
      padding: 0;
      margin-left: 15px;
      line-height: 50px;
      cursor: pointer;
      p {
        margin: 0;
        padding: 0;
        height: 40px;
        border-bottom: 3px solid $main-bcg;
        white-space: nowrap;
        width: 0%;
        font-size: $text-size * .8;
        transition: .5s;
        &:hover {
          width: 80%;
        }
      }
    }
  }
}

</style>
