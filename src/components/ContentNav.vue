<template>
  <div class="main-content-top">
    <ul>
      <li>ADD</li>
      <li>ACTIVE</li>
      <li>ARCHIVE</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

.main-content-top {
  margin: auto;
  height: 50px;
  width: 90%;
  border-bottom: 1px solid $main-color;
  ul {
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      height: 50px;
      line-height: 50px;
      margin-right: 25px;
      color: $main-color;
      cursor: pointer;
    }
  }
}
</style>

