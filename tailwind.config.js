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
    themes: false, // 如果设为 true，则会包含所有的主题。 如果设为 false，则只有白天和黑暗模式的主题。 
    darkTheme: "dark", // 默认暗黑主题
    base: true, // 如果设为 true，一些基础样式 会被添加。
    styled: true, // 如果设置为 true，组件会有默认的颜色和样式
    utils: true, // 如果设为 true，响应式和工具类会被添加
    prefix: "", // 如果设置为 true，所有的类名都会被添加前缀 
    logs: false, // 如果设为 true，daisyUI 会在 CSS 构建时在命令行窗口输出日志。
    themeRoot: ":root", // 选择器，用于设置主题变量 
  },
};

