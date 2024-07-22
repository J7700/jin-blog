import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index.js'
// 引用pinia
import { createPinia } from 'pinia'
// 引入pinia-plugin-persist持久化存储
import piniaPluginPersist from 'pinia-plugin-persist'
// svg-icon
import 'virtual:svg-icons-register'
// 全局样式入口
import './assets/common/css/base.scss'

const app = createApp(App)

app.use(router).use(createPinia().use(piniaPluginPersist)).mount('#app')
