<template>
  <div class="main-content-top">
    <ul>
      <li><p>ADD</p></li>
      <li><p>ACTIVE</p></li>
      <li><p>ARCHIVE</p></li>
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
      line-height: 40px;
      margin-right: 25px;
      color: $main-color;
      cursor: pointer;
      p {
        width: 0%;
        border-bottom: 3px solid $main-color;
        height: 32px;
        white-space: nowrap;
        transition: .5s;
        &:hover {
          width: 80%;
        }
      }
    }
  }
}
</style>

