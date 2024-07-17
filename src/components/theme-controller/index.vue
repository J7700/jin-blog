<script setup>
import { ref } from "vue";

// 获取name="theme-dropdown"的input元素
const themeController = ref(null);

// 当前选中的主题
const currentTheme = ref('default');

// 切换主题的方法
const switchTheme = (theme) => {
  currentTheme.value = theme;
  // 这里可以添加代码来动态更改页面的样式或者存储主题到本地存储等
  document.documentElement.setAttribute('data-theme', theme);
};
</script>

<template>
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">
      Theme
      <svg width="12px" height="12px" class="inline-block h-2 w-2 fill-current opacity-60"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
      <li>
        <input type="radio" name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default"
          value="default" v-model="currentTheme" @change="switchTheme($event.target.value)" />
      </li>
      <li>
        <input type="radio" name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro"
          value="retro" v-model="currentTheme" @change="switchTheme($event.target.value)" />
      </li>
      <li>
        <input type="radio" name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk"
          value="cyberpunk" v-model="currentTheme" @change="switchTheme($event.target.value)" />
      </li>
      <li>
        <input type="radio" name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine"
          value="valentine" v-model="currentTheme" @change="switchTheme($event.target.value)" />
      </li>
      <li>
        <input type="radio" name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua"
          value="aqua" v-model="currentTheme" @change="switchTheme($event.target.value)" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
</style>