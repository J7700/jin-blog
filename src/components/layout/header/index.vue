<script setup></script>

<template>
  <div class="header-wrap">
    <div class="header-left">
      左侧
      <button class="btn btn-primary">Button</button>
      <button class="btn w-64 rounded-full">Button</button>
      <button class="btn btn-primary">One</button>
      <button class="btn btn-secondary">Two</button>
      <button class="btn btn-accent btn-outline">Three</button>
    </div>
    <div class="header-right">右侧</div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrap {
  display: flex;
  align-items: center;

  .header-left {
    width: 20%;

    .logo {
      width: 3rem;
      height: 3rem;
      transition: all 0.3s;
    }
  }

  .header-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
