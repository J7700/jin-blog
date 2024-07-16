import { createApp } from "vue";
import "./assets/common/css/base.scss";
import App from "./App.vue";
import router from "./router/index.js";
import "element-plus/dist/index.css";
const app = createApp(App);

app.use(router).mount("#app");
