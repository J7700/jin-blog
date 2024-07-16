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
  server: {
    port: 8080, // 配置前端项目启动端口
    host: "0.0.0.0",
    https: false,
    open: true, // 启动后自动打开浏览器
    // 热更新
    hmr: {
      overlay: false,
    },
    proxy: {
      // 本地后端代理
      "/api": {
        //要访问的跨域的域名
        target: "http://localhost:8888",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // 打包输出
  build: {
    sourcemap: false, // 打包后是否生成source map 文件
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000, 
    rollupOptions: { 
      input: {
        index: resolve("index.html"), // 入口文件 
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: "static/js/[name]-[hash].js", 
        entryFileNames: "static/js/[name]-[hash].js", 
        assetFileNames: "static/[ext]/[name]-[hash].[ext]", 
      },
    },
  }
});

