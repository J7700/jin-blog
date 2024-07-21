/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        jintheme: {
          primary: "#14ffec",
          secondary: "#0074f2",
          accent: "#007f00",
          neutral: "#190200",
          "base-100": "#ffffff",
          "base-content": "#212121",
          info: "#0091ff",
          success: "#00cf73",
          warning: "#c48200",
          error: "#ff0049",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "winter",
    ],
    // themes: true, // 包含所有的主题
    darkTheme: "dark", // 默认暗黑主题
    base: true, // 添加基础样式
    styled: true, // 组件默认的颜色和样式
    utils: true, // 响应式和工具类添加
    prefix: "", // 所有的类名添加前缀
    logs: false, // CSS 构建时在命令行窗口输出日志。
    themeRoot: ":root", // 设置主题变量
  },
};
