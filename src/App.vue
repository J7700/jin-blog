<script setup>
</script>

<template>
  <div class="main">
    <div class="container">
      <h1 class="text-3xl font-bold underline">
        测试
      </h1>
      <el-button type="primary">主要按钮</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    background-color: aqua;
  }
}
</style>
