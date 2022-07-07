<template>
  <div class="header flex">
    <!-- logo -->
    <a href="" class="logo">
      <img src="../assets/logo.png" alt="logo">
    </a>
    <!-- header右边的icon和时间 -->
    <div class="flex">
      <div class="icons flex">
        <!-- 收藏 -->
        <div class="iconbox">
          <!-- 收藏图标 -->
          <span class="iconfont icon-shoucang" @click.stop="show(0)"></span>

          <!-- 收藏box，默认隐藏 -->
          <transition name="el-fade-in-linear">
            <div v-show="shows[0]">
              <Box>
                <!-- box的头部 -->
                <template #header>
                  <div class="boxheader flex">
                    <p class="title">
                      收藏
                    </p>
                    <!-- 添加收藏按钮 -->
                    <a href="" class="add" @click.prevent="dialogVisible = true">+</a>
                  </div>
                </template>
                <!-- box主体 -->
                <template #default>
                  <!-- 空状态 -->
                  <div class="null flex" v-if="starshow">
                    <p>收藏夹为空</p>
                  </div>

                  <!-- 收藏信息 -->
                  <div class="shoucang flex" v-else>
                    <div v-for="item in starlist" :key="item.id" class="son flex">
                      <!-- 点击播放收藏视频 -->
                      <a href="" @click.prevent="starplay(item.url)">{{ item.name }}</a>
                      <!-- 点击删除收藏视频 -->
                      <button class="del" @click.stop="deldata(item.id)">
                        <delete style="width: 1em; height: 1em; color: rgb(240,100,100);" />
                      </button>
                    </div>
                  </div>
                </template>
              </Box>
            </div>
          </transition>

        </div>

        <!-- 历史 -->
        <!-- <div class="iconbox">
          <span
            class="iconfont icon-shijian"
            @click.stop="show(1)"
          ></span>

          <transition name="el-fade-in-linear">
            <div v-show="shows[1]">
              <LiShi></LiShi>
            </div>
          </transition>

        </div> -->

        <!-- 通知 -->
        <!-- <div class="iconbox">
          <span
            class="iconfont icon-jiaoxing"
            @click.stop="show(2)"
          ></span>

          <transition name="el-fade-in-linear">
            <div v-show="shows[2]">
              <TongZhi></TongZhi>
            </div>
          </transition>

        </div> -->

        <!-- 站长 -->
        <div class="iconbox">
          <span class="iconfont icon-wode" @click.stop="show(1)"></span>
          <!-- 站长box，默认隐藏 -->
          <transition name="el-fade-in-linear">
            <div v-show="shows[1]">
              <Box>
                <!-- 站长box头部 -->
                <template #header>
                  <div class="boxheader" style="border-bottom: #bbb solid 1px;">
                    <p class="title">
                      站长
                    </p>
                  </div>
                </template>
                <!-- 站长box主体 -->
                <template #default>
                  <div class="zhanzhang">
                    <!-- 头像昵称.. -->
                    <div class="flex">
                      <a href="http://wpa.qq.com/msgrd?v=3&uin=553344777&site=qq&menu=yes">
                        <img src="https://q1.qlogo.cn/g?b=qq&nk=553344777&s=640" alt="头像" title="这是头像。。"></a>
                      <div>
                        <p class="zzname">Leonus.</p>
                        <p>男&nbsp;21岁</p>
                      </div>
                    </div>
                    <!-- QQ -->
                    <a href="http://wpa.qq.com/msgrd?v=3&uin=7344437&site=qq&menu=yes" class="content">
                      <div class="flex">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-QQ1"></use>
                        </svg>
                        <p>7344437(点击联系)</p>
                      </div>
                    </a>
                    <!-- 微信 -->
                    <a href="https://www.lea.ink/wechat.html" class="content">
                      <div class="flex">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-weixin1"></use>
                        </svg>
                        <p>7344437(点击联系)</p>
                      </div>
                    </a>
                  </div>
                </template>
              </Box>
            </div>
          </transition>

        </div>

      </div>

      <span class="time" @click="showTime">{{ nowTime }}</span>

    </div>
  </div>

  <!-- 收藏弹出框 -->
  <el-dialog :width="dwidth" v-model="dialogVisible" title="添加收藏" draggable :before-close="close" close-on-press-escape>

    <el-form label-position="left" label-width="100px" :model="addstar" style="max-width: 500px" ref="formRef">
      <el-form-item label="影视名称：" prop="name">
        <el-input v-model="addstar.name" />
      </el-form-item>
      <el-form-item label="影视链接：" prop="url">
        <el-input v-model="addstar.url" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="add">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import Dayjs from "dayjs";
import Box from "@/components/box.vue";
import { Delete } from '@element-plus/icons-vue';


