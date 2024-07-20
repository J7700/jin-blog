<template>
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn glass m-1">
      Theme
      <ChevronDownCircle style="font-size: 1.2em" class="text-primary" />
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
      <li v-for="(theme, index) in themeList" @click="changeTheme(index, theme)">
        <input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          :aria-label="theme" :value="theme" :checked="index == themeIndex" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useThemeStore } from "@/store/themeStore";

import ChevronDownCircle from "~icons/icon-park-solid/down-c";

const { changeThemeTo, getCurrentThemeIndex } = useThemeStore();

const themeIndex = ref(0);

const themeList = ref([
  "light",
  "dark",
  "halloween",
  "garden",
  "forest",
  "lofi",
  "fantasy",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
]);

function changeTheme(index, themeName) {
  themeIndex.value = index;
  changeThemeTo(index, themeName);
}

onMounted(() => {
  themeIndex.value = getCurrentThemeIndex();
});
</script>

<style scoped></style>
