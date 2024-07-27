<script lang="ts" setup>
import { ref } from 'vue'
let footerImg = ref('https://img.shields.io/badge/Blog-Yes-orange')
// const arr: { name: string; url: string }[] = [
//   {
//     name: 'Blog',
//     url: 'https://img.shields.io/badge/Blog-Yes-orange'
//   },
//   {
//     name: 'Blog',
//     url: 'https://img.shields.io/badge/Blog-Yes-orange'
//   },
//   {
//     name: 'Blog',
//     url: 'https://img.shields.io/badge/Blog-Yes-orange'
//   },
//   {
//     name: 'Blog',
//     url: 'https://img.shields.io/badge/Blog-Yes-orange'
//   }
// ]
// const handleClick = <T extends string | number>(obj: T) => {
//   // window.open(obj?.name)
//   // obj?.name.split('_')
//   // obj
// }

// handleClick<string>('3')
// handleClick<number>(undefined)
</script>

<template>
  <div class="footer-wrap bg-base-100">
    <div class="footer-wrap-container">
      <div class="text">© Jin的博客 2024</div>
      <img :src="footerImg" alt="" />
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