export default {
  name: 'Header',
  data() {
    return {
      nowTime: '',
      shows: [false, false],
      dialogVisible: false,
      addstar: {
        name: '',
        url: '',
      },
      starlist: [],
      nextId: 2,
      dwidth: '500px'
    }
  },
  computed: {
    // 判断如果收藏为空则显示空状态
    starshow() {
      let l = this.starlist.length
      if (l == 0) {
        return true
      } else {
        return false
      }
    }
  },
  created() {
    this.getNowTime()
    setInterval(() => {
      this.getNowTime()
    }, 1000);
    this.getdata()
    this.getwidth()
  },
  mounted() {
    window.onresize = () => {
      return this.getwidth()
    }
  },
  emits: ['star-play'],
  methods: {
    showTime() {
      let now = Dayjs().format("YYYY-MM-DD HH:mm:ss")
      this.$message({
        type: 'success',
        message: '现在时间是：' + now,
        'show-close': true,
        duration: 3000
      });

    },
    getwidth() {
      window.screenWidth = document.body.clientWidth
      this.screenWidth = window.screenWidth
      if (this.screenWidth < 600) {
        this.dwidth = '90%'
      }
    },
    starplay(url) {
      this.$emit('star-play', url)
    },
    getNowTime() {
      this.nowTime = Dayjs().format("HH:mm")
    },
    show(val) {
      if (this.shows[val]) {
        this.shows.forEach((item, i) => {
          this.shows[i] = false
        })
      } else {
        this.shows.forEach((item, i) => {
          this.shows[i] = false
        })
        this.shows[val] = true
      }
    },
    // 新增收藏函数
    add() {
      let name = this.addstar.name
      let url = this.addstar.url
      if (name && url) {
        this.starlist.unshift({ id: this.nextId, name: name, url: url })
        this.nextId++;
        this.savedata()
        this.close();
      }
      else {
        this.$message({
          type: 'error',
          message: '视频名称或连接不能为空！！',
          'show-close': true,
          duration: 1000
        });
      }
    },
    // 关闭收藏弹窗函数
    close() {
      this.dialogVisible = false;
      this.$refs.formRef.resetFields();
    },
    // 获取数据函数
    getdata() {
      if (localStorage.getItem('star')) {
        this.starlist = JSON.parse(localStorage.getItem('star'))
      }
    },
    // 保存数据函数
    savedata() {
      localStorage.setItem('star', JSON.stringify(this.starlist))
    },
    // 删除数据函数
    deldata(id) {
      this.starlist.some((item, i) => {
        if (item.id == id) {
          this.starlist.splice(i, 1)
          this.savedata()
        }
        return true
      })

    }
  },
  components: {
    Box,
    Delete
  },
}
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.header {
  justify-content: space-between;
  // color: #7e7e7e;
  height: 100%;
  width: 100%;

  .logo {
    height: 100%;

    img {
      height: 100%;
    }

    display: flex;
  }

  .time {
    cursor: pointer;
    color: #757575;
    font-weight: 400;
    font-size: 1.5rem;
  }

  .icons span {
    cursor: pointer;
    font-size: 1.5rem;
    margin-right: 1.5rem;
    color: #5a5a5a;
  }

  .icons span:hover {
    color: rgb(100, 158, 238);
  }

  .iconbox {
    position: relative;
    z-index: 9999;
  }

  .zhanzhang {
    margin-top: 1rem;

    img {
      width: 50px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    img:hover {
      box-shadow: 0 0 8px rgb(100, 158, 238);
      transition: 0.5s;
    }

    .zzname {
      font-size: 1.2rem;
    }

    p {
      margin: 0;
      padding: 0;
      font-size: 14px;
    }

    .content {
      color: #5a5a5a;
      display: block;
      font-size: 1.2rem;
      // background-color: #fff;
      margin: 10px 0;

      p {
        font-size: 1.1rem;
        margin-left: 0.5rem;
        padding-bottom: 1px;
      }
    }
  }
}

.boxheader {
  justify-content: space-between;
  padding: 0 0 10px;

  .title {
    font-size: 1rem;
  }
}

.shoucang {
  align-items: flex-start;
  max-height: 250px;
  flex-direction: column;

  a {
    color: #5a5a5a;
  }

  .son {
    justify-content: space-between;
    width: 100%;
    padding: 5px 0;
    border-top: #eee 1px solid;

    a:hover {
      color: rgb(243, 138, 78);
    }
  }
}

.null {
  height: 200px;
  width: 100%;
  justify-content: center;
}

.add {
  font-size: 1.5rem;
  color: #ec6666;
}

.del {
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
}

@media (max-width: 600px) {
  .header .logo {
    height: 75%;
  }

  .header .icons span {
    margin-right: 10px;
  }
}
</style>