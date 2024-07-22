<script setup>
import ThemeController from "@/components/theme-controller/index.vue";
import MdiAbjadHebrew from "~icons/mdi/abjad-hebrew";
import IconpParkSearch from "~icons/icon-park-outline/search";
</script>

<template>
  <div class="page-header-wrap bg-base-100">
    <div class="header-left">
      <MdiAbjadHebrew class="logo text-base-content"></MdiAbjadHebrew>
    </div>
    <div class="header-right">
      <div class="flex justify-end px-2 items-center">
        <div>
          <button class="btn glass btn-circle mr-1">
            <IconpParkSearch class="text-base-content" />
          </button>
        </div>
        <ThemeController class="theme-controller" </ThemeController>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-header-wrap {
  height: 60px;
  display: flex;
  align-items: center;

  .header-left {
    width: 20%;

    .logo {
      width: 3rem;
      height: 3rem;
      transition: all 0.3s;
    }

    .logo:hover {
      transform: rotate(180deg);
      cursor: pointer;
    }
  }

  .header-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

// 767px 以上隐藏
@media (min-width: 768px) {
  .page-header-wrap {
    display: none;
  }
}
</style>
