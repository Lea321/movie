<template>
  <div class="inputcom flex">
    <!-- 输入框 -->
    <input
      ref="inputRef"
      type="text"
      v-model="inurl"
      placeholder="请输入视频链接"
      @input="updateUrl"
    >
    <!-- 播放按钮 -->
    <a
      href=""
      class="flex"
      @click.prevent="play"
    >播 放</a>
  </div>
</template>

<script>
export default {
  props: {
    // 与app.vue同步数据
    inurl: {
      type: String
    },
    // 从app.vue传过来的播放视频函数
    play: {
      type: Function
    }
  },
  emits: ['update:inurl'],
  methods: {
    // 每次输入更新url函数
    updateUrl() {
      this.$emit('update:inurl', this.inurl)
    },
    getValue() {
      return this.$refs.inputRef.value
    }
  },
}
</script>

<style lang="less" scoped>
.inputcom {
  overflow: hidden;
  width: 95%;
  margin: 1.5rem auto 0;
  height: 40px;
  border-radius: 50px;
  padding-left: 20px;
  border: 1px solid #5e5e5e;
  background-color: #fff;
  input {
    border: 0;
    height: 100%;
    outline: none;
    flex: 5;
  }
  a {
    border-radius: 0 50px 50px 0;
    border-left: #5e5e5e 1px solid;
    color: #ffffff;
    text-decoration: none;
    background-image: linear-gradient(90deg, rgb(124, 190, 255), DodgerBlue);
    height: 100%;
    font-size: 1.5rem;
    justify-content: center;
    flex: 1;
  }
}
@media (max-width: 600px) {
  .inputcom input {
    flex: 6;
  }
  .inputcom a {
    flex: 2;
    font-size: 1.1rem;
  }
}
</style>