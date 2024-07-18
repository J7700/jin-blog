<script setup></script>

<template>
  <div class="header-wrap">
    <div class="header-left">
      左侧
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
  }

  .header-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
