<script setup>
import ThemeController from "@/components/theme-controller/index.vue";
</script>

<template>
  <div class="header-wrap">
    <div class="header-left">
      左侧
    </div>
    <div class="header-right">
      <ThemeController class="theme-controller" </ThemeController>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrap {
  display: flex;
  align-items: center;

  .header-left {
    width: 20%;
  }

  .header-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .theme-controller {
      margin-right: 100px;
    }
  }
}
</style>
