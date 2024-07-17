/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false, // 包含所有的主题
    darkTheme: "dark", // 默认暗黑主题
    base: true, // 添加基础样式
    styled: true, // 组件默认的颜色和样式
    utils: true, // 响应式和工具类添加
    prefix: "", // 所有的类名添加前缀 
    logs: false, // CSS 构建时在命令行窗口输出日志。
    themeRoot: ":root", // 设置主题变量 
  },
};

