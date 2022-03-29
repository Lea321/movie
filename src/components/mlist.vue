<template>
  <div class="listcom">

    <p>站点直达</p>

    <div class="flex">
      <a
        v-for="(item,i) in imglist"
        :key="i"
        :href="item.url"
      >
        <img
          :src="item.img"
          alt=""
        ></a>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      imglist: [
        { img: 'https://www.lea.ink/img/mlogo/bilibili.png', url: "https://www.bilibili.com/" },
        { img: 'https://www.lea.ink/img/mlogo/qqlogo.png', url: "https://v.qq.com/" },
        { img: 'https://www.lea.ink/img/mlogo/iqiyilogo.png', url: "https://www.iqiyi.com/" },
        { img: 'https://www.lea.ink/img/mlogo/youkulogo.png', url: "https://www.youku.com/" },
        { img: 'https://www.lea.ink/img/mlogo/hunantvlogo.png', url: "https://www.mgtv.com/" },
        { img: 'https://www.lea.ink/img/mlogo/letvlogo.png', url: "https://www.le.com/" },
        { img: 'https://www.lea.ink/img/mlogo/tudoulogo.png', url: "https://www.tudou.com/" },
        { img: 'https://www.lea.ink/img/mlogo/baofeng.png', url: "http://www.baofeng.com/" },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.listcom {
  margin-top: 1.5rem;
  p {
    font-size: 1.5rem;
  }
  img {
    margin-bottom: 5px;
    width: 9vw;
    min-width: 150px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 10px;
    height: 100%;
  }

  img:hover {
    box-shadow: 0 0 8px DodgerBlue;
    transition: all 0.3s;
  }
  div {
    margin-top: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>