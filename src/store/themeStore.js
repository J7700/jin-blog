import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('light');
  const themeIndex = ref(0);

  function initialTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.setAttribute('data-theme', theme.value);
  }

  function changeThemeTo(index, themeName) {
    themeIndex.value = index;
    theme.value = themeName;
  }

  function getCurrentThemeIndex() {
    return themeIndex.value;
  }

  return { theme, themeIndex, initialTheme, changeThemeTo, getCurrentThemeIndex }
}, {
  persist: {
    enabled: true, // 开启数据持久化
    strategies: [
      {
        key: 'themeState', // 给一个要保存的名称
        storage: localStorage, // localStorage 存储方式
      },
    ],
  }
})