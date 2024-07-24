<script setup></script>

<template>
  <div class="footer-wrap bg-base-100">
    <div class="footer-wrap-container">
      <div class="text">© Jin的博客 2024</div>
      <img src="https://img.shields.io/badge/Blog-Yes-orange" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrap {
  width: 100%;
  height: 120px;
  border-top: 1px solid oklch(var(--b3));
  backdrop-filter: saturate(100%) blur(3px);
  opacity: 0.8;
  .footer-wrap-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    .text {
      font-size: 1.25rem;
      line-height: 1.75rem;
      text-align: center;
      margin-bottom: 5px;
    }
  }
}
</style>
