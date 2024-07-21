<script setup>
import PageHeader from "@/components/page-header/index.vue";
import BgComponents from "@/components/bg-components/index.vue";
</script>

<template>
  <div class="main-wrap place-items-center from-primary to-base-100 bg-gradient-to-bl hero-overlay">
    <BgComponents></BgComponents>
    <PageHeader></PageHeader>
    <div class="max-w-[1280px] mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
