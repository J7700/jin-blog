<script setup>
import PageHeader from "@/components/page-header/index.vue";

</script>

<template>
  <div class="main-wrap">
    <PageHeader></PageHeader>
    <div class="max-w-[1280px] mx-auto place-items-center from-primary to-base-100 bg-gradient-to-bl hero-overlay">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
