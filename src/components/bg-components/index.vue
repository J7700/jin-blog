<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  bgImage: {
    type: String,
    default: ''
  }
})

const computedBackgroundImage = computed(() => ({
  backgroundImage: `url(${props.bgImage})`
}))
</script>

<template>
  <div>
    <div class="home-content-bg" :style="computedBackgroundImage">
      <div class="max-w-[1280px] mx-auto flex items-center justify-center flex-col h-full">
        <h1 class="text-5xl text-base-100">{{ title }}</h1>
        <p ref="text" class="typing-effect text-lg text-base-100 mt-4">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-content-bg {
  height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}
</style>
