<script setup>
import PageHeader from "@/components/page-header/index.vue";

</script>

<template>
  <div class="main-wrap place-items-center from-primary to-base-100 bg-gradient-to-bl hero-overlay">
    <PageHeader></PageHeader>
    <div class="max-w-[1280px] mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
