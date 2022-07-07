<template>
  <!-- hide：在div内点击会隐藏其他组件 -->
  <div @click="hide">
    <!-- 主体 -->
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <!-- starplay:收藏点击链接自动播放 -->
        <Mheader ref="headerRef" @star-play="starplay"></Mheader>

      </el-header>

      <!-- 输入组件 -->
      <!-- inurl:输入的链接，play：播放函数 -->
      <Minput ref="inputREF" v-model:inurl="inurl" :play="play"></Minput>

      <!-- 播放器组件 -->
      <Mplay :finalurl="finalurl">
        <!-- api切换组件 -->
        <Apilist ref="ApilistRef" :changeApi="changeApi" :active="active"></Apilist>
      </Mplay>
      <el-alert title="本网站所有接口均来源于网络，仅供学习交流，如有侵权请联系站长进行删除！" type="warning" show-icon />
      <!-- 站点直达组件 -->
      <Mlist></Mlist>
      <Mfooter></Mfooter>
    </el-container>

  </div>
</template>

<script>
// 导入模块
import Mheader from "@/components/mheader.vue";
import Mfooter from "@/components/footer.vue";
import Minput from "@/components/minput.vue";
import Mplay from "@/components/mplay.vue";
import Mlist from "@/components/mlist.vue";
import Apilist from "@/components/apilist.vue";


export default {
  data() {
    return {
      // 输入的链接
      inurl: '',
      // 当前api接口顺序
      active: 0,
      // 当前api地址
      apiurl: '',
      // 最终嵌套的iframe的链接
      finalurl: '',
      flag: false
    }
  },
  components: {
    Mheader,
    Minput,
    Mplay,
    Mlist,
    Apilist,
    Mfooter
  },
  methods: {
    // 收藏点击播放视频函数
    starplay(val) {
      this.inurl = val;
      this.$nextTick(this.play());
    },
    // 播放视频函数
    play() {
      let val = this.$refs.inputREF.getValue()
      if (this.inurl) {
        this.finalurl = this.apiurl + this.inurl
      } else if (val && this.inurl == '') {
        this.finalurl = this.apiurl + val
      } else {
        this.$message({
          type: 'error',
          message: '视频连接不能为空！！',
          'show-close': true,
          duration: 1000
        });
      }
    },
    // 切换api函数
    changeApi(newApi, i) {
      this.active = i;
      this.apiurl = newApi;
      if (this.flag) {
        this.$message({
          type: 'success',
          message: '接口切换成功',
          'show-close': true,
          duration: 1000
        });
      }
      this.flag = true
      // 切换后如果有链接的话，直接播放
      if (this.inurl) {
        this.finalurl = this.apiurl + this.inurl
      }
    },
    // 隐藏组件函数
    hide() {
      this.$refs.ApilistRef.show = false
      this.$refs.headerRef.shows.forEach((e, i) => {
        this.$refs.headerRef.shows[i] = false
      });
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.flex {
  display: flex;
  align-items: center;
}

.el-container {
  min-width: 300px;
  width: 60%;
  margin: auto;
  padding: 2rem 0;

  .el-header {
    padding: 0;
  }
}

.el-alert {
  width: 95%;
  margin: 1rem auto 0;
  border-radius: 100px;
}

@media (max-width: 1300px) {
  .el-container {
    width: 70%;
  }
}

@media (max-width: 1100px) {
  .el-container {
    width: 75%;
  }
}

@media (max-width: 1000px) {
  .el-container {
    width: 80%;
  }
}

@media (max-width: 800px) {
  .el-container {
    width: 90%;
    margin: auto;
  }
}

@media (max-width: 600px) {
  .el-container {
    padding: 10px 0;
    width: 95%;
    margin: auto;
  }

  .el-alert {
    border-radius: 10px;
  }
}
</style>