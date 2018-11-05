<template>
  <div @click.self="close" class="add-wrapper">
    <div class="add-content">
      <p>Add new ToDo item</p>
      <input v-model="item.header" type="text" placeholder="Add header">
      <textarea v-model="item.content" name="" id="" cols="30" rows="12" placeholder="Add description"></textarea>
      <div class="add-content-buttons">
        <button @click="close">Cancel</button>
        <button @click="sendData" >Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      item: {
        header: '',
        content: '',
      }
    }
  },
  methods: {
    close() {
      this.$store.dispatch('UiState/closeAdd');
    },
    async sendData() {
      let data = this.item;
      try {
        let res = await axios.post('/', data);
        this.$store.dispatch('Items/clear');
        this.$store.dispatch('Items/loadAllItems');
        this.$store.dispatch('UiState/closeAdd');
        console.log(res);        
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

.add-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: $dark-bcg;
  z-index: 100;
  .add-content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 70%;
    text-align: center;
    background-color: #fff;
    border-radius: 20px;
    p {
      padding-top: 25px;
      font-size: $text-size;
    }
    input {
      width: 80%;
      outline: none;
      padding: 5px;
      margin: 12px 0;
      font-size: $text-size-small;
      border: 1px solid $main-color;
      border-radius: 5px;
    }
    textarea {
      @extend input;
      resize: none;
    }
    &-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 60px;
      bottom: 0;
      left: 0;
      button {
        width: 150px;
        height: 35px;
        background-color: transparent;
        border: 1px solid $main-color;
        border-radius: 5px;
        transition: .3s;
        cursor: pointer;
        &:hover {
          background-color: $main-color;
          color: #fff;
        }
      }
    }
  }
}
</style>
