<script setup>

</script>

<template>
  <div>
    <div class="home-content-bg h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <div class="max-w-[1280px] mx-auto flex items-center justify-center flex-col h-full">
        <h1 class="text-5xl text-base-100">Welcome to Jin's Blog</h1>
        <p ref="text" class="typing-effect text-lg text-base-100 mt-4">This is a blog built with Vue 3 and Vite 5</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-content-bg {
  // 图片不变形
  background-size: cover;
  background-position: center;
  background-image: url("@/assets/image/bg/02.png");
}
</style>
