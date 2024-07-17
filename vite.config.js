import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 解析路径
import { resolve } from "path";

// tailwindcss 插件
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// 自动导入 vite 插件
import AutoImport from "unplugin-auto-import/vite";
// vue 组件自动导入
import Components from "unplugin-vue-components/vite";
// element plus组件按需自动引入
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080, // 配置前端项目启动端口
    host: "0.0.0.0", // 配置前端项目启动地址
    https: false, // 是否启用 https
    open: true, // 启动后自动打开浏览器
    // 热更新
    hmr: {
      overlay: false, // 是否显示错误信息
    },
    proxy: {
      // 本地后端代理
      "/api": {
        //要访问的跨域的域名
        target: "http://localhost:8888", // 代理到的地址
        changeOrigin: true, // 是否跨域
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    // 打包输出
    build: {
      sourcemap: false, // 是否生成 source map 文件
      // 消除打包大小超过400kb警告
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
    },
  },
  // 处理 css 样式 兼容性问题
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
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
  // 配置别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
});
