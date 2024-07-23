<script setup>
import BgComponents from '@/components/bg-components/index.vue'
</script>

<template>
  <div class="main-wrap place-items-center from-primary to-base-100 bg-gradient-to-bl hero-overlay">
    <BgComponents></BgComponents>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
