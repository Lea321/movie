import { createApp } from 'vue'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/assets/icon/iconfont.js'
import '@/assets/icon/iconfont.css'
// 导入icons


import App from './App.vue'
import './registerServiceWorker'
// import router from './router'


const app = createApp(App)

app.use(ElementPlus)
    // app.use(router)


app.mount('#app')