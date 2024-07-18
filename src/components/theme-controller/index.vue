<template>
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">
      Theme
      <svg-icon name="test" class="w-[2rem] h-[2rem]"</svg-icon>
    </div>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
    >
      <li
        v-for="(theme, index) in themeList"
        @click="changeTheme(index, theme)"
      >
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          :aria-label="theme"
          :value="theme"
          :checked="index == themeIndex"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useThemeStore } from "@/store/themeStore";

const { changeThemeTo, getCurrentThemeIndex } = useThemeStore();

const themeIndex = ref(0);
const themeList = ref([
  "acid",
  "aqua",
  "autumn",
  "black",
  "bumblebee",
  "business",
  "cmyk",
  "coffee",
  "corporate",
  "cupcake",
  "cyberpunk",
  "dark",
  "dim",
  "dracula",
  "emerald",
  "fantasy",
  "forest",
  "garden",
  "halloween",
  "lemonade",
  "light",
  "lofi",
  "luxury",
  "night",
  "nord",
  "pastel",
  "retro",
  "sunset",
  "synthwave",
  "valentine",
  "winter",
  "wireframe",
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
