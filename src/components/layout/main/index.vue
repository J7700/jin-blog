<script setup>
import PageHeader from '@/components/page-header/index.vue'
import BgComponents from '@/components/bg-components/index.vue'
</script>

<template>
  <PageHeader></PageHeader>
  <div class="main-wrap place-items-center from-primary to-base-100 bg-gradient-to-bl hero-overlay">
    <!-- <BgComponents></BgComponents> -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
