import { createApp } from "vue";
import App from "./App.vue";
// 全局样式入口
import "./assets/common/css/base.scss";
// element-plus 暗黑主题
import "element-plus/theme-chalk/dark/css-vars.css";
// element-plus样式
import "element-plus/dist/index.css";
// svg-icon
import "virtual:svg-icons-register";
// 引入路由
import router from "./router/index.js";

const app = createApp(App);

app.use(router).mount("#app");
