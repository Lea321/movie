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
        { img: 'http://movie.leonus.cn/img/logos/bilibili.png', url: "https://www.bilibili.com/" },
        { img: 'http://movie.leonus.cn/img/logos/qqlogo.png', url: "https://v.qq.com/" },
        { img: 'http://movie.leonus.cn/img/logos/iqiyilogo.png', url: "https://www.iqiyi.com/" },
        { img: 'http://movie.leonus.cn/img/logos/youkulogo.png', url: "https://www.youku.com/" },
        { img: 'http://movie.leonus.cn/img/logos/hunantvlogo.png', url: "https://www.mgtv.com/" },
        { img: 'http://movie.leonus.cn/img/logos/letvlogo.png', url: "https://www.le.com/" },
        { img: 'http://movie.leonus.cn/img/logos/tudoulogo.png', url: "https://www.tudou.com/" },
        { img: 'http://movie.leonus.cn/img/logos/baofeng.png', url: "http://www.baofeng.com/" },
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