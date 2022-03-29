<template>

  <div class="playcom">

    <div class="top flex">
      <p>如无法播放请更换接口！</p>
      <slot></slot>
    </div>

    <div class="play flex">
      <div
        class="playnull"
        v-if="finalurl == ''"
      >
        <h4>使用教程（爱奇艺为例）</h4>
        <p>1.打开爱奇艺网站</p>
        <p>2.搜索影视名称</p>
        <p>3.打开需要vip的剧集然后复制网址</p>
        <p>4.回到本站粘贴地址即可播放</p>
      </div>
      <iframe
        v-else
        allowfullscreen
        height="100%"
        width="100%"
        :src="finalurl"
        frameborder="0"
      ></iframe>
    </div>

  </div>

</template>

<script>

export default {
  props: {
    finalurl: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.playcom {
  box-shadow: 0 0 5px rgb(28, 147, 216);
  position: relative;
  margin: 1.5rem auto 0;
  width: 95%;
  min-height: 300px;
  background-color: #eee;
  border-radius: 10px 10px 0 0;
  .top {
    justify-content: space-between;
    width: 100%;
    bottom: 0;
    height: 3rem;
    color: red;
    line-height: 3rem;
    padding: 0 1rem;
  }
  .play {
    height: 600px;
    align-items: flex-start;
    justify-content: center;
    background-image: url(https://cn.bing.com/th?id=OHR.MackenzieRiver_ZH-CN0214805768_1920x1080.jpg);
    background-size: cover;
    background-position: center;
  }
}
.playnull {
  background-color: rgba(255, 255, 255, 0.4);
  padding: 1rem;
  border-radius: 5px;
  margin-top: 10vh;
  font-size: 1.2rem;
  color: rgb(46, 46, 46);
}
@media (max-width: 1450px) {
  .playcom .play {
    height: 500px;
  }
}
@media (max-width: 850px) {
  .playcom .play {
    height: 400px;
  }
}
@media (max-width: 600px) {
  .playcom .play {
    height: 300px;
  }
  .playnull {
    font-size: 1rem;
  }
  .top {
    p {
      margin: 0;
      padding: 0;
      line-height: 1.2rem;
    }
    font-size: 14px;
  }
}
</style>