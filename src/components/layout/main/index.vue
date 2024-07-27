<script lang="ts" setup></script>

<template>
  <div class="main-wrap from-primary to-base-100 bg-gradient-to-bl hero-overlay">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-wrap {
  width: 100%;
  min-height: calc(100vh - 120px);
  place-items: center;
}
</style>
