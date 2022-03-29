<template>
  <div class="apilistcom">
    <!-- 切换接口按钮 -->
    <a
      class="btn"
      href=""
      @click.prevent.stop="show = !show"
    >切换接口</a>

    <!-- 渲染的接口列表 -->
    <transition name="el-zoom-in-top">
      <div
        class="list flex"
        v-show="show"
      >
        <a
          href=""
          v-for="(item,i) in apilist"
          :key="i"
          :class="i==active?'active':''"
          @click.prevent="changeApi(item.url,i)"
        >{{ item.name }}</a>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number
    },
    changeApi: {
      type: Function
    }
  },
  data() {
    return {
      show: false,
      apilist: [
        { "name": "OK解析", "url": "https://okjx.cc/?url=" },
        { "name": "OK解析2", "url": "https://m3u8.okjx.cc:3389/o1kjx.php?url=" },
        { "name": "综合/B站", "url": "https://vip.parwix.com:4433/player/?url=" },
        { "name": "纯净/B站", "url": "https://z1.m1907.cn/?jx=" },
        { "name": "夜幕解析", "url": "https://www.yemu.xyz/?url=" },
        { "name": "人人解析", "url": "https://jx.blbo.cc:4433/?url=" },
        { "name": "老板解析", "url": "https://vip.laobandq.com/jiexi.php?url=" },
        { "name": "盖世解析", "url": "https://www.gai4.com/?url=" },
        { "name": "60解析", "url": "http://60jx.com/?url=" },
        { "name": "Vip解析", "url": "https://vipjx.cc/?url=" },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.apilistcom {
  position: relative;
}
.btn {
  border: 0;
  color: white;
  background-color: DodgerBlue;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
}
.list {
  a {
    background-color: #fff;
    border-radius: 5px;
    color: #555;
    margin: 3px 2px;
    border: #555 1px solid;
    padding: 5px 10px;
    line-height: 1.5rem;
  }
  a:hover {
    box-shadow: 0 0 8px rgb(100, 158, 238);
    transition: all 0.3s;
  }
  .active {
    color: white;
    background-image: linear-gradient(110deg, #56ccf2, #2f80ed);
  }

  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  width: 30rem;
  position: absolute;
  top: 50px;
  right: -10px;
  z-index: 999;
}
@media (max-width: 600px) {
  .list {
    width: 280px;
    font-size: 14px;
  }
  .btn {
    font-size: 14px;
    padding: 7px 15px;
    border-radius: 50px;
  }
}
</style>