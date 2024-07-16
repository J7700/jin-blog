import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 自动导入 vite 插件
import AutoImport from "unplugin-auto-import/vite";
// vue 组件自动导入
import Components from "unplugin-vue-components/vite";
// element plus组件按需自动引入
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // element plus组件按需自动引入
      resolvers: [ElementPlusResolver()],
    }),
    // vue 组件自动导入
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});

