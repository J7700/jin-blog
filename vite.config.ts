import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 解析路径 用于配置别名
import { resolve } from 'path'

// 图标插件 用于自动导入图标
import Icons from 'unplugin-icons/vite'

// svg图标插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// tailwindcss 插件
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// 自动导入 vite 插件
import AutoImport from 'unplugin-auto-import/vite'
// vue 组件自动导入
import Components from 'unplugin-vue-components/vite'
// element plus组件按需自动引入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8090, // 配置前端项目启动端口
    host: '0.0.0.0', // 配置前端项目启动地址
    https: undefined, // 是否启用 https
    open: true, // 启动后自动打开浏览器
    // 热更新
    hmr: {
      overlay: false // 是否显示错误信息
    },
    proxy: {
      // 本地后端代理
      '/api': {
        //要访问的跨域的域名
        target: 'http://localhost:8888', // 代理到的地址
        changeOrigin: true, // 是否跨域
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 处理 css 样式 兼容性问题
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['@vueuse/core'],
      // element plus组件按需自动引入
      resolvers: [ElementPlusResolver()]
    }),
    // vue 组件自动导入
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    Icons({
      // 实验性功能 当您导入图标时，它会自动检测合适的包管理器（npm、yarn 或 pnpm）来安装图标集。
      autoInstall: true
    }),
    // svg
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/image/icons/svg')]
    })
  ],
  resolve: {
    alias: {
      // '@' 将指向 'src' 目录
      '@': resolve(__dirname, 'src')
    }
  },
  // 打包输出
  build: {
    sourcemap: false, // 是否生成 source map 文件
    // 消除打包大小超过400kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: resolve('index.html') // 入口文件
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
